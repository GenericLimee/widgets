import { ReactNode, Suspense } from 'react';
import Nav from '@/components/Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen">
      <Nav
        className="p-5 bg-slate-700 w-full place-self-start"
        linkClassName="p-3 m-2 bg-slate-800 rounded-full"
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
            href: "/widgets/about",
            label: "About"
          },
          {
            href: "/widgets/ball?num=10",
            label: "Ball",
            className: "p-3 ml-6 m-2 bg-sky-950 rounded-2xl"
          },
          {
            href: "/widgets/spin-thing",
            label: "Spin",
            className: "p-3 m-2 bg-sky-950 rounded-2xl"
          },
          
        ]}
      />
      <Suspense>
        {children}
      </Suspense>
    </div>
  );
}