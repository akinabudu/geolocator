"use client";
import { CardWithForm } from "@/components/Card";
import DeviceEventsPage from "@/components/Events";
import GeolocationExample from "@/components/GeoLocator";
import { ModeToggle } from "@/components/ModeToogle";
import ScreenWakeLock from "@/components/ScreenWakeLock";
import Image from "next/image";
import React from "react";
import { useWakeLock } from "react-screen-wake-lock";

export default function Home() {
  const value = DeviceEventsPage();

  const { isSupported, released, request, release } = useWakeLock({
    onRequest: () => alert("Screen Wake Lock: requested!"),
    onError: () => alert("An error happened \uD83D\uDCA5"),
    onRelease: () => alert("Screen Wake Lock: released!"),
  });
  React.useEffect(() => {
    request();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      Step Counter
      <div className="flex flex-col items-center justify-center gap-4 border-4 rounded-full p-20 text-2xl text-white font-bold">
        {value}
      </div>
      <div>
        {/* Geolocator
        <GeolocationExample /> */}
        <div>
          <p>
            Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
            <br />
            Released: <b>{`${released}`}</b>
          </p>
        </div>{" "}
      </div>
    </main>
  );
}
