'use client'

import CardBoard from "@/components/CardBoard";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <CardBoard
        boardcn="m-20 p-5 rounded-3xl flex flex-wrap flex-row justify-evenly border-2 border-slate-500"
        labelcn="m-5 p-16 rounded-3xl cursor-pointer"
        stuff={[
          {
            label: {
              text: "Overview",
              cn: "bg-slate-700"
            },
            content: home => (
              <>
                <h1 className="m-10">Dummy text.</h1>
                <p className="m-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec erat nec metus molestie laoreet. Sed aliquam varius justo sit amet venenatis. Curabitur neque libero, lobortis eu dolor ut, feugiat gravida eros. Vestibulum vel bibendum arcu. Suspendisse lobortis felis metus, in suscipit erat blandit vel. Nullam dapibus et arcu at tincidunt. Aenean vitae massa congue ante vehicula semper. Donec commodo ut mi non faucibus. Sed bibendum erat quis metus aliquet convallis. Suspendisse quis ligula nec sem luctus cursus. Vivamus sollicitudin dolor at convallis consectetur. Praesent nisi nibh, posuere eget nisi vitae, fermentum blandit tortor. Donec at ipsum at justo facilisis commodo ac eget mi.
                  Integer sit amet laoreet augue. Vestibulum a est faucibus, facilisis eros ut, pellentesque orci. Nullam quis semper nunc, ut sodales tellus. In laoreet ex ut tellus faucibus, in consequat ante elementum. Donec sagittis mattis sapien ut tincidunt. Aenean tellus magna, varius ac gravida varius, elementum eu dolor. Phasellus et dui lacus. Praesent a urna et lectus convallis luctus. Curabitur imperdiet odio odio, at blandit tellus blandit at.
                  Vivamus facilisis ultrices ante, sit amet condimentum lorem vestibulum dignissim. Nulla viverra ut lacus id imperdiet. Nullam hendrerit eleifend lacus ut sollicitudin. Nunc eget molestie dui, a feugiat ligula. Nunc ultrices augue at accumsan ornare. Integer bibendum urna et faucibus pretium. Fusce vel massa tempus, hendrerit nulla a, varius ante. Nullam finibus odio lorem, sed ullamcorper metus vehicula et.
                  Donec sagittis quis erat eget dignissim. Donec sollicitudin ac enim vitae efficitur. Phasellus ultrices vitae urna non porttitor. Sed erat enim, aliquam a urna eu, elementum ornare turpis. Vivamus nec nulla sem. Fusce at elit elit. Quisque lacinia enim id eros lobortis, in posuere mauris congue. Nam tristique leo ultrices lectus aliquam lacinia. Donec ut ipsum ipsum. Aliquam molestie leo at tellus commodo, quis laoreet nunc sollicitudin. Donec rhoncus condimentum malesuada. Aenean lacinia urna ac vehicula condimentum.
                  Aenean non tellus sit amet urna euismod hendrerit ac non nulla. Suspendisse efficitur nisi sit amet turpis scelerisque elementum. Vestibulum gravida, ipsum nec dapibus porttitor, nibh lacus elementum leo, at aliquet mauris elit eget nisi. Cras sit amet mauris eget urna dictum ornare. Cras tincidunt diam lacus, eu fringilla orci placerat a. Nullam id diam placerat, tincidunt justo a, mattis libero. Integer quis varius diam, non lacinia arcu.
                </p>
                <button className="m-10 bg-orange-800 p-5 rounded-3xl" onClick={home}>Back</button>
              </>
            )
          },
          {
            label: {
              text: "Widgets",
              cn: "bg-slate-800",
            },
            content: home => (
              <div className="p-7 border-slate-600 border-2 flex justify-start items-center rounded-3xl">
                <h1>Widgets.</h1>
                <Link href="/widgets" className="p-3 font-semibold bg-orange-400 ml-5 rounded-full">Launch</Link>
                <button onClick={home} className="p-3 font-semibold bg-orange-500 ml-5 rounded-full">Back</button>
              </div>
            )
          },
          {
            label: {
              text: "Credits",
              cn: "bg-slate-700",
            },
            content: home => (
              <div className="">
                <p className="m-5 p-5 bg-slate-800 rounded-3xl">
                  <b>Main Programmer:</b> Ethan Lin<br/>
                  <b>Advice:</b> StackOverflow, GeeksForGeeks, MDN Web Docs, and W3 Schools
                </p>
                <button onClick={home} className="p-3 font-semibold bg-orange-500 ml-5 rounded-3xl">Back</button>
              </div>
            )
          }
        ]}
      />
    </div>
  );
}