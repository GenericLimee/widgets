'use client'

import { ReactNode, useState, useEffect } from 'react';
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
  const [erm, setErm] = useState<ReactNode>(children);
  const [num, setNum] = useState<number>(0);
  const setClickStatePlus = (thing: clickState) => {
    if (num > 15) setErm(<>chill</>);
    setNum(num + 1);
    setClickState(clickState.pending 
      ? { pending: thing, current: clickState.current }
      : { pending: "existing", current: thing }
    );
    setTimeout(() => {setClickState(thing => ({ pending: null, current: thing.current }))}, 201);
  }

  useEffect(() => {
    const interval = setInterval(() => { 
      setNum(num > 0 ? num - 1 : num);
      if (erm !== children && num === 0) setErm(children);
    }, 250);
    return () => {clearInterval(interval)}
  })

  return (
    <Link className={clsx( className + " \
      transition-all w-5/6 text-2xl text-black bg-[#ddd] pointer-events-auto font-default p-2.5 z-10 disabled:shadow-none disabled:bg-gray-500 disabled:text-gray-700",
      clickState.current === "none" || clickState.current === "down" 
        ? "shadow-none translate-x-0 translate-y-0" 
        : clickState.current === "hover" && "-translate-y-1.5 shadow-lg"
    )} 
      href={href}
      onMouseLeave={() => { setClickStatePlus("none") }}
      onMouseEnter={() => { setClickStatePlus("hover") }}
      onMouseUp={() => { setClickStatePlus("hover") }}
      onMouseDown={() => { setClickStatePlus("down") }}
      onTransitionEnd={() => { setClickState(() => ({ 
          pending: null,  
          current: clickState.pending && clickState.pending !== "existing" ? clickState.pending : clickState.current
        })
      )}}
      {...other}
    >
      {erm}
    </Link>
  );
}