import type { Metadata } from "next"
import { Public_Sans, Source_Serif_4 } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" })
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Food Pantry & Community Services in Freehold, NJ`,
    template: `%s | ${site.name}`,
  },
  description:
    "Freehold Area Open Door is a client-choice food pantry and multi-service nonprofit serving Central New Jersey since 1987: food, housing assistance, after-school programs and more.",
  icons: { icon: "/images/apple.png" },
  openGraph: {
    siteName: site.name,
    images: ["/images/van.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", sans.variable, serif.variable)}
    >
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
