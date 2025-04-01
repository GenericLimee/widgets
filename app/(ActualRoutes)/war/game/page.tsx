"use client"

import { Fragment, useState } from 'react';
import { type playerData } from '@/customStuff';
import Dropdown from '@/components/Dropdown';

export default function Page() {
  // eslint-disable-next-line
  const [players, setPlayers] = useState<playerData[]>([
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      civ: {
        ppul: 500,
        edu: 300,
        qol: 500
      },
      u: [
        {
          name: "Unit of greatness I",
          str: 20,
          mor: 600,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 700,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        }
      ],
      ct: [
        {
          name: "City of greatness I",
          fc: 1,
          wc: 1000,
          p: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          p: 69696699
        }
      ]
    },
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      civ: {
        ppul: 500,
        edu: 300,
        qol: 500
      },
      u: [
        {
          name: "Unit of greatness I",
          str: 20,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        }
      ],
      ct: [
        {
          name: "City of greatness I",
          fc: 1,
          wc: 1000,
          p: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          p: 69696699
        }
      ]
    },
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      civ: {
        ppul: 500,
        edu: 300,
        qol: 500
      },
      u: [
        {
          name: "Unit of greatness I",
          str: 20,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        }
      ],
      ct: [
        {
          name: "City of greatness I",
          fc: 1,
          wc: 1000,
          p: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          p: 69696699
        }
      ]
    },
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      civ: {
        ppul: 500,
        edu: 300,
        qol: 500
      },
      u: [
        {
          name: "Unit of greatness I",
          str: 20,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        }
      ],
      ct: [
        {
          name: "City of greatness I",
          fc: 1,
          wc: 1000,
          p: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          p: 69696699
        }
      ]
    },
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      civ: {
        ppul: 500,
        edu: 300,
        qol: 500
      },
      u: [
        {
          name: "Unit of greatness I",
          str: 20,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        },
        {
          name: "Unit of greatness II",
          str: 200,
          mor: 500,
          sup: 100,
          typ: 'Infantry'
        }
      ],
      ct: [
        {
          name: "City of greatness I",
          fc: 1,
          wc: 1000,
          p: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          p: 69696699
        }
      ]
    },
  ]);
  return (
    <div className="w-full grid grid-cols-3 gap-10">
      {players.map((data, num) => {
        return (
          <div className="p-8 bg-slate-950 rounded-xl grid grid-cols-2 gap-4" key={num + data.civ.ppul * 10}>
            <div className="col-span-2"><h1 className="font-medium">{data.name}</h1></div>
            <hr className="w-full h-1 col-span-2 justify-self-center m-0" />
            <div>
              <h2 className="font-medium">Marks - {data.money}</h2>
              <h2 className="font-medium">Economy - {data.economy}</h2>
            </div>
            <div>
              <h2 className="font-medium">QoL - {data.civ.qol}</h2>
              <h2 className="font-medium">Popularity - {data.civ.ppul}</h2>
              <h2 className="font-medium">Education - {data.civ.edu}</h2>
            </div>
            <hr className="w-full h-1 col-span-2 justify-self-center m-0" />
            <Dropdown cn="bg-emerald-900 w-full rounded-xl p-5 flex flex-col items-center justify-center text-center" label="Units">
              {data.u.map((unit, num) => {
                return (
                  <Fragment key={num + unit.mor * 10}>
                    <p><b>Name -</b> {unit.name}</p>
                    <p><b>Strength -</b> {unit.str}</p>
                    <p><b>Morale -</b> {unit.mor}</p>
                    <p><b>Supplies -</b> {unit.sup}</p>
                    <p><b>Type -</b> {unit.typ}</p>
                    {(num !== data.u.length - 1) && <hr className="h-[3px] my-3 w-3/4 self-center"/>}
                  </Fragment>
                );
              })}
            </Dropdown>
            <Dropdown cn="bg-slate-800 w-full rounded-xl p-5 flex flex-col items-center justify-center text-center" label="Cities">
              {data.ct.map((city, num) => {
                return (
                  <Fragment key={num + city.p * 10}>
                    <p><b>Name -</b> {city.name}</p>
                    <p><b>Population -</b> {city.p}</p>
                    <p><b>Wall Condition -</b> {city.wc}</p>
                    <p><b>Fortification Class -</b> {city.fc}</p>
                    {(num !== data.ct.length - 1) && <hr className="h-[3px] my-3 w-3/4 self-center"/>}
                  </Fragment>
                );
              })}
            </Dropdown>
          </div>
        );
      })}
      <div className="px-10 py-5 bg-slate-950 opacity-90 rounded-xl flex items-center justify-center">

      </div>
    </div>
  );
}