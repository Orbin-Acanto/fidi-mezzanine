"use client";

import dynamic from "next/dynamic";

const BrochureFlipbook = dynamic(() => import("@/components/BrochureFlipbook"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[400px] text-gray-500">
      Loading brochure...
    </div>
  ),
});

export default function BrochureClient() {
  return (
    <div className="pt-24">
      <BrochureFlipbook />
    </div>
  );
}
