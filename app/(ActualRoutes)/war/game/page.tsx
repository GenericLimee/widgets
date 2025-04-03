"use client"

import { useState } from 'react';
import { type playerData } from '@/customStuff';
import PlayerCard from '@/components/PlayerCard';

export default function Page() {
  const [players, setPlayers] = useState<playerData[]>([
    {
      name: "Johnny",
      money: 10000,
      economy: 500,
      pop: 10000,
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
          pop: 1000
        },
        {
          name: "City of greatness II",
          fc: 3,
          wc: 696,
          pop: 69696699
        }
      ]
    }
  ]);

  return (
    <div className="PLAYERS_CTNR w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      {players.map((data, num) => <PlayerCard 
        data={data} 
        setData={data => { 
          const newState = [...players];
          newState[num] = data;
          setPlayers(newState);
          console.log(newState);
        }} 
        key={num + data.pop}
      />)}
      <div className="ADD_PLAYER px-10 py-5 bg-slate-950 opacity-90 rounded-xl flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512"
          className="border-white border-4 h-12 w-12 rounded-full p-2 cursor-pointer"
          onClick={() => {
            const name = prompt("Name.") ?? "";
            console.log(name)
            setPlayers([
              ...players,
              {
                name: (name === "") ? "You serve ZERO purpose in this wourld. You should go FOLD yourself in half. NOW" : name,
                money: 10000,
                economy: 500,
                pop: 10000,
                civ: {
                  ppul: 500,
                  edu: 300,
                  qol: 500
                },
                u: [],
                ct: []
              }
            ])
          }}
        >{/*Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}<path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
      </div>
    </div>
  );
}