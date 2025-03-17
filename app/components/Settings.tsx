'use client'

import Checkbox from './Checkbox';
import { useState } from 'react';
import clsx from 'clsx';

export default function Settings() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div 
      className={clsx(
        "rounded-3xl p-10 absolute transition-all duration-500 ease-satis",
        open 
          ? "h-3/4 w-3/4 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-800" 
          : "h-20 w-20 bottom-4 right-4 bg-slate-500 cursor-pointer"
      )}
      onClick={() => { if (!open) setOpen(true) }}
    >
      <div className={clsx("transition-opacity duration-500 grid gap-5 items-start justify-start", open ? "opacity-100" : "opacity-0")}>
        <h1 className="self-start">Settings</h1>
        <Checkbox
          text="Animations"
          onValueChange={() => {}}
          cn="p-2 transition-colors duration-300"
          defaultSet={true}
        />
        <div 
          className="m-2 bg-lime-800 rounded-xl p-2 cursor-pointer self-end text-center"
          onClick={() => { if (open) setOpen(false) }}
        >Close</div>
      </div>
      <svg className={clsx("transition-all duration-500 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2", open ? "opacity-0" : "opacity-100")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 24 24">
        <path d="M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"></path>
      </svg>
    </div>
  );
}