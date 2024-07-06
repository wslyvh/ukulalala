import { SITE_DESCRIPTION, SITE_EMOJI, SITE_NAME } from '@/utils/site'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = SITE_NAME
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div tw='flex flex-col items-center justify-center bg-[#ece3ca] text-[#282425] w-full h-full p-4'>
        <h1 style={{ fontSize: 128 }} tw='m-0 p-0'>
          {SITE_EMOJI}
        </h1>
        <h2 style={{ fontSize: 64 }} tw='m-0 p-0'>
          {SITE_NAME}
        </h2>
        <div tw='flex my-12'>
          <img width="537" height="184" src="data:image/png;base64,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"/>
        </div>
        <p style={{ fontSize: 28 }} tw='text-[#dc8850] mb-12'>{SITE_DESCRIPTION}</p>
      </div>
    )
  )
}
