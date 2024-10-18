'use client'

import NoSSR from "./NoSSR";

export default function Hello({ width, height }: { width: number, height: number }) {
  const arr: never[] = [];
  const arr2: never[] = [];
  for (let i = 0; i < (width / 128); i++) arr.push(i as never);
  for (let i = 0; i < (height / 17); i++) arr2.push(i as never);

  return (
    <NoSSR>
      <div className="flex flex-row">
        {arr.map(i => 
          <div className="flex flex-col mt-16" key={i}>
            {arr2.map(j => 
              <hr
                key={j}
                className="animate-spinny odd:animate-spinny-reverse w-16 m-1.5"
              />
            )}
          </div>
        )}
      </div>
    </NoSSR>
  );
}
