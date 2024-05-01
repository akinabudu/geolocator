'use client'
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });


export default function Provider({ children }: { children:React.ReactNode }) {
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
