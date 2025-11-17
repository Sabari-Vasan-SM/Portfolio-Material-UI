"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"
import { LoadingScreen } from "@/components/loading-screen"
import { useState } from "react"

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  return (
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
  )
}
