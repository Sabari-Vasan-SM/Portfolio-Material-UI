"use client"

import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"
import { LoadingScreen } from "@/components/loading-screen"
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {!isLoadingComplete && <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />}
          {isLoadingComplete && <ClientLayout>{children}</ClientLayout>}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
