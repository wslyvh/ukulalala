import { Progression } from "@/components/progression";
import { getProgression, getScale } from "@/utils/music";
import { SITE_URL } from "@/utils/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface ProgressionParams {
  params: {
    key: string;
    progression: string;
  };
}

export async function generateMetadata({ params }: ProgressionParams) {
  const scale = getScale(params.key);
  const progression = getProgression(params.progression);

  const baseUri = new URL(`${SITE_URL}`);
  const pageUri = `${baseUri}progressions/${
    scale.key
  }/${progression.progression.join("-")}`;
  const title = `${progression.name} in ${scale.key}`;
  const description = `Check out this ${
    progression.name
  } chord progression (${progression.progression.join("-")}) in the key of ${
    scale.key
  }.`;

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

export default async function Home({ params }: ProgressionParams) {
  const scale = getScale(params.key);
  const progression = getProgression(params.progression);

  return <Progression scale={scale} progression={progression} />;
}
