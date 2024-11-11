import { useEffect, useState } from 'react';

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

