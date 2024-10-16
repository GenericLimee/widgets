'use client'
import RBall from '@/components/RBall';
// import { useState } from "react";

// const defalutBalls = 100;
const num = 100;

export default function Page() {
  // const [num, setNum] = useState<number>(defalutBalls);

  const arr = [];
  for (let i = 0; i < num; i++) arr.push(i * num);

  return (
    <>
      <div className="Ball-page">
        
        {arr.map(key => 
          <RBall key={key} />
        )}
      </div>
    </>
  );
}