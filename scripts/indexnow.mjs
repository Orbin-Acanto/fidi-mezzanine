// Sends every URL in the live sitemap to IndexNow (Bing, Yandex and others)
const HOST = "www.fidimezzanine.com";
const KEY = "bb42e09ae26719654bf2f924f1b8518f";

const res = await fetch(`https://${HOST}/sitemap.xml`);
if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
if (!urlList.length) throw new Error("No URLs found in sitemap");

const post = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`Submitted ${urlList.length} URLs: ${post.status} ${post.statusText}`);
if (!post.ok) process.exit(1);
