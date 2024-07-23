import { SITE_DESCRIPTION, SITE_EMOJI, SITE_NAME } from "@/utils/site";
import { ImageResponse } from "next/og";
import { ProgressionParams } from "./page";
import {
  getChordName,
  getColor,
  getProgression,
  getRomanNumeral,
  getScale,
} from "@/utils/music";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: ProgressionParams) {
  const scale = getScale(params.key);
  const progression = getProgression(params.progression);

  let margin = `mx-2`
  if (progression.progression.length > 6) {
    margin = `mx-40`
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center bg-[#ece3ca] text-[#282425] w-full h-full p-4">
        <div tw='flex flex-col items-center justify-center shrink-0'>
          <h1 style={{ fontSize: 128 }} tw="m-0 p-0">
            {SITE_EMOJI}
          </h1>
          <h2 style={{ fontSize: 64 }} tw="m-0 p-0">
            {progression.name}
          </h2>
          <p style={{ fontSize: 28 }} tw="text-[#dc8850] mb-4">
            in the key of {scale.key}
          </p>
        </div>
        <div tw={`flex flex-wrap justify-center my-8 ${margin}`}>
          {progression.progression.map((i, index) => {
            const chord = scale.scale[i - 1];
            const className = `flex flex-col w-40 m-4 items-center text-sm border-t-4 ${getColor(i)}`

            return (
              <div key={`chord_${index}`} tw={className}>
                <span tw="text-2xl">{getChordName(chord)}</span>
                <span tw="text-xs border border-neutral-300 px-2 rounded">{getRomanNumeral(i)}</span>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
