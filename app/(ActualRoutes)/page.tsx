'use client'

import CardBoard from "@/components/CardBoard";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <CardBoard
        boardcn="
          p-2 rounded-3xl flex flex-wrap flex-row justify-center border-2 border-slate-500 will-change-transform
          hover:p-5
          transition-[padding]
          ease-satis
          duration-500
        "
        labelcn="m-5 p-16 rounded-3xl cursor-pointer select-none text-xl font-semibold"
        stuff={[
          {
            label: {
              text: "Overview",
              cn: "bg-gradient-to-tr from-[#1c2846] to-orange-800 "
            },
            content: home => (
              <>
                <h1 className="m-10">Overview</h1>
                <div className="m-5 rounded-xl p-3 bg-gradient-to-tr from-[#1c2846] to-orange-700">
                  Widgets - Things you can play with.<br/>
                </div>
                <div className="m-5 rounded-xl p-3 bg-gradient-to-tr from-[#1c4846] to-emerald-600">
                  MFC - Startup thing.
                </div>
                <div className="m-5 bg-gradient-to-bl from-slate-800 to-emerald-800 p-3 rounded-2xl cursor-pointer w-fit" onClick={home}>Back</div>
              </>
            )
          },
          {
            label: {
              text: "Widgets",
              cn: "bg-gradient-to-tr from-[#1c2846] to-zinc-600",
            },
            content: home => (
              <div className="p-7 border-slate-600 border-2 flex justify-start items-center rounded-3xl">
                <h1>Widgets.</h1>
                <Link href="/widgets" className="p-3 font-semibold bg-gradient-to-tr from-slate-400 to-orange-400 ml-5 rounded-full">Launch</Link>
                <button onClick={home} className="p-3 font-semibold bg-gradient-to-bl from-slate-800 to-emerald-800 ml-5 rounded-full">Back</button>
              </div>
            )
          },
          {
            label: {
              text: "Man Face Co",
              cn: "bg-gradient-to-tr from-[#1c4846] to-emerald-600",
            },
            content: home => (
              <div className="p-7 border-slate-600 border-2 flex justify-start items-center rounded-3xl">
                <h1>Man Face Co (random meme startup thats failing lmao)</h1>
                <Link href="/mfc" className="p-3 font-semibold bg-orange-400 ml-5 rounded-full">Launch</Link>
                <button onClick={home} className="p-3 font-semibold bg-gradient-to-bl from-slate-800 to-emerald-800 ml-5 rounded-full">Back</button>
              </div>
            )
          },
          {
            label: {
              text: "Credits",
              cn: "bg-gradient-to-tr from-[#1c2846] to-indigo-800",
            },
            content: home => (
              <div className="">
                <p className="m-5 p-5 bg-slate-800 rounded-3xl">
                  <b>Main Programmer:</b> Ethan Lin<br/>
                  <b>Advice:</b> StackOverflow, GeeksForGeeks, MDN Web Docs, and W3 Schools
                </p>
                <button onClick={home} className="p-3 font-semibold bg-gradient-to-bl from-slate-800 to-emerald-800 ml-5 rounded-3xl">Back</button>
              </div>
            )
          }
        ]}
      />
    </div>
  );
}