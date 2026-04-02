import { ExportFormat, LegendItemConfig, Tool } from "@/types/floorplan.types";

export const emptyFashionVenue = [
  { src: "/empty/3.jpg", alt: "Empty 48 Wall Street", span: "small" },
  { src: "/empty/2.jpg", alt: "Empty 48 Wall Street", span: "tall" },
  { src: "/empty/1.jpg", alt: "Empty 48 Wall Street", span: "large" },
  { src: "/empty/4.jpg", alt: "Empty 48 Wall Street", span: "tall" },
  { src: "/empty/6.jpg", alt: "Empty 48 Wall Street", span: "wide" },
  { src: "/empty/5.jpg", alt: "Empty 48 Wall Street", span: "small" },
];

export const services = [
  {
    title: "Dedicated Event Experts",
    body: "Our staff brings decades of hospitality and production expertise to your event, ensuring flawless execution. We assist at every stage, managing complex logistics and operations so you can enjoy a completely stress-free and successful occasion.",
  },
  {
    title: "Production & AV",
    body: "Bring your event to life with cutting-edge audio-visual technology, professional lighting, and seamless production management. Our technical experts ensure flawless execution, from sound systems and LED displays to live streaming and immersive stage design.",
  },
  {
    title: "Culinary & Mixology",
    body: "Delight your guests with exceptional cuisine and handcrafted cocktails tailored to your event theme. Our culinary partners create memorable dining experiences, from elegant plated dinners to interactive food stations and signature drink menus.",
  },
];

export const exportFormats = [
  {
    id: "json" as ExportFormat,
    name: "JSON",
    description: "Full floor plan data with all settings",
    recommended: true,
  },
  {
    id: "svg" as ExportFormat,
    name: "SVG",
    description: "Vector format for designers (no header)",
  },
  {
    id: "png" as ExportFormat,
    name: "PNG",
    description: "Presentation-ready image with header & signature line",
  },
  {
    id: "pdf" as ExportFormat,
    name: "PDF",
    description: "Client-ready PDF with header & approval section",
  },
];

export const LEGEND_ITEMS: LegendItemConfig[] = [
  {
    category: "Seating",
    label: "Seating",
    color: "#2BACE2",
  },
  {
    category: "Black Highboys",
    label: "BLACK HIGH BOYS WITH STOOLS",
    color: "#000000",
  },
  {
    category: '36" Round Tables',
    label: '36" ROUND TABLES',
    color: "#2BACE2",
  },
  {
    category: '54" Round Tables',
    label: '54" ROUND TABLES',
    color: "#2BACE2",
  },
  {
    category: '60" Round Tables',
    label: '60" ROUND TABLES',
    color: "#2BACE2",
  },
  {
    category: '72" Round Tables',
    label: '72" ROUND TABLES',
    color: "#2BACE2",
  },
  {
    category: "Swag Table",
    label: "SWAG TABLE",
    color: "#2E3192",
  },
  {
    category: "Award Table",
    label: "AWARD TABLE",
    color: "#F9ED32",
  },
  {
    category: "Square Table",
    label: "Square Table",
    color: "#1E88E5",
  },
  {
    category: "Auction Tables",
    label: "AUCTION TABLES",
    color: "#6BC5A8",
  },
  {
    category: "Registration",
    label: "REGISTRATION TABLE",
    color: "#662D91",
  },
  {
    category: "Conference Table",
    label: "Conference Table",
    color: "#26A69A",
  },
  {
    category: "Exhibitor Table 6ft",
    label: "Exhibitor Table 6ft",
    color: "#FFCA28",
  },
  {
    category: "Exhibitor Table 8ft",
    label: "Exhibitor Table 8ft",
    color: "#FFA726",
  },
  {
    category: "Sponsor Table 6ft",
    label: "Sponsor Table 6ft",
    color: "#FF7043",
  },
  {
    category: "Sponsor Table 8ft",
    label: "Sponsor Table 8ft",
    color: "#EC407A",
  },
  {
    category: "Banquet Table 6ft",
    label: "Banquet Table 6ft",
    color: "#AB47BC",
  },
  {
    category: "Banquet Table 8ft",
    label: "Banquet Table 8ft",
    color: "#7E57C2",
  },
  {
    category: "4 ft Table",
    label: "4 ft Table",
    color: "#66BB6A",
  },
  {
    category: "6 ft Table",
    label: "6 ft Table",
    color: "#9CCC65",
  },
  {
    category: "8 ft Table",
    label: "8 ft Table",
    color: "#D4E157",
  },
  {
    category: "Staging-1",
    label: "8'X8' STAGE",
    color: "#00A651",
  },
  {
    category: "Staging-2",
    label: "8'X16' STAGE",
    color: "#00A651",
  },
  {
    category: "Staging-3",
    label: "8'X24' STAGE",
    color: "#00A651",
  },
  {
    category: "Podium / Mic",
    label: "PODIUM / MIC",
    color: "#F7941D",
  },
  {
    category: "6' Bar",
    label: "6' BAR",
    color: "#4B77BE",
  },
  {
    category: "12' Bar",
    label: "12' BAR",
    color: "#00A79D",
  },
  {
    category: "18' Bar",
    label: "18' BAR",
    color: "#9E1F63",
  },
  {
    category: "24' Bar",
    label: "24' BAR",
    color: "#E67E22",
  },
  {
    category: "Coffee",
    label: "COFFEE",
    color: "#355855",
  },
  {
    category: "Red Carpet",
    label: "RED CARPET",
    color: "#AF2025",
  },
  {
    category: "Blue Carpet",
    label: "BLUE CARPET",
    color: "#0000FF",
  },
  {
    category: "asian station",
    label: "ASIAN STATION",
    color: "#39B54A",
  },
  {
    category: "latin station",
    label: "LATIN STATION",
    color: "#603913",
  },
  {
    category: "pasta station",
    label: "PASTA STATION",
    color: "#92278F",
  },
  {
    category: "kosher station",
    label: "KOSHER STATION",
    color: "#FFEA00",
  },
];

export const CUSTOM_TABLE_COLORS = [
  "#8B4789",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#E53935",
  "#D81B60",
  "#8E24AA",
  "#5E35B1",
  "#3949AB",
];

export const tools: { id: Tool; label: string; icon: React.ReactElement }[] = [
  {
    id: "pan",
    label: "Pan",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
  },
];
