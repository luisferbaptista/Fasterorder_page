import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SimpleCursor } from "@/components/simple-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FasterOrder - Streamline Your Ordering Process",
  description: "FasterOrder helps businesses streamline their ordering process with powerful tools and analytics.",
  viewport: {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "#2e2e2e" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <SimpleCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

