import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "New Shri Hari Bartan Palace",
  description:
    "Premium brass, copper, and steel utensils for homes and businesses. Handcrafted & durable designs since 1970. Based in Lucknow.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <Suspense>
            <main className="flex-1">{children}</main>
          </Suspense>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
