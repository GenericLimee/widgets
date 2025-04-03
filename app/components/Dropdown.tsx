import clsx from 'clsx';
import { useState, type ReactNode } from 'react';

export default function Dropdown({
  label,
  cn,
  outercn,
  children
}: {
  label: string,
  cn?: string,
  outercn?: string,
  children: ReactNode
}) {
  const [open, setOpen] = useState<boolean>(false);
  return ( // MAKE PARENT RELATIVE AND CHILD ABSOLUTE FOR DROPDONW :DDDDD
    <div className={clsx("relative", outercn)} onMouseLeave={() => { setOpen(false) }}>
      <div className={clsx(cn ?? "")}>
        <div className="flex items-center justify-between w-full">
          <svg 
            className={clsx("h-7 mx-5 cursor-pointer transition-transform duration-300 ease-satis ", open ? "-rotate-180" : "-rotate-90")}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/*Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
          </svg>
          <p className="font-semibold text-xl mx-5 select-none">{label}</p>
        </div>
      </div>
      <div className={clsx("z-30 absolute w-full max-h-80 top-full transition-[opacity,_transform] duration-300 ease-satis", cn, open ? "opacity-100 -translate-y-6" : "opacity-0 -translate-y-12 pointer-events-none")}>
        <div className="overflow-scroll">{children}</div>
      </div>
    </div>
  );
}