import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Surosh Nathaniel Kumar - AI/ML Engineer & Business Strategist",
  description:
    "Portfolio of Surosh Nathaniel Kumar - AI/ML Engineer, Business Strategist, and Product Developer. Specializing in machine learning, data analytics, and strategic business solutions.",
  keywords: ["AI", "Machine Learning", "Business Strategy", "Data Analytics", "Product Development"],
  authors: [{ name: "Surosh Nathaniel Kumar" }],
  creator: "Surosh Nathaniel Kumar",
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
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
