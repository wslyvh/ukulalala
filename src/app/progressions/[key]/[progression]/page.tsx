import { Progression } from "@/components/progression";
import { MajorScales } from "@/data/keys";
import progressions from "@/data/progressions.json";
import slugify from "slugify";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Params {
  params: {
    key: string;
    progression: string;
  };
}

export default async function Home({ params }: Params) {
  const scale =
    MajorScales.find((i) => i.key.toLowerCase() === params.key.toLowerCase()) ||
    MajorScales[Math.floor(Math.random() * MajorScales.length)];
  const progression =
    progressions.find(
      (i) =>
        slugify(i.name, { strict: true, lower: true }) ===
          slugify(params.progression, { strict: true, lower: true }) ||
        i.progression.join("") === params.progression ||
        i.progression.join("-") === params.progression
    ) || progressions[Math.floor(Math.random() * progressions.length)];

  return <Progression scale={scale} progression={progression} />;
}
