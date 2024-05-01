import { CardWithForm } from "@/components/Card";
import { ModeToggle } from "@/components/ModeToogle";
import Image from "next/image";
import DeviceEventsPage from "./DeviceEvent/page";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-around p-24">
    <ModeToggle/>
    <CardWithForm/>
    <DeviceEventsPage/>
   </main>
  );
}
