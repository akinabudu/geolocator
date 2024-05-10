"use client";
import { CardWithForm } from "@/components/Card";
import DeviceEventsPage from "@/components/Events";
import GeolocationExample from "@/components/GeoLocator";
import { ModeToggle } from "@/components/ModeToogle";
import Image from "next/image";
import React from "react";

export default function Home() {
  const value = DeviceEventsPage()
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      Step Counter
      <div className="flex flex-col items-center justify-center gap-4 border-4 rounded-full p-20 text-2xl text-white font-bold">
        {value}
      </div>
      <div>
Geolocator
      <GeolocationExample/>
      </div>
    </main>
  );
}
