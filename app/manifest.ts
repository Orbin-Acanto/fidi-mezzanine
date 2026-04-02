import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FiDi Mezzanine",
    short_name: "FiDi Mezzanine",
    description:
      "Manhattan's premier event venue at 55 Broadway in the Financial District. Corporate events, weddings, and private parties for up to 400 guests.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#d2b371",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
