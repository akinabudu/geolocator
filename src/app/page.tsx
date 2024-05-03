"use client";
import { CardWithForm } from "@/components/Card";
import { ModeToggle } from "@/components/ModeToogle";
import Image from "next/image";
import DeviceEventsPage from "../components/Events";
import React from "react";
// import {  InstallPwaComponent } from "@/components/InstallPwa";

export default function Home() {
  const value = DeviceEventsPage();
  // const Install = new InstallPwaComponent();
  // InstallPWA();
  // React.useEffect(() => {
  //   async function Insta(){

  //     const sw = navigator.serviceWorker.ready
  //     console.log(await sw)
  //   }
  //   Insta()
  //       }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      {/* <ModeToggle/> */}
      {/* <CardWithForm/> */}
      Step Counter
      <div className="flex flex-col items-center justify-center gap-4 border-4 rounded-full p-20 text-2xl text-white font-bold">
        {/* <DeviceEventsPage/> */}
        {value}    
          </div>
          {/* <button onClick={() => Install.InstallPWA()}>Install PWA</button> */}
          {/* <button (click)="installPWA()">Install PWA</button> */}

    </main>
  );
}
