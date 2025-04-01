import Nav from "@/components/Nav";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  
  return (
    <div className="p-10 absolute top-0 flex flex-col items-center justify-start min-h-screen h-fit w-screen overflow-scroll bg-gradient-to-tr from-amber-900 to-rose-900 bg-auto">
      <Nav
        className="p-5 bg-slate-700 w-screen place-self-start -mx-10 -mt-10 mb-10"
        linkClassName="p-3 m-2 bg-slate-800 rounded-full"
        links={[
          {
            href: "/",
            label: "Back"
          },
          {
            href: "/war",
            label: "Home"
          },
          {
            href: "/war/about",
            label: "About"
          },
          {
            href: "/war/rules",
            label: "Rules",
            className: "p-3 ml-6 m-2 bg-sky-950 rounded-2xl"
          },
          {
            href: "/war/game",
            label: "Game",
            className: "p-3 m-2 bg-sky-950 rounded-2xl"
          },
          
        ]}
      />
      {children}
    </div>
  );
}