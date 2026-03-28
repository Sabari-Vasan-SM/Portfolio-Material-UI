"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"
// import { LoadingScreen } from "@/components/loading-screen"
import { ChatBot } from "@/components/chatbot"
import { useState } from "react"

import { useEffect } from "react"

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ClientLayout>{children}</ClientLayout>
      <Toaster />
      <ChatBot />
    </ThemeProvider>
  )
}
