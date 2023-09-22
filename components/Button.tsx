import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
function Button({
  content,
  Icon,
  href,
  bg = "bg-cool_gradient",
  target,
  fn,
  disabled,
  download,
}: {
  content: string;
  href?: string;
  Icon: IconType;
  bg?: string;
  target?: string;
  fn?: () => void;
  disabled?: boolean;
  download?: string;
}) {
  return (
    <>
      {href ? (
        <Link
          className={`p-3 font-bold transition relative z-10 delay-75 w-full duration-300 flex items-center rounded-lg justify-center gap-3  uppercase text-xs md:text-sm tracking-wide text-white dark:text-dark hover:-translate-y-1 ${bg}`}
          href={href}
          target={target}
          download={download}
        >
          <span>{content}</span>
          <div className="h-full w-[1px] dark:bg-dark bg-white transition duration-300 delay-70">
            <span className="opacity-0">a</span>
          </div>
          <span className={`flex`}>
            <Icon />
          </span>
        </Link>
      ) : (
        <button
          className={`p-3 w-full font-bold transition-all relative z-10 delay-75 duration-300 flex items-center rounded-lg justify-center gap-3  uppercase text-xs md:text-sm tracking-wide text-white dark:text-dark hover:-translate-y-1 ${bg}`}
          onClick={fn}
          disabled={disabled}
        >
          <span>{content}</span>
          <div className="h-full w-[1px] dark:bg-dark bg-white transition duration-300 delay-70">
            <span className="opacity-0">a</span>
          </div>
          <span className={`flex`}>
            <Icon />
          </span>
        </button>
      )}
    </>
  );
}

export default Button;
