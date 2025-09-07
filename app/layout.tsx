import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammad Taha - Associate Software Engineer | PHP, Laravel",
  description:
    "Experienced Associate Software Engineer with 1+ years specializing in PHP, Laravel, React, and Next.js. Building robust web applications and solving complex problems through elegant code.",
  keywords: "Muhammad Taha, Software Engineer,Laravel Expert, Web Development, Full Stack Developer",
  authors: [{ name: "Muhammad Taha" }],
  creator: "Muhammad Taha",
  publisher: "Muhammad Taha",
  generator: "v0.dev",
  openGraph: {
    title: "Muhammad Taha - Associate Software Engineer",
    description: "Building robust web applications with PHP, Laravel, with over 1+ years of experience.",
    images: [{ url: "/images/mohammad-arslan.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Taha - Associate Software Engineer",
    description: "Building robust web applications with PHP, Laravel with over 1+ years of experience.",
    images: ["/images/muhammad-taha.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/muhammad-taha.jpg" },
      { url: "/images/muhammad-taha.jpg", type: "image/jpg" }
    ],
    shortcut: "/images/muhammad-taha.jpg",
    apple: "/images/muhammad-taha.jpg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
