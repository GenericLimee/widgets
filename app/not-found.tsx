import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="m-auto">
      <div className="p-5 bg-gradient-to-tr from-slate-500 to-zinc-800 shadow-lg rounded-full m-auto text-xl/10">
        <h1>Unfortunately, the page that you were looking for does not exist.</h1>
      </div>
      <Link href="/" className="m-5 rounded-full p-4 text-md bg-gradient-to-bl from-slate-800 to-emerald-800 shadow-lg">Go Back</Link>
    </div>
  );
}