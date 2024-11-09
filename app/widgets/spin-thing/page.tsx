'use client'

import SpinThing from "@/components/SpinThing";
import { useWindowSize } from "@/customHooks";

export default function HelloPage() {
  const dims: { width: number | undefined, height: number | undefined } = useWindowSize();

  return (
    <div className="flex flex-col justify-center items-center w-5/6 h-full" key={(dims.width ? dims.width : 0) + (dims.height ? dims.height : 0)}>
      <p className="text-4xl">Thing that spins.</p>
      <SpinThing width={dims.width ? dims.width : 0} height={dims.height ? dims.height : 0} />
    </div>
  );
}