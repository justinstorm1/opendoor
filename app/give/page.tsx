import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { mostNeeded, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import studentVolunteers from "@/public/images/student-volunteers.jpg"

export const metadata: Metadata = {
  title: "Ways to Give",
  description:
    "Donate online, drop off food from our most-needed list, or organize a drive for Freehold Area Open Door.",
}

export default function GivePage() {
  return (
    <>
      <PageIntro
        eyebrow="Ways to give"
        title="Your gift stays right here in our community"
      >
        <p>
          Freehold Area Open Door is a 501(c)(3) nonprofit. Donations pay for
          food, essential expenses and the staff who keep our doors open, and
          are tax-deductible to the extent allowed by law.
        </p>
      </PageIntro>

      {/* Funds */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl bg-cream p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-brand uppercase">
              Give funds
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Donate online</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              The quickest way to help. Gifts are processed securely through
              PayPal and go straight to work feeding our neighbors.
            </p>
            <a
              href={site.links.donate}
              className={cn(buttonVariants({ size: "cta" }), "mt-8")}
            >
              Donate now <ExternalLink className="size-4" />
            </a>
          </div>

          <div className="rounded-xl border p-8 sm:p-10">
            <h2 className="font-sans text-lg font-semibold">Give by check</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Mail your check to:
            </p>
            <address className="mt-3 leading-relaxed not-italic">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>

            <h2 className="mt-8 font-sans text-lg font-semibold">
              See where it goes
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href={site.links.annualReport}
                  className="text-brand-deep underline underline-offset-4 hover:no-underline"
                >
                  2025 Annual Report
                </a>
              </li>
              <li>
                <a
                  href={site.links.form990}
                  className="text-brand-deep underline underline-offset-4 hover:no-underline"
                >
                  IRS Form 990 (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Food */}
      <section id="food" className="scroll-mt-32 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                Give food
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Most-needed items
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Drop off donations during pantry hours, {site.hours.days},{" "}
                {site.hours.time}, at {site.address.street}.
              </p>
              <p className="mt-4 rounded-lg border-l-4 border-brand bg-blush/60 p-4 text-[0.95rem] leading-relaxed">
                Please, <strong>no jumbo or bulk-sized items</strong>. Planning
                a large donation or food drive?{" "}
                <a
                  href={`mailto:${site.email}?subject=Scheduling%20a%20donation%20drop-off`}
                  className="font-semibold underline"
                >
                  Email us
                </a>{" "}
                and we&apos;ll set up a drop-off time.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {Object.entries(mostNeeded).map(([group, items]) => (
                <div key={group}>
                  <h3 className="border-b pb-2 font-sans text-base font-semibold">
                    {group}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-muted-foreground">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Birthday + drives */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Image
            src={studentVolunteers}
            alt="A group of young volunteers standing in the Open Door pantry"
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Run a drive or fill a birthday bag
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A food drive at your school, congregation or workplace makes a
              real difference on our shelves, and we&apos;re always open to new
              ideas.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our Birthday Bag program also welcomes new toys, gift items, gift
              bags, cake mix, icing, candles and other birthday supplies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=Organizing%20a%20drive`}
                className={buttonVariants({ size: "cta" })}
              >
                Plan a drive with us
              </a>
              <Link
                href="/volunteer"
                className={buttonVariants({ size: "cta", variant: "outline" })}
              >
                Give your time
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
