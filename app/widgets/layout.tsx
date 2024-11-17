import { ReactNode, Suspense } from 'react';
import Nav from '@/components/Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav
        buttonCN="self-stretch m-2"
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