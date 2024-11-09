'use client'
import RBall from '@/components/Ball';
import { ChangeEvent, useState } from "react";

const defalutBalls = 10;

export default function Page() {
  const [num, setNum] = useState<number>(defalutBalls);

  const arr = [];
  for (let i = 1; i < num; i++) arr.push(i * num);

  let timeout: NodeJS.Timeout;
  function handleChange(quantity: number): void {
    clearTimeout(timeout); // clear timeout in thing variable, if there was one
    timeout = setTimeout(() => { setNum(quantity) }, 10); // make a new timout (callback only runs when window wasn't resized for 1sec)
  }
  return (
    <>
      <div className="Ball-page flex self-stretch flex-auto items-start justify-center">
        <input 
          className="m-5"
          type="range"
          min={1} 
          max={100} 
          defaultValue={defalutBalls}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange(Number(e.target.value)) }}
        />
        <p className="m-5 bg-slate-300 text-black py-2 px-3 rounded-md">Number of ball: <b>{num}</b></p>
        {arr.map(key => 
          <RBall key={key} />
        )}
      </div>
    </>
  );
}