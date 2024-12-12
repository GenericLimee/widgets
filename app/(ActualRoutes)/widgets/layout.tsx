import { ReactNode, Suspense } from 'react';
import Nav from '@/components/Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav
        buttonCN="
          pointer-events-auto 
          transition-[transform, shadow] duration-200 
          p-2 mx-5 mb-3 text-2xl w-full
          bg-zinc-200 text-black
          hover:-translate-y-1.5 hover:shadow-md
          active:translate-x-0 active:translate-y-0 active:shadow-none
        "
        links={[
          {
            href: "/",
            label: "Back"
          },
          {
            href: "/widgets",
            label: "Home"
          },
          {
            href: "/widgets/desc",
            label: "Description"
          },
          {
            href: "/widgets/ball?num=10",
            label: "Ball"
          },
          {
            href: "/widgets/spin-thing",
            label: "Spin"
          },
          
        ]}
      />
      <Suspense>
        {children}
      </Suspense>
    </>
  );
}