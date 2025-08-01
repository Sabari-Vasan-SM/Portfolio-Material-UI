import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

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
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
