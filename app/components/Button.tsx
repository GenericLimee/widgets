/*
  props:
    clickDuration: length of click animation and register (default is 200ms)
    colorTransitionDuration: self explanatory (default is 200ms)
    onClick: behaves same as button onclick but is only invoked when user holds the button down for (clickDuration / 1.5) ms
    onSemiClick: onclick but no need to hold down (exactly the same as onClick)
    any other props can be added
*/

'use client'

import { ReactNode, CSSProperties } from 'react';
import Link from 'next/link';

export default function Button( props: {
  clickDuration?: number,
  colorTD?: number,
  className?: string,
  style?: CSSProperties,
  onSemiClick?: () => void,
  onClick?: () => void,
  children?: ReactNode,
  href: string
}) {
  let fullClickTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

  const { // very convienent
    clickDuration = 200, colorTD = 200, // default stuff
    className = undefined, 
    style = undefined, 
    onClick = undefined, 
    onSemiClick = undefined, 
    children = undefined, 
    href, // other stuff that is edited (we dont want duplicates)
    ...other // other stuff (without stuff above)
  } = props;

  return (
    <Link
      className={
        className + 
          " \
            w-5/6 text-2xl text-black bg-[#ddd] shadow-none pointer-events-auto font-default p-2.5 z-10 border-none \
            hover:-translate-y-1.5 hover:shadow-xl \
            active:shadow-none active:translate-x-0 active:translate-y-0 \
            disabled:shadow-none disabled:bg-gray-500 disabled:text-gray-700 \
          "
        } 
      style={{
        ...style, // stuff below are props being applied
        transition: (` 
          ${style?.transition}, 
          box-shadow ${clickDuration}ms ease-in-out, 
          transform ${clickDuration}ms ease-in-out, 
          background-color ${colorTD}ms linear, 
          color ${colorTD}ms linear
        `) // multi line strings look weird so i enclosed them with parenthesis to make em look better
      }} 
      href={href}
      onMouseDown={() => { // when mouse is down over button, in (n) seconds, run the onclick func
        fullClickTimeout = setTimeout(() => { if (onClick) onClick() }, clickDuration / 1.5);
        if (onSemiClick) onSemiClick();
      }} 
      onMouseUp={() => { clearTimeout(fullClickTimeout) }}
      {...other}
    >
      {children}
    </Link>
  );
}