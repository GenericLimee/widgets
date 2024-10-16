'use client'

import "@/css/Hello.css";
import NoSSR from "./NoSSR";

export default function Hello({ width, height }: { width: number, height: number }) {
  const arr: never[] = [];
  const arr2: never[] = [];
  for (let i = 0; i < (width / 128); i++) arr.push(i as never);
  for (let i = 0; i < (height / 17); i++) arr2.push(i as never);

  return (
    <NoSSR>
      <div className="flex-row">
        {arr.map(i => 
          <div className="flex-col" key={i}>
            {arr2.map(j => 
              <hr 
                key={j}
                className={(Math.floor(Math.random() * 2)) ? "spinny" : "spinny-reverse"}
                style={{
                  width: '70px',
                  margin: '5px'
                }}
              />
            )}
          </div>
        )}
      </div>
    </NoSSR>
  );
}
