"use client";

import { SOCIAL_TWITTER } from "@/utils/site";
import { Newsletter } from "./newsletter";
import { usePathname } from "next/navigation";
import { ShareButtons } from "./share";
import Link from "next/link";

interface Props {
  className?: string;
}

export function Footer(props: Props) {
  const pathname = usePathname()
  let className = "flex flex-col items-center";
  if (props.className) className += ` ${props.className}`;

  return (
    <>
      <footer className={className}>
        {pathname.startsWith("/progressions") && (
            <ShareButtons className="my-8" />
        )}
        {!pathname.startsWith("/progressions") && (
            <Newsletter className="my-8" />
        )}

        <p className="text-xs">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <Link href={`https://x.com/${SOCIAL_TWITTER}`}>{SOCIAL_TWITTER}</Link>
        </p>
      </footer>
    </>
  );
}
