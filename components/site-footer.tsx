import Image from "next/image"
import Link from "next/link"

import { nav, site } from "@/lib/site"
import apple from "@/public/images/apple.png"
import badge from "@/public/images/greatnonprofits-2025.jpg"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={apple} alt="" className="size-10" />
            <p className="font-heading text-xl leading-tight font-semibold text-white">
              Freehold Area
              <br />
              Open Door
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A 501(c)(3) nonprofit providing food, housing support and
            educational programs to our neighbors in Central New Jersey since
            1987.
          </p>
          <a
            href={site.links.greatNonprofits}
            className="mt-5 inline-block overflow-hidden rounded-md bg-white p-1"
          >
            <Image
              src={badge}
              alt="GreatNonprofits 2025 Top-Rated Nonprofit"
              className="h-20 w-auto"
            />
          </a>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">
            Visit
          </h2>
          <address className="mt-4 space-y-1 text-sm leading-relaxed not-italic">
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p className="pt-3 text-white">{site.hours.days}</p>
            <p>{site.hours.time}</p>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="pt-3">
              <a
                href={site.links.newsletter}
                className="font-medium text-white underline underline-offset-4 hover:no-underline"
              >
                Join our mailing list
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.links.donate} className="hover:text-white">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <a href={site.links.annualReport} className="hover:text-white">
              2025 Annual Report
            </a>
            <a href={site.links.form990} className="hover:text-white">
              Form 990
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
