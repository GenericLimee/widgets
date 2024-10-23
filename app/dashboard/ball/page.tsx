'use client'
import RBall from '@/components/RBall';
import { ChangeEvent, useState } from "react";

const defalutBalls = 100;

export default function Page() {
  const [num, setNum] = useState<number>(defalutBalls);

  const arr = [];
  for (let i = 0.1; i < num; i++) arr.push(i * num);

  return (
    <>
      <div className="Ball-page flex self-stretch flex-auto items-start justify-center">
        <input 
          className="m-20"
          type="range" 
          min={1} 
          max={500} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => { setNum(Number(e.target.value)) }}
        />
        {arr.map(key => 
          <RBall key={key} />
        )}
      </div>
    </>
  );
}