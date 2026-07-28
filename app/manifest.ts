import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "VP CRANES", short_name: "VP CRANES", description: "Heavy lifting and crane solutions.", start_url: "/", display: "standalone", background_color: "#172126", theme_color: "#172126", icons: [{ src: "/images/logo.png", sizes: "694x694", type: "image/png" }] };
}
