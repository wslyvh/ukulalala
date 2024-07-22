import { Progression } from "@/components/progression";
import { MajorScales } from "@/data/keys";
import progressions from "@/data/progressions.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const scale = MajorScales[Math.floor(Math.random() * MajorScales.length)]
  const progression = progressions[Math.floor(Math.random() * progressions.length)]

  return <Progression scale={scale} progression={progression} />
}
