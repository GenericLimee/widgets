'use client'

import Checkbox from './Checkbox';
import { useState } from 'react';

export default function Settings() {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [iHonestlyDontKnow, setIHonestlyDontKnow] = useState<boolean>(false)

  // tbh i probably overthought about the order of transitions

  return (
    <div 
      className={
        "fixed transition-all duration-500 ease-satis select-none border-stone-950 " + 
        ( open 
          ? "rounded-3xl h-3/4 w-3/4 p-10 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-800 border-4" 
          : "rounded-full h-12 w-12 bottom-4 right-4 cursor-pointer bg-slate-700 p-10"
        )
      }
      onClick={() => { 
        if (!open) setOpen(true)
      }}
      onTransitionEnd={() => { 
        if (open && !show ) {
          if (iHonestlyDontKnow) {
            setIHonestlyDontKnow(false)
          } else {
            setShow(true);
            setIHonestlyDontKnow(true);
          }
        }
      }}
    >
      <div 
        className={"transition-opacity duration-500 grid gap-7 items-start justify-start " + (show ? "opacity-100" : "opacity-0")}
        onTransitionEnd={() => {
          if (!show) setOpen(false)
        }}
      >
        <h1 className="self-start">Settings that are Nonfunctional</h1>
        <Checkbox
          text="Animations"
          onValueChange={() => {}}
          defaultTrue
        />
        <Checkbox
          text="Gradients"
          onValueChange={() => {}}
          defaultTrue
        />
        <div 
          className="border-slate-950 border-4 p-3 w-fit bg-gradient-to-bl from-slate-800 to-emerald-800 rounded-xl cursor-pointer self-end text-center"
          onClick={() => { if (show) setShow(false) }}
        >Close</div>
      </div>
      <svg className={"transition-all duration-500 absolute abs-center h-16 w-16 pointer-events-none " + (open ? "opacity-0" : "opacity-100")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
        <g style={{mixBlendMode: 'normal',fill: "#ccc" ,fillRule: "nonzero",stroke: "none",strokeWidth: 1,strokeLinecap: "butt",strokeLinejoin: "miter",strokeMiterlimit: "10",strokeDasharray: "",strokeDashoffset: "0",fontFamily: "none",fontWeight: "none",fontSize: "none"}}><g transform="scale(5.33333,5.33333)"><path d="M39.139,26.282c-0.713,-0.523 -1.139,-1.363 -1.139,-2.248c0,-0.885 0.426,-1.725 1.138,-2.247l3.294,-2.415c0.525,-0.386 0.742,-1.065 0.537,-1.684c-0.848,-2.548 -2.189,-4.872 -3.987,-6.909c-0.433,-0.488 -1.131,-0.642 -1.728,-0.38l-3.709,1.631c-0.808,0.356 -1.749,0.305 -2.516,-0.138c-0.766,-0.442 -1.28,-1.23 -1.377,-2.109l-0.446,-4.072c-0.071,-0.648 -0.553,-1.176 -1.191,-1.307c-2.597,-0.531 -5.326,-0.54 -7.969,-0.01c-0.642,0.129 -1.125,0.657 -1.196,1.308l-0.442,4.046c-0.097,0.88 -0.611,1.668 -1.379,2.11c-0.766,0.442 -1.704,0.495 -2.515,0.138l-3.729,-1.64c-0.592,-0.262 -1.292,-0.11 -1.725,0.377c-1.804,2.029 -3.151,4.35 -4.008,6.896c-0.208,0.618 0.008,1.301 0.535,1.688l3.273,2.4c0.714,0.524 1.14,1.364 1.14,2.249c0,0.885 -0.426,1.725 -1.138,2.247l-3.294,2.415c-0.525,0.386 -0.742,1.065 -0.537,1.684c0.848,2.548 2.189,4.872 3.987,6.909c0.433,0.489 1.133,0.644 1.728,0.38l3.709,-1.631c0.808,-0.356 1.748,-0.305 2.516,0.138c0.766,0.442 1.28,1.23 1.377,2.109l0.446,4.072c0.071,0.648 0.553,1.176 1.191,1.307c1.314,0.268 2.664,0.404 4.015,0.404c1.318,0 2.648,-0.133 3.953,-0.395c0.642,-0.129 1.125,-0.657 1.196,-1.308l0.443,-4.046c0.097,-0.88 0.611,-1.668 1.379,-2.11c0.766,-0.441 1.705,-0.493 2.515,-0.138l3.729,1.64c0.594,0.263 1.292,0.111 1.725,-0.377c1.804,-2.029 3.151,-4.35 4.008,-6.896c0.208,-0.618 -0.008,-1.301 -0.535,-1.688zM24,31c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"></path></g></g>
      </svg>
    </div>
  );
}