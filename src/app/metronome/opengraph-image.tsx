import { SITE_DESCRIPTION, SITE_EMOJI, SITE_NAME } from "@/utils/site";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex flex-col bg-[#ece3ca] text-[#282425] w-full h-full">
        <div tw="flex flex-col p-6">
          <div tw="flex items-center">
            <span tw="text-7xl mr-4">{SITE_EMOJI}</span>
            <div tw="flex flex-col">
              <span tw="text-2xl font-bold">{SITE_NAME}</span>
              <span tw="text-[#dc8850]">Great Ukulele tools</span>
            </div>
          </div>
          <div tw="flex flex-col items-center justify-center mt-4">
            <span tw="text-4xl">Metronome</span>
            <span tw="text-xl">Practice timer</span>
            <div tw='flex flex-col items-center w-52 h-52 bg-[#dc8850] text-white rounded-full mt-4'>
              <span tw="text-8xl font-mono mt-8">90</span>
              <span tw="text-2xl -mt-2">BPM</span>
            </div>
          </div>
          <div tw='flex justify-center mt-8'>
            <div tw="flex bg-[#dbca9a] items-center rounded-xl p-4">
              <img tw='w-[343px] mx-4' src='data:image/png;base64,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' />
              <img tw='w-[343px] ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAAwCAMAAACSacl8AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZhQTFRF28qar6F9KCQlenBa2ciZNjEuKiYm08KVz7+SKSUmSkQ8aWFQqZx5pJd2f3RdnpFye3FceW9ZsaN/rJ58Tkg+MCwqR0E6k4dr1MOVVU5DYVlKhXpiOzUxSEI5uqyFiH1jPDczQDo1tKaAVk5DMi0rRD43kIRp0L+STUY8NC8t2MiYtaeCRkA5V1BDl4ttKycnV09DfXNcVE1CzLyQlYltZl5Nmo1vKyYn0sKUZFtM2smZMSwrMy4so5Z11MSWLikpU0xBiX5lp5p5qJt5mY1vRT841sWXPzk0QTw2OTQwPDYybWRSPTgzv7CIenBby7uPRT4418aXPjgzLCgod25ZlIhsva6GwbKJTkc9UUpAYVlLt6mCSUI6sKJ+cmlWw7SKlopsgndfdWtXgHZfSUM7WVFFm49wybmOTEU9xraMjYFmOjUxLysqh3xji4Bmppl3q516p5p4b2ZTeG5ZMy8tQz03Qz02xLWLXFVHaWBQxbWLoZR0XVVIbWdbXFZPNTEwYVpSpZp/ZV5VbWZbfXZs0cmz7OPKyruQpJQniwAAApRJREFUeJzt2V1IU3EYx/HnGQ1HL7MaoVc2vWgaSVBCRCCVpfQe1U1RrKTwtroJ2YvTWdFFF3UpSDET6sLCrIxR9HZVEaE41AILvDAlQnuzTD2dc3ZmHKg2sKfHvzwfGDuMc/Hjy9jZzhAEBeQeMEtJVxq/7YqIE/97yCxjdJ2jd/wOLsSvqRel63SZ79d5o3M/w4Iv8z+mXpSu02V2zf7kHoZFIws/ePSiOGh2NR65QzkD4FyClj7Ic+pPr7g3q8Ds6nvjfg+FerLXy8ayEis67V2XI3YUuLWOnIHVI5iNL0qecY9WQPK6tcqJoE0+X/u0KOHyTXTZu4KnAHHcMTT+dmn/uieliA95Jysh2XXDo/X4YOO9zfc3xaHi3Y9uW9eyu7AF7xiPbe3GyVtvsS5WQ7Lrjtvb+3vKW3ff3HUD9mD3n7ruu75XPx+vMW9WgfX9NX8NvuyBA1f3N7t8xVeMpoeaD8b8Tfauh2P+S1Ae512sBqtrZeJbSSMsHq5s29l4tKEq5o9XXC7Laxv02LqWFuvFewsv8E5WgtX1+EXw9gGcGG3B3E6Ak2NZ5494sKGqydYVTmFr/ko8wztZCXJ/gIZ0pSFdaUhXGtKVhnSlIV1pSFca0pWGdKUhXWlIVxrSlYZ0pSFdaaS6BrCll3VIGgHEqP4UQqzhnpIRq2v1Od4Z6UQiU4e1Ib4ZmUt2VSirImHNroGz3DP+LnAaoA6NqZoWBqhR4KPA7Bqc4f9YBeuhzmEdT4YhHOEckxmza9GMvmTpV6soRFMXWC0EoVrWNRkx5zrSncWvfuooCHCMcUh63vbH0pWCt1q6UpCuJH59Dsh165+T71k05HcBDfkdS0Puu9CQ+4Q05L42DelKQ7rS+AmeEMgxY2iKhAAAAABJRU5ErkJggg==' />
              <div tw='flex items-center justify-center ml-8 mr-4 w-10 h-10 bg-[#282425] text-white rounded-full'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
