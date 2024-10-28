'use client'

/*
  Curretnly working on:
   - NA
*/


//imports
import { CSSProperties, useLayoutEffect, useReducer } from 'react';
import clsx from 'clsx';
import { keyframes } from "glamor";
import NoSSR from './NoSSR';


// values
const initialPos: Position = [500, 500]; // starting position
const colorRange: { range: Range } = { range: [50, 150] }; // range of color, like rgb(a-b, a-b, a-b)
const distance: number = 40; // distance that the ball with travel away from mouse in average vw & vh


// types
type Range = [number, number]; // these aliases are just here for clarity
type Position = [number, number];
type Size = { width: number, height: number }
type PositionTime = [Position, Position]; // [prevPosition, currentPosition]
type Action =
  | { type: "move" } // window action dimensions (to avoid confusion)
  | { type: "animationEnded" }
  | { type: "windowLoaded", windowADims: Size };
type State = {
  poss: PositionTime, // [current pos, upcoming pos] (positions)
  style: CSSProperties,
  ae: boolean, // animation ended?
  windowDims: Size | undefined
};


// utilities
const posToStyle = (pos: Position) => ({ left: pos[0] + 'px', bottom: pos[1] + 'px' });
const getRandom = (range: Range): number => { while (true) { if (Math.random() > .5) { return (range[1] - range[0]) * Math.random() + range[0] } } }
const getRandomPos = (currentPos: Position, windowSize: Size): Position => {
  const pxDistance: number = distance * ((windowSize.width + windowSize.height) / 200);
  let thingThatPreventsInfiniteLoop: number = 0;

  while (true) {
    thingThatPreventsInfiniteLoop++; // crash/pcExplosion guard
    if (thingThatPreventsInfiniteLoop > 1000) {
      console.warn("While loop would've blew up");
      break;
    }

    const randPos: Position = windowSize ? [
      Math.floor(getRandom([windowSize.width * 0.15, windowSize.width * 0.7])), // random width
      Math.floor(getRandom([windowSize.height * -0.1, windowSize.height * 0.6])) // random height
    ] : [245243, 5324534];
    if (Math.sqrt(Math.pow(randPos[0] - currentPos[0], 2) + Math.pow(randPos[1] - currentPos[1], 2)) > pxDistance) { return randPos }
    // if √{   [  ( randPos[0] - currentPos[0] )^2 + ( randPos[1] - currentPos[1] )^2  ]  >  pxDistance   }      unreadable fr
  }
  return [0, 0]; // fallback
};

// reducer
const init = (): State => ({
  ae: true,
  poss: [initialPos, [26452654, 652264266]],
  windowDims: undefined,
  style: {
    background: `radial-gradient(rgb(${getRandom(colorRange.range)}, ${getRandom(colorRange.range)}, ${getRandom(colorRange.range)}) 10%, transparent 10%)`,
    ...posToStyle(initialPos)
  }
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "move":
      return {
        ...state,
        ae: false, // lets component know if animation in progress
        poss: state.windowDims ? [state.poss[1], getRandomPos(state.poss[1], state.windowDims)] : state.poss, // new becomes now and destiny becomes new
        style: {
          ...state.style,
          animation: keyframes('move', {
            "0%": posToStyle(state.poss[0]),
            "100%": posToStyle(state.poss[1])
          }) + " 0.5s cubic-bezier(0.55, 0.055, 0.675, 1) 1 forwards"
        }
      };
    case "animationEnded":
      return {
        ...state,
        ae: true,
      };
    case "windowLoaded": // if window loaded/reloaded, update the states so they can be random (cuz the random function needs the window dimensions)
      return {
        ...state,
        windowDims: action.windowADims,
        poss: [state.poss[0], getRandomPos(state.poss[0], action.windowADims)]
      };
    default:
      return { // fallback
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
  const [state, dispatch] = useReducer(reducer, {}, init);

  useLayoutEffect(() => {
    function handleResize(initThing?: boolean): void { 
      dispatch({ type: 'windowLoaded', windowADims: { width: window.innerWidth, height: window.innerHeight } });
      if (!initThing) dispatch({ type: "move" }); // if called by event listener, move automatically
    }

    let thing: NodeJS.Timeout; // stores timout
    function handleEvent() {
      clearTimeout(thing); // clear timeout in thing variable, if there was one
      thing = setTimeout(handleResize, 500); // make a new timout (callback only runs when window wasn't resized for 1sec)
    }

    handleResize(true); // self explanatory ig

    window.addEventListener("resize", handleEvent);

    return () => { window.removeEventListener("resize", handleEvent) }; // cleanup callback
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <NoSSR>
      <div
        className={clsx(
          "h-[32rem] w-[32rem] flex justify-center items-center text-3xl absolute br-full transform-gpu",
          state.windowDims ? (state.ae ? "flex pointer-events-auto" : "pointer-events-none") : "hidden pointer-events-none",
        )}
        onMouseOver={() => { if (state.ae) dispatch({ type: "move" }) }}
        onAnimationEnd={() => dispatch({ type: "animationEnded" })}
        style={state.style}
      >
        ball
      </div>
    </NoSSR>
  );
}

// go brr thing

// const getAnim = (pos: PositionTime): Object => { // gets a big animation obj that would be way too hard to write manually
//   let obj: any = {"0%": pos[0]}; // delare
//   for (let i = 2; i < 99; i += 2) { obj = { ...obj, [i +'px']: posToStyle(getRandomPos(pos[0])) } } // obj will now be obj but with (index)percent: random position
//   obj["100%"] = posToStyle(pos[1]); // makes sure that on last tp it tps/moves to current position (known by react, not just the animation)
//   return obj;
// }