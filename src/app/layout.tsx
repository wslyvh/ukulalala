import { PropsWithChildren } from "react";
import { SITE_CONFIG } from "@/utils/config";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8">
          <header className='flex flex-col text-center justify-center'>
            <h1 className="text-4xl">{SITE_CONFIG.emoji} {SITE_CONFIG.title}</h1>
            <h2 className="text-sm mt-2">{SITE_CONFIG.description}</h2>
          </header>

          <div className='my-4 sm:my-8'>{props.children}</div>
        
          <footer>
            <hr className="h-px my-4 bg-gray-200 border-0" />
            <p className="text-sm">
              Made with <span role="img" aria-label="heart">❤️</span> by <Link href="https://x.com/wslyvh">wslyvh</Link>
            </p>
          </footer>
        </main>
      </body>
      <Script src="//pianosnake.github.io/uke-chord/uke-chord.js" />
    </html>
  );
}
