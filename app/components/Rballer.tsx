'use client'

/*
  Curretnly working on:
   - NA
*/


import { CSSProperties, useReducer, useEffect } from 'react';
import { keyframes } from "glamor";
import NoSSR from './NoSSR';

// values
const initialPos: Position = [500, 500];
const colorRange: { range: Range } = { range: [50, 150] };
const distance: number = 500;

// types
type Range = [number, number]; // these aliases are just here for clarity
type Position = [number, number];
type Size = { width: number  | undefined, height: number | undefined };
type PositionTime = [Position, Position]; // [prevPosition, currentPosition]
type Action = 
| { type: "mouseOver", windowSize: Size }
| { type: "animationEnded" }
| { type: "windowLoaded", windowDims: Size };
type State = {
  poss: PositionTime, // [current pos, upcoming pos] (positions)
  style: CSSProperties,
  ae: boolean, // animation ended?
  windowDims: Size
};


// utilities
const posToStyle = (pos: Position) => ({ left: pos[0] + 'px', bottom: pos[1] + 'px' });
const getRandom = (range?: Range): number => { while (true) { if (Math.random() > .5) { return range ? (range[1] - range[0]) * Math.random() + range[0] : Math.random() } } }
const getRandomPos = (currentPos: Position, windowSize: Size): Position => {
  while (true) {
    console.log(windowSize, currentPos);
    const randPos: Position = windowSize ? [ 
      Math.floor(getRandom(windowSize.width ? [windowSize.width * 0.1, windowSize.width * 0.1 - 512] : undefined)), // width
      Math.floor(getRandom(windowSize.height ? [windowSize.height * 0.1 + 512, windowSize.height * 0.1 ] : undefined)) // height
    ] : initialPos;
    if (Math.sqrt(Math.pow(randPos[0] - currentPos[0], 2) + Math.pow(randPos[1] - currentPos[1], 2)) > distance) { return randPos }
  }
};


// reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "mouseOver": 
      console.log(state.poss[1]);
      return {
        ...state,
        ae: false, // lets component know if animation in progress
        poss: [ state.poss[1], getRandomPos(state.poss[1], action.windowSize) ], // new becomes now and very new becomes new (random) // if user let ball finish animation before then do regular anim
        style: { 
          ...state.style,
          pointerEvents: "none",
          animation: keyframes('move', { 
            "0%": posToStyle(state.poss[0]), 
            "100%": posToStyle(state.poss[1])
          }) + " 0.5s cubic-bezier(0.55, 0.055, 0.675, 1) 1 forwards"
        }
      }
    case "animationEnded":
      return { 
        ...state, 
        ae: true,
        style: {
          ...state.style,
          pointerEvents: "all",
          left: state.poss[1][0] + 'px',
          bottom: state.poss[1][1] + 'px'
        }
      };
    case "windowLoaded": // if window loaded, update the states so they can be random
      return {
        ...state,
        windowDims: action.windowDims,
        poss: [ state.poss[0], getRandomPos(state.poss[0], state.windowDims) ],
        style: {
          ...state.style,
          display: "flex",
          pointerEvents: "all"
        }
      }
    default: return { // fallback
      ...state, 
      style: { 
        ...state.style, 
        color: "black" 
      } 
    };
  }
}


// component
export default function RBall() {
  const [state, dispatch] = useReducer(reducer, {
    ae: true,
    poss: [initialPos, initialPos],
    windowDims: { width: undefined, height: undefined },
    style: { 
      display: "none",
      pointerEvents: "none",
      background: `radial-gradient(rgb(${getRandom(colorRange.range)}, ${getRandom(colorRange.range)}, ${getRandom(colorRange.range)}) 10%, transparent 10%)`,
      ...posToStyle(initialPos)
    }
  });

  useEffect(() => {
    function handleResize(): void { dispatch({ type: 'windowLoaded', windowDims: { width: window.innerWidth, height: window.innerHeight } }) }
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", () => {})
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <NoSSR>
      { state.windowDims ? (
          <div
            className="h-[32rem] w-[32rem] flex justify-center items-center text-3xl absolute br-full" 
            onMouseOver={() => { if (state.ae) dispatch({ type: "mouseOver", windowSize: state.windowDims }) }}
            onAnimationEnd={() => dispatch({ type: "animationEnded" })}
            style={state.style}
          >
            ball
          </div>
       ) : null
      }
    </NoSSR>
  );
}





// USE LATER

// const getAnim = (pos: PositionTime): Object => { // gets a big animation obj that would be way too hard to write manually
//   let obj: any = {"0%": pos[0]}; // delare
//   for (let i = 2; i < 99; i += 2) { obj = { ...obj, [i +'px']: posToStyle(getRandomPos(pos[0])) } } // obj will now be obj but with (index)percent: random position
//   obj["100%"] = posToStyle(pos[1]); // makes sure that on last tp it tps/moves to current position (known by react, not just the animation)
//   return obj;
// }