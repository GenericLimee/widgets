'use client'

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type clickState = "none" | "hover" | "down";
interface clickStatePlus { pending: clickState | "existing" | null, current: clickState }
export default function Button( props: {
  className?: string,
  children?: ReactNode,
  href: string
}) {
  const { // very convienent
    className = undefined, 
    children = undefined, 
    href, // other stuff that is edited (we dont want duplicates)
    ...other // other stuff (without stuff above)
  } = props;
  const [clickState, setClickState] = useState<clickStatePlus>({ pending: null, current: "none" });
  const setClickStatePlus = (thing: clickState) => {
    // setTimeout(() => { setClickState(cs => ({ pending: null, current: cs.current })) }, 200);
    setClickState(cs => cs.pending 
      ? { pending: thing, current: cs.current }
      : { pending: "existing", current: thing }
    );
  }
  console.log(clickState);

  return (
    <Link className={clsx( className + " \
      transition-all duration-200 w-5/6 text-2xl text-black bg-[#ddd] pointer-events-auto font-default p-2.5 z-10 disabled:shadow-none disabled:bg-gray-500 disabled:text-gray-700",
      clickState.current === "none" || clickState.current === "down" 
        ? "shadow-none translate-x-0 translate-y-0" 
        : clickState.current === "hover" && "-translate-y-1.5 shadow-lg"
    )} 
      href={href}
      onMouseLeave={() => { setClickState(cs => ({ pending: cs.pending, current: "none" })) }}
      onMouseEnter={() => { setClickStatePlus("hover") }}
      onMouseUp={() => { setClickStatePlus("hover") }}
      onMouseDown={() => { setClickStatePlus("down") }}
      onTransitionEnd={() => { setClickState({ 
        pending: null,  
        current: clickState.pending && clickState.pending !== "existing" ? clickState.pending : clickState.current
      })}}
      {...other}
    >
      {children}
    </Link>
  );
}