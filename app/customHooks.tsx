import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';

export function useWindowSize(delay?: number) { // delay in ms
  const [windowSize, setWindowSize] = useState<{
    width: number,
    height: number
  } | undefined>(undefined);

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