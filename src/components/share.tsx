"use client";

interface Props {
  title?: string;
  subject?: string;
  text?: string;
  className?: string;
}

export function ShareButtons(props: Props) {
  let className = "flex flex-col items-center gap-4";
  if (props.className) className += ` ${props.className}`;
  const title = props.title || "Share Progression";
  const subject = props.subject || "Chord progression";
  const text = props.text || "Check out this chord progression";

  return (
    <>
      <div className={className}>
        <h4 className="text-xl text-center">{title}</h4>
        <div className="flex items-center gap-4 mb-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
          >
            <img
              src="https://static.addtoany.com/buttons/facebook.svg"
              width="32"
              height="32"
              className="rounded-full p-1 bg-[#0866ff]"
            />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${text} ${window.location.href}`}
            target="_blank"
          >
            <img
              src="https://static.addtoany.com/buttons/whatsapp.svg"
              width="32"
              height="32"
              className="rounded-full p-1 bg-[#25d366]"
            />
          </a>
          <a
            href={`https://x.com/intent/post?text=${text} ${window.location.href}`}
            target="_blank"
          >
            <img
              src="https://static.addtoany.com/buttons/x.svg"
              width="32"
              height="32"
              className="rounded-full p-1 bg-black"
            />
          </a>
          <a
            href={`mailto:?subject=${subject}&body=${text} ${window.location.href}`}
            target="_blank"
          >
            <img
              src="https://static.addtoany.com/buttons/email.svg"
              width="32"
              height="32"
              className="rounded-full p-1 bg-secondary"
            />
          </a>
          <a
            href="#"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            <img
              src="https://static.addtoany.com/buttons/link.svg"
              width="32"
              height="32"
              className="rounded-full p-1 bg-neutral-500"
            />
          </a>
        </div>
      </div>
    </>
  );
}
