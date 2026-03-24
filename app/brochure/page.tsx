import type { Metadata } from "next";
import BrochureFlipbook from "@/components/BrochureFlipbook";

export const metadata: Metadata = {
  title: "Brochure | The Mezzanine NYC",
  description:
    "Browse The Mezzanine brochure. Explore our premium event venue in Manhattan's Financial District.",
  keywords: ["brochure", "event venue", "The Mezzanine NYC", "FiDi venue"],
};

export default function BrochurePage() {
  return (
    <div className="pt-24">
      <BrochureFlipbook />
    </div>
  );
}
