'use client'
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import React from "react";


const inter = Inter({ subsets: ["latin"] });


export default function Provider({ children }: { children:React.ReactNode }) {

  // React.useEffect(() => {
  //   // Register the service worker
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/worker.js')
  //       .then((registration) => {
  //         console.log('Service Worker registered with scope:', registration.scope);
  //       })
  //       .catch((error) => {
  //         console.error('Service Worker registration failed:', error);
  //       });
  //   }
  // }, []);

  return (
    <>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className={`${inter.className} `}>

            {children}
            </div>
          </ThemeProvider>
  
    </>
  )
}
