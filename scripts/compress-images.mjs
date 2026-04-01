import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";

const DIRS = ["public/gallery", "public/slider", "public/spaces", "public/events"];
const QUALITY = 80;
const EXTS = new Set([".jpg", ".jpeg", ".png"]);

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for (const dir of DIRS) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.log(`Skipping ${dir} (not found)`);
    continue;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!EXTS.has(ext)) continue;

    const input = join(dir, file);
    const tmp = input + ".tmp.jpg";

    const before = (await stat(input)).size;

    try {
      await sharp(input)
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(tmp);

      const after = (await stat(tmp)).size;

      if (after < before) {
        // Replace original with compressed version, keep same filename
        const newName = join(dir, basename(file, ext) + ".jpg");
        if (input !== newName) {
          // If original was .png, rename to .jpg
          await rename(tmp, newName);
          // Remove original .png
          const { unlink } = await import("fs/promises");
          await unlink(input);
        } else {
          await rename(tmp, input);
        }
        totalBefore += before;
        totalAfter += after;
        count++;
        const saved = (((before - after) / before) * 100).toFixed(1);
        console.log(`✓ ${dir}/${file} → ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (-${saved}%)`);
      } else {
        // Already small enough, remove tmp
        const { unlink } = await import("fs/promises");
        await unlink(tmp);
        console.log(`— ${dir}/${file} already optimal, skipped`);
      }
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
      try {
        const { unlink } = await import("fs/promises");
        await unlink(tmp);
      } catch {}
    }
  }
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const beforeMB = (totalBefore / 1024 / 1024).toFixed(1);
const afterMB = (totalAfter / 1024 / 1024).toFixed(1);
console.log(`\nDone: ${count} files compressed`);
console.log(`Total: ${beforeMB}MB → ${afterMB}MB (saved ${savedMB}MB)`);
