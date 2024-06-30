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
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
          <header className='flex flex-col text-center justify-center'>
            <h1 className="text-4xl">{SITE_CONFIG.title}</h1>
            <h2 className="text-sm mt-2">{SITE_CONFIG.description}</h2>
          </header>

          <div>{props.children}</div>
        
          <footer>
            <p>
              Made with <span role="img" aria-label="heart">❤️</span> by <Link href="https://x.com/wslyvh">wslyvh</Link>
            </p>
          </footer>
        </main>
      </body>
      <Script src="//pianosnake.github.io/uke-chord/uke-chord.js" />
    </html>
  );
}
