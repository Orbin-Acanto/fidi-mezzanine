import type { Metadata } from "next";
import FloorPlansContent from "@/components/FloorPlansContent";

export const metadata: Metadata = {
  title: "Floor Plans | The Mezzanine NYC",
  description:
    "View detailed floor plans of The Mezzanine event venue in Manhattan's Financial District. Explore layout options for your corporate event, wedding, or private celebration.",
  keywords: [
    "floor plans",
    "venue layout",
    "event space planning",
    "The Mezzanine NYC",
    "FiDi venue",
  ],
};

export default function FloorPlansPage() {
  return <FloorPlansContent />;
}
