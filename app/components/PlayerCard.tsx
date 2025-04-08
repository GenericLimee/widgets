import { playerData, PopupRequest } from '@/customStuff';
import Popup from './Popup';
import clsx from 'clsx';
import Dropdown from './Dropdown';
import Form from './Form';
import { useContext } from 'react';

export default function PlayerCard({ data, setData }: { data: playerData, setData: (a: playerData) => void }) {
  const close = useContext(PopupRequest)[1];
  return (
    <div 
      className={clsx(
        "PLAYER_CARD p-8 bg-slate-950 rounded-xl grid justify-items-center place-items-center gap-4 animate-phase-in",
      )} 
    >
      <div className="col-span-2"><h1 className="font-medium">{data.name}</h1></div>
      <hr className="w-40 h-1 col-span-2 justify-self-center m-0" />
      <div>
        <h2 className="font-medium">Marks - {data.money}</h2>
        <h2 className="font-medium">Economy - {data.economy}</h2>
        <h2 className="font-medium">Population - {data.pop}</h2>
      </div>
      <div>
        <h2 className="font-medium">QoL - {data.civ.qol}</h2>
        <h2 className="font-medium">Popularity - {data.civ.ppul}</h2>
        <h2 className="font-medium">Education - {data.civ.edu}</h2>
      </div>
      <hr className="w-40 h-1 col-span-2 justify-self-center m-0" />
      <Popup labelcn="bg-emerald-900 p-5" popupcn="overflow-x-scroll from-amber-900 to-orange-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col p-5" label="Units">
        {data.u.length ? data.u?.map((unit, num) => {
          return (
            <div key={num + unit.mor * 10} className="border-[3px] border-slate-950 p-2 rounded-xl">
              <p><b>Name -</b> {unit.name}</p>
              <p><b>Strength -</b> {unit.str}</p>
              <p><b>Morale -</b> {unit.mor}</p>
              <p><b>Supplies -</b> {unit.sup}</p>
              <p><b>Type -</b> {unit.type}</p>
            </div>
          );
        }) : <p className="text-3xl font-semibold z-">None.</p>}
      </Popup>
      <Popup labelcn="bg-slate-800 p-5" popupcn="overflow-x-scroll from-amber-900 to-orange-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col p-5" label="Cities">
        {data.ct.length ? data.ct?.map((city, num) => {
          return (
            <div key={num + city.pop * 10} className="border-[3px] border-slate-950 p-2 rounded-xl">
              <p><b>{'{ '}{city.name}{' }'}</b></p>
              <p><b>Population -</b> {city.pop}</p>
              <p><b>Wall Condition -</b> {city.wc}</p>
              <p><b>Fortification Class -</b> {city.fc}</p>
            </div>
          );
        }) : <p className="text-3xl font-semibold">None.</p>}
      </Popup>
      <Dropdown label="New Events" cn="rounded-xl bg-zinc-800 p-5 shadow-xl" outercn="col-span-2 justify-self-stretch">
        <Popup label="New Unit" popupcn="from-zinc-950 to-neutral-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col content-center p-5">
          <Form 
            groupcn="bg-slate-800 rounded-xl flex flex-row items-center justify-start gap-2"
            formcn="flex flex-col items-stretch gap-4"
            labelcn="bg-slate-900 font-medium text-lg p-2 rounded-xl shadow-xl -translate-x-2 -translate-y-2"
            onSubmit={form => { 
              const newData = {...data};
              newData.u.push({ 
                name: form.unitname,
                str: 100,
                mor: 1000,
                sup: 500,
                type: form.unittype
              });
              setData(newData);
              close();
              console.log('form:', typeof form.unittype);
            }}
            fields={[
              {
                label: "Name",
                name: "unitname",
                type: "text",
              },
              {
                label: "Type",
                name: "unittype",
                type: "dropdown",
                options: [
                  'Infantry',
                  'Artillery',
                  'Cavalry',
                ]
              },
              {
                name: "asdf",
                type: "submit",
                props: {
                  className: "bg-emerald-600 rounded-xl p-3 cursor-pointer w-full",
                  value: "Create"
                }
              }
            ]}
          />
        </Popup>
        <Popup label="New City" labelcn="mt-3" popupcn="from-zinc-950 to-neutral-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col content-center p-5">
          <Form 
            groupcn="bg-slate-800 rounded-xl flex flex-row items-center justify-start gap-2"
            formcn="flex flex-col items-stretch gap-4"
            labelcn="bg-slate-900 font-medium text-lg p-2 rounded-xl shadow-xl -translate-x-2 -translate-y-2"
            onSubmit={form => { 
              const newData = {...data};
              newData.ct.push({ 
                name: form.cityname,
                fc: 1,
                wc: 1000,
                pop: 1000
              });
              setData(newData);
              close();
            }}
            fields={[
              {
                label: "City Name",
                name: "cityname",
                type: "text",
                props: {}
              },
              {
                name: "submit",
                type: "submit",
                props: {
                  className: "bg-emerald-600 rounded-xl p-3 cursor-pointer w-full",
                  value: "Create"
                }
              }
            ]}
          />
        </Popup>
      </Dropdown>
    </div>
  );
}