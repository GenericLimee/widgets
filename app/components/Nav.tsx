'use client'

import { useState } from 'react';
import Button from './Button';

import clsx from 'clsx';

export default function Nav({ links }: { links: {href: string, label: string}[] }) {
  const [clicked, setClicked] = useState(false); // button cover clicked or not

  return (
    <>
      <div 
        className="relative left-0 top-0 flex flex-col items-end justify-center text-center text-wrap bg-transparent text-white h-screen w-[300px] z-0" 
        onMouseLeave={() => { setClicked(false) }} 
        onMouseEnter={() => { setClicked(true) }}
      >
        <div 
          className={clsx(
            "pointer-events-auto absolute z-20 left-0 h-screen w-[300px] transition-all ease-satis duration-500",
            clicked ? "left-[-135px] bg-[#ddd] scale-x-[0.1] scale-y-[1]" : "bg-[#0a0a0a] scale-100"
          )}
          onClick={() => { setClicked(thing => !thing) }}
        />
        <div className="flex justify-start items-center flex-col h-screen w-[90%] p-4 absolute left-[30px] pointer-events-none bg-white">
          {links.map((link, i) => { // maps the pages' respective buttons (except the boom and error pages of course)
            return (
              <Button 
                className="m-2.5"
                href={link.href}
                key={link.label + i}
              >
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
