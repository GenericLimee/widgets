'use client'

import { useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link'

export default function Nav({ links, buttonCN }: { links: {href: string, label: string}[], buttonCN: string }) {
  const [clicked, setClicked] = useState(false); // button cover clicked or not

  return (
    <>
      <div 
        className="relative left-0 top-0 flex flex-col items-end justify-center text-center text-wrap bg-transparent text-white h-screen w-[300px] z-0 flex-shrink-0" 
        onMouseLeave={() => { setClicked(false) }} 
        onMouseEnter={() => { setClicked(true) }}
      >
        <div 
          className={clsx( // button cover
            "pointer-events-auto absolute z-20 h-screen w-full transition-all ease-satis duration-500",
            clicked ? "left-[-130px] bg-[#ddd] scale-x-[0.115] scale-y-100" : "bg-[#0a0a0a] scale-100 left-0"
          )}
        />
        <div className="flex justify-start items-center flex-col h-screen w-[90%] p-5 absolute pointer-events-none bg-white">
          {links.map((link, i) => { // maps the pages' respective buttons (except the boom and error pages of course)
            return (
              <Link
                className={buttonCN}
                href={link.href}
                key={link.label + i}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
