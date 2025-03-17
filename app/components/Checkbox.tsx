import { useState } from 'react';
import clsx from 'clsx';

export default function Checkbox({ 
  text, 
  cn,
  onValueChange,
  defaultSet
}: {
  text: string,
  cn?: string,
  onValueChange: (a: boolean) => void
  defaultSet?: boolean
}) {
  const [value, setValue] = useState<boolean>(defaultSet ?? false);

  return (
    <div 
      className={clsx(
        (cn ?? "") + " flex items-center justify-center rounded-xl cursor-pointer transition-colors duration-300",
        value ? "bg-lime-700" : "bg-red-700"
      )} 
      onClick={() => { onValueChange(!value); setValue(!value) }}
    >
      {text}
    </div>
  );
}