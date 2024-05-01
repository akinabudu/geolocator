import { CardWithForm } from "@/components/Card";
import { ModeToggle } from "@/components/ModeToogle";
import Image from "next/image";
import DeviceEventsPage from "./DeviceEvent/page";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-around p-24">
    {/* <ModeToggle/> */}
    {/* <CardWithForm/> */}
    <div className="flex flex-col items-center justify-center gap-4 border p-10 text-2xl">

    <DeviceEventsPage/>
    </div>
   </main>
  );
}
