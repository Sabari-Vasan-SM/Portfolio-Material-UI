import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SabariVasan - Portfolio",
  description: "Mechanical Engineer | Web Developer | Tech Aficionado",
  icons: {
    icon: [
      {
        url: "https://avatars.githubusercontent.com/u/144119741?v=4",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://avatars.githubusercontent.com/u/144119741?v=4",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "https://avatars.githubusercontent.com/u/144119741?v=4",
    apple: {
      url: "https://avatars.githubusercontent.com/u/144119741?v=4",
      sizes: "180x180",
      type: "image/png",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
