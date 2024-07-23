import { MajorScales } from "@/data/keys";
import progressions from "@/data/progressions.json";
import slugify from "slugify";

export function getChordName(chord: any) {
  return `${chord.key}${chord.suffix
    .replace("major", "")
    .replace("minor", "m")
    .replace("dim", "°")}`;
}

export function getRomanNumeral(i: number) {
  if (i === 1) return "I";
  if (i === 2) return "ii";
  if (i === 3) return "iii";
  if (i === 4) return "IV";
  if (i === 5) return "V";
  if (i === 6) return "vi";
  if (i === 7) return "vii°";

  console.error("Invalid roman numeral input.");
  return "";
}

export function getColor(i: number) {
  if (i === 1) return "border-red-300";
  if (i === 2) return "border-orange-300";
  if (i === 3) return "border-yellow-300";
  if (i === 4) return "border-blue-300";
  if (i === 5) return "border-green-300";
  if (i === 6) return "border-fuchsia-300";
  if (i === 7) return "border-neutral-300";

  return "";
}

export function getScale(key: string) {
  return (
    MajorScales.find((i) => i.key.toLowerCase() === key.toLowerCase()) ||
    MajorScales[Math.floor(Math.random() * MajorScales.length)]
  );
}

export function getProgression(progression: string) {
  return (
    progressions.find(
      (i) =>
        slugify(i.name, { strict: true, lower: true }) ===
          slugify(progression, { strict: true, lower: true }) ||
        i.progression.join("") === progression ||
        i.progression.join("-") === progression
    ) || {
      name: "Chord Progression",
      progression: progression.split("-").map(Number),
    }
  );
}
