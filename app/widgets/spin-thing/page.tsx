'use client'

import SpinThing from "@/components/SpinThing";
import { useWindowSize } from "@/customHooks";

export default function HelloPage() {
  const dims: { width: number, height: number } | undefined = useWindowSize();

  return (
    <div className="flex flex-col justify-center items-center w-5/6 h-full" key={(dims ? dims.width : 0) + (dims ? dims.height : 0)}>
      <p className="text-4xl">Thing that spins.</p>
      <SpinThing width={dims ? dims.width : 0} height={dims ? dims.height : 0} />
    </div>
  );
}