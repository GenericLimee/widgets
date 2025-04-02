'use client'

import clsx from 'clsx';
import { ReactNode, useState, createContext } from 'react';
import { useMobileDetect } from '@/customStuff';
import Settings from '@/components/Settings';

type PopupReq = {
  children: (a: () => void) => ReactNode, 
  cn: string,
} | undefined
export const PopupRequest = createContext<(a: PopupReq) => void>(() => {});

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMobileDetect().isMobile();

  const [currentPopup, setCurrent] = useState<PopupReq>();
  const [show, setShow] = useState<boolean>(false);
  const handlePopupReq = (req: PopupReq) => {
    if (currentPopup) return undefined;
    else {
      setCurrent(req);
      setShow(true);
      return req;
    }
  }

  return isMobile ? (
    <div className="flex items-center justify-center w-full h-full">
      <div>
        <div className="text-3xl">Sorry but this app does not work with mobile devices.</div> <br/> (Well technichally it does, but it looks horrible.)
      </div>
    </div>
  ) : (
    <PopupRequest.Provider value={handlePopupReq}>
        {children}
        <Settings />
        <div className={clsx( // popup blur thing
          "absolute w-screen h-screen top-0 left-0 z-10 \
          bg-[url(../images/america.png)] blur-xl contrast-[0.08] bg-no-repeat bg-cover \
          transition-opacity duration-500", 
          show ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}/>
        <div 
          className={clsx(
            "absolute z-20 shadow-2xl top-1/2 left-1/2 max-w-[calc(100vw-10rem)] max-h-[calc(100vh-10rem)] \
            transition-[opacity,_transform] duration-300 ease-satis -translate-x-1/2", 
            currentPopup?.cn, 
            show 
              ? "opacity-100 -translate-y-1/2 scale-x-100 pointer-events-auto" 
              : "opacity-0 -translate-y-1/3 scale-x-50 pointer-events-none"
          )}
          onTransitionEnd={() => { if (!show) setCurrent(undefined) }}
        >
          {currentPopup?.children(() => { setShow(false) })}
        </div>
    </PopupRequest.Provider>
  );
}
