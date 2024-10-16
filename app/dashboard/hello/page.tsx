'use client'

import Hello from "@/components/Hello";
import { useWindowSize } from "@/customHooks";

export default function HelloPage() {
  const dims: { width: number | undefined, height: number | undefined } = useWindowSize();

  return (
    <div className="Hello" style={{ height: "100%", width: "85%"}} key={(dims.width ? 0 : dims.width as number) + (dims.height ? 0 : dims.height as number)}>
      <p style={{ fontSize: "2rem" }}>Stare at this thing.</p>
      <Hello width={dims.width as number} height={dims.height as number} />
    </div>
  );
}