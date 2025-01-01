'use client'

import SpinThing from "@/components/SpinThing";
import { useWindowSize } from "@/customHooks";

export default function HelloPage() {
  const dims: { width: number, height: number } | undefined = useWindowSize();

  return (
    <div className="flex flex-col justify-start items-center w-5/6 h-full" key={(dims.width) + (dims.height)}>
      <p className="text-4xl m-5 mb-10">Thing that spins.</p>
      <SpinThing width={dims.width} height={dims.height} />
    </div>
  );
}