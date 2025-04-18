import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cost of Life",
    short_name: "COL",
    description: "Track prices of all kinds of goods across global markets.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff", //TODO
    theme_color: "#000000", // TODO
    //TODO
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
