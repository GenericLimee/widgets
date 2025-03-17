import { size, sizeClass } from '@/customStuff';
import { useState } from 'react';

export default function Checkbox({ 
  text, 
  size,
  onValueChange,
  defaultSet
}: {
  text: string,
  size?: size,
  onValueChange: (a: boolean) => void
  defaultSet?: boolean
}) {
  const [value, setValue] = useState<boolean>(defaultSet ?? false);
  const sizes: sizeClass = {
    xs: "p-1 text-md",
    sm: "p-2 text-xl",
    md: "p-4 text-2xl",
    lg: "p-6 text-3xl",
    xl: "p-8 text-5xl"
  }

  return (
    <div 
      className={`
        w-fit flex-center cursor-pointer \
        border-slate-950 border-4 rounded-xl
        ${sizes[size ?? "md"]} ${value ? "bg-bottom" : "-bg-y-300"} bg-size-y-300 bg-gradient-to-t from-emerald-600 to-rose-700 
        transition-[background] duration-300 `} 
      onClick={() => { onValueChange(!value); setValue(!value) }}
    >
      {text}
    </div>
  );
}