'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const page = usePathname()

    return (
        <div role="tablist" className="tabs tabs-boxed tabs-xs gap-1">
          <Link role="tab" href='/' className={`tab px-4 hover:bg-neutral-content ${page === '/' ? 'bg-neutral-content' : ''}`}>Random Exercise</Link>
          <Link role="tab" href='/progressions' className={`tab px-4 hover:bg-neutral-content ${page === '/progressions' ? 'bg-neutral-content' : ''}`}>Chord Progressions</Link>
          <Link role="tab" href='/metronome' className={`tab px-4 hover:bg-neutral-content ${page === '/metronome' ? 'bg-neutral-content' : ''}`}>Metronome</Link>
        </div>
    )
}