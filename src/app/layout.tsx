import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playwrite_NO as Playwrite_Norge } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const playwriteNorge = Playwrite_Norge({ variable: "--font-display" })

export const metadata: Metadata = {
  title: "Pizzerie Sara - Redefining Pizza",
  description:
    "Experience world-class Italian pizza at Pizzerie Sara. Book your table, explore our menus, and discover our locations.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${playwriteNorge.variable} font-sans antialiased`}>
        <ThemeProvider>
            <Header />
          <LanguageProvider>
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
