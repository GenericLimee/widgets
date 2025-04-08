import { useEffect, useState, useCallback, createContext, ReactNode } from 'react';
import { useRouter, usePathname, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';

export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type sizeClass = Record<size, string>;
export type PopupReq = {
  children: ReactNode, 
  cn: string,
}

export const PopupRequest = createContext<[(a: PopupReq) => void, () => void]>([() => {}, () => {}]);

export interface playerData {
  name: string,
  money: number,
  economy: number,
  pop: number,
  civ: { // civilians
    ppul: number, // popularity (how much they like you)
    edu: number, // education
    qol: number // quality of life
  },
  u: { // units
    name: string, // funnys
    str: number, // strength
    mor: number, // morale
    sup: number, // supplies
    type: 'Artillery' | 'Infantry' | 'Cavalry' | 'AMERICAAA'
  }[],
  ct: { // cities
    name: string, // funnys
    fc: number, // fortification class
    wc: number, // wall condition
    pop: number, // population
  }[]
}
export type unitCreation = {
  name: string,
  typ: 'Artillery' | 'Infantry' | 'Cavalry' | 'AMERICAAA'
}
export type cityCreation = {
  name: string,
  fc: 1,
  wc: 1000,
  pop: 1000,
}

export function useWindowSize(delay?: number) { // delay in ms
  const [windowSize, setWindowSize] = useState<{
    width: number,
    height: number
  }>({ width: 0, height: 0 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    function handleResize() {
      clearTimeout(timeout);
      timeout = setTimeout(() => { setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      }) }, delay); 
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => { window.removeEventListener("resize", handleResize); clearTimeout(timeout) };
  }, [delay]);
  return windowSize;
}

export function useURLSearchParams(): [ReadonlyURLSearchParams, (name: string, value: string) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }, [searchParams]);

  return [searchParams, (name: string, value: string) => router.push(pathname + '?' + createQueryString(name, value))];
}

const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))
  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  }
}
export const useMobileDetect = () => {
  useEffect(() => {}, [])
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  return getMobileDetect(userAgent)
}