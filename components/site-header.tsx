"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Clock, MapPin, Menu, Phone, X } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import logo from "@/public/images/logo.jpg"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_var(--border)]">
      <div className="bg-brand-deep text-sm text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 sm:justify-between sm:px-6">
          <p className="flex items-center gap-2">
            <Clock className="size-4 opacity-80" aria-hidden />
            <span>
              <span className="font-semibold">Pantry open</span>{" "}
              {site.hours.shortDays}, {site.hours.time}
            </span>
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:underline"
            >
              <MapPin className="size-4 opacity-80" aria-hidden />
              {site.address.street}, {site.address.city}
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="size-4 opacity-80" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0"
          aria-label={`${site.name} home`}
        >
          <Image
            src={logo}
            alt={site.name}
            priority
            className="h-10 w-auto sm:h-12"
            sizes="200px"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:bg-cream hover:text-foreground",
                      active && "text-brand-deep"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.links.donate}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 px-5 text-[0.95rem] font-semibold"
            )}
          >
            Donate
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-md border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b py-3 text-lg font-medium last:border-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3 text-sm text-muted-foreground">
              {site.address.street}, {site.address.city} ·{" "}
              <a href={site.phoneHref} className="underline">
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
