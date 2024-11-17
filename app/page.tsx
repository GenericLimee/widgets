import Button from "@/components/Button";
export default function Page() {
  return (
    <div className="grid gap-4 w-full h-full auto-rows-auto grid-cols-5 p-5">
      <Button href="/widgets" className="rounded-3xl text-center p-10">Widgets</Button>
    </div>
  );
}