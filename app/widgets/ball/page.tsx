'use client'

import RBall from '@/components/Ball';
import { useURLSearchParams, useWindowSize } from '@/customHooks';
import { ChangeEvent } from "react";

export default function Page() {
  const windowDims: { width: number, height: number } | undefined = useWindowSize(100);
  const [SP, setSP] = useURLSearchParams();
  const num = SP.get('num');
  
  const arr: number[] = [];
  for (let i = 0; i < Number(num); i++) arr.push(i * Number(num));

  let timeout: NodeJS.Timeout;
  function handleNumChange(quantity: number): void {
    clearTimeout(timeout); // clear timeout in thing variable, if there was one
    timeout = setTimeout(() => { setSP('num', `${quantity}`) }, 10); // make a new timout (callback only runs when window wasn't resized for 1sec)
  }

  return (
    <div className="flex self-stretch flex-auto items-start justify-center">
      <input 
        className="m-5"
        type="range"
        min={1} 
        max={100} 
        defaultValue={Number(num)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { handleNumChange(Number(e.target.value)) }}
      />
      <p className="m-5 bg-slate-300 text-black py-2 px-3 rounded-md">Number of ball: <b>{Number(num)}</b></p>
      {windowDims && arr.map(key => 
        <RBall key={key} windowDims={windowDims} />
      )}
    </div>
  );
}