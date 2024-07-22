import { PropsWithChildren } from "react";
import { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_DOMAIN, SITE_EMOJI, SITE_NAME, SITE_URL, SOCIAL_TWITTER } from "@/utils/site";
import { Newsletter } from "@/components/newsletter";
import PlausibleProvider from 'next-plausible'
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} @ %s`,
  },
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: '/opengraph-image',
  },
  twitter: {
    card: 'summary_large_image',
    site: SOCIAL_TWITTER,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: '/opengraph-image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain={SITE_DOMAIN} />
        <link rel='icon' href='/icons/favicon.ico' sizes='any' />
        <link rel='shortcut icon' href='/icons/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' type='image/png' sizes='any' />
      </head>
      <body>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-between p-4 sm:p-8">
          <header className='flex flex-col text-center justify-center my-8'>
            <Link href='/'>
              <h1 className="text-4xl">{SITE_EMOJI} {SITE_NAME}</h1>
            </Link>
            <h2 className="text-sm mt-2">{SITE_DESCRIPTION}</h2>            
          </header>

          <div className='my-4 sm:my-8'>{props.children}</div>
        
          <footer className='flex flex-col items-center my-8'>
            <Newsletter className="my-8" />

            <p className="text-xs">
              Made with <span role="img" aria-label="heart">❤️</span> by <Link href={`https://x.com/${SOCIAL_TWITTER}`}>{SOCIAL_TWITTER}</Link>
            </p>
          </footer>
        </main>
      </body>
      <Script src="//pianosnake.github.io/uke-chord/uke-chord.js" />
    </html>
  );
}
