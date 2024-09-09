import { Metronome } from "@/components/metronome";
import { SITE_URL } from "@/utils/site";

export async function generateMetadata() {
  const title = "Metronome";
  const description = "A simple metronome to help you practice your timing.";
  const baseUri = new URL(`${SITE_URL}`);
  const pageUri = `${baseUri}metronome`;

  return {
    title: title,
    description: description,
    metadataBase: new URL(baseUri),
    openGraph: {
      title: title,
      description: description,
      images: `${pageUri}/opengraph-image`,
    },
    twitter: {
      title: title,
      description: description,
      images: `${pageUri}/opengraph-image`,
      card: "summary_large_image",
    },
  };
}

export default async function Page() {
  return <Metronome />
}
