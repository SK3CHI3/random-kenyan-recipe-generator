import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kenyan Recipe Generator",
  description: "Discover delicious Kenyan recipes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}


  title: "Kenyan Recipe Generator",
  description: "Discover delicious Kenyan recipes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}

