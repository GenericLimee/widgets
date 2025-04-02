import { playerData } from '@/customStuff';
import Popup from './Popup';
import clsx from 'clsx';

export default function PlayerCard({ data }: { data: playerData }) {
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
        <Popup labelcn="bg-emerald-900" popupcn="from-amber-900 to-orange-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col content-center p-5" label="Units">
          {data.u?.map((unit, num) => {
            return (
              <div key={num + unit.mor * 10} className="border-[3px] border-slate-950 p-2 rounded-xl">
                <p><b>Name -</b> {unit.name}</p>
                <p><b>Strength -</b> {unit.str}</p>
                <p><b>Morale -</b> {unit.mor}</p>
                <p><b>Supplies -</b> {unit.sup}</p>
                <p><b>Type -</b> {unit.typ}</p>
              </div>
            );
          }) ?? <p className="text-3xl font-semibold">None.</p>}
        </Popup>
        <Popup labelcn="bg-slate-800" popupcn="from-amber-900 to-orange-900 bg-gradient-to-tr border-[3px] border-zinc-950 rounded-xl flex gap-4 flex-wrap flex-col content-center p-5" label="Cities">
          {data.ct?.map((city, num) => {
            return (
              <div key={num + city.pop * 10} className="border-[3px] border-slate-950 p-2 rounded-xl">
                <p><b>{'{ '}{city.name}{' }'}</b></p>
                <p><b>Population -</b> {city.pop}</p>
                <p><b>Wall Condition -</b> {city.wc}</p>
                <p><b>Fortification Class -</b> {city.fc}</p>
              </div>
            );
          }) ?? <p className="text-3xl font-semibold">None.</p>}
        </Popup>
    </div>
  );
}