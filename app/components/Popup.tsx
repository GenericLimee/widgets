import clsx from 'clsx';
import { useState, useContext, type ReactNode, useEffect, useCallback } from 'react';
import { PopupRequest } from '@/(ActualRoutes)/layout';

export default function Popup({
  label,
  labelcn,
  popupcn,
  children
}: {
  label: string,
  labelcn?: string,
  popupcn?: string,
  children: ReactNode
}) {
  const [open, setOpen] = useState<boolean>(false);
  const requestPopup = useCallback(useContext(PopupRequest), [PopupRequest]);
  return ( // MAKE PARENT RELATIVE AND CHILD ABSOLUTE FOR DROPDONW :DDDDD
    <>
      <div className={clsx("w-full rounded-xl p-5 flex flex-col items-center justify-center text-center", labelcn)}> {/*clsx automatically deals with undefineds :DDDD*/}
        <div className="flex items-center justify-between w-full">
          <svg 
            className={clsx("h-7 mx-5 cursor-pointer transition-transform duration-300 ease-satis ", open ? "-rotate-180" : "-rotate-90")}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            onClick={() => {
              setOpen(true);
              requestPopup({
                cn: popupcn ?? "",
                children: close => (
                  <>
                    {children}
                    <div 
                      className="p-3 bg-zinc-900 rounded-xl cursor-pointer text-center self-stretch font-semibold"
                      onClick={() => { close(); setOpen(false) }}
                    >Close</div>
                  </>
                )
              });
            }}
          >
            {/*Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
            <path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
          </svg>
          <p className="font-semibold text-xl mx-5 select-none">{label}</p>
        </div>
      </div>
    </>
  );
}