'use client'

import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface CardStuff {
  label: {
    text: string,
    cn?: string,
    img?: string
  },
  content: (a: () => void) => ReactNode
}

export default function CardBoard({ stuff, boardcn, labelcn }: { labelcn?: string, stuff: CardStuff[], boardcn?: string }) {

  // state
  const [nextPage, setNextPage] = useState<number>(-2); 
  const [page, setPage] = useState<number>(-2);

  // pages so they dont crowd up return
  const contentPage = () => stuff[page].content(() => setNextPage(-1));
  const homePage = () => stuff.map((thing: CardStuff, i: number) => (
    <div
      key={thing.label.text + i}
      className={thing.label.cn + " " + labelcn} 
      style={{ backgroundImage: thing.label.img }} 
      onClick={() => { setNextPage(i) }}
    >
      {thing.label.text}
    </div>
  ));

  return (
    <div 
      onAnimationEnd={() => { if (page !== nextPage) setPage(nextPage) }}
      className={clsx(
        page < 0 && boardcn ? boardcn : "",
        page !== nextPage ? "animate-spin-out" : 
        page === -2       ? "animate-none" : 
                            "animate-spin-in"
      )}
    >
      {page < 0 ? homePage() : contentPage()}
    </div>
  );
}