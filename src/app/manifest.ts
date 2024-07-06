import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#ece3ca',
    theme_color: '#282425',
    icons: [
      { src: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/sup-maskable', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
