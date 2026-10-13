import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { VisitUs } from "@/components/visit-us"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"
import afterSchool from "@/public/images/after-school.jpg"
import appleOutline from "@/public/images/apple-outline.png"
import garden from "@/public/images/garden-volunteers.jpg"
import pantry from "@/public/images/pantry-shelves.jpg"
import volunteers from "@/public/images/volunteers-thanksgiving.jpg"

const stats = [
  { value: "350,000+", label: "neighbors served since our founding" },
  { value: "1987", label: "the year we were incorporated" },
  {
    value: "1,600+ lbs",
    label: "of garden produce donated to the pantry in 2026",
  },
  { value: "4 years", label: "named a GreatNonprofits Top-Rated Nonprofit" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand uppercase">
              Food pantry &amp; community services · Freehold, NJ
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
              No one in our community should go hungry.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Open Door is a client-choice food pantry that also helps neighbors
              with rent, utilities and after-school support. If you need food,
              just come in during pantry hours. No appointment, no questions
              asked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-help"
                className={buttonVariants({ size: "cta" })}
              >
                Get food &amp; help
              </Link>
              <Link
                href="/give"
                className={buttonVariants({ size: "cta", variant: "outline" })}
              >
                Ways to give
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={pantry}
              alt="Shelves of bread, fresh vegetables and groceries inside the Open Door pantry"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
            <div className="relative -mt-12 ml-4 w-fit rounded-lg border bg-white p-5 shadow-md sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:ml-0">
              <p className="text-sm font-semibold text-brand-deep">
                Pantry hours
              </p>
              <p className="mt-1 font-heading text-xl font-semibold">
                {site.hours.shortDays}, {site.hours.time}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.address.street}, {site.address.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New location */}
      <section className="border-y bg-blush/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
          <span className="w-fit shrink-0 rounded-full bg-brand-deep px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            We&apos;ve moved
          </span>
          <p className="text-[0.95rem] leading-relaxed">
            After more than 35 years at 39 Throckmorton Street, we welcomed our
            first neighbors to our larger home at{" "}
            <strong>80 Throckmorton Street</strong> on March 2, 2026.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Help with the basics, with dignity"
        >
          Since 1987 we&apos;ve grown from a grassroots, interfaith food drive
          into a multi-service agency, but the idea is the same: treat every
          neighbor who walks through our door with respect.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="flex flex-col">
            <div className="mb-5 h-1 w-12 rounded bg-brand" />
            <h3 className="text-2xl font-semibold">Food Pantry</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              Choose your own groceries: bakery items, fresh fruits and
              vegetables, dairy and prepared meals. Open to anyone in need.
            </p>
            <Link
              href="/get-help#food"
              className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-deep hover:underline"
            >
              About the pantry <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="flex flex-col">
            <div className="mb-5 h-1 w-12 rounded bg-brand" />
            <h3 className="text-2xl font-semibold">Housing Security</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              Emergency rental and utility assistance, plus help finding relief
              programs, prescription assistance and transportation.
            </p>
            <Link
              href="/get-help#housing"
              className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-deep hover:underline"
            >
              About housing help <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="flex flex-col">
            <div className="mb-5 h-1 w-12 rounded bg-brand" />
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              A free after-school program for Freehold Borough students, running
              since 1989, with scholarships for graduates heading to college or
              trade school.
            </p>
            <Link
              href="/get-help#education"
              className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-deep hover:underline"
            >
              About our programs <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* Photo + story */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          <Image
            src={afterSchool}
            alt="Students working on art projects at the after-school program"
            placeholder="blur"
            sizes="(min-width: 640px) 66vw, 100vw"
            className="aspect-[16/10] h-full w-full rounded-xl object-cover sm:col-span-2"
          />
          <Image
            src={garden}
            alt="Volunteers at the Open Door vegetable garden"
            placeholder="blur"
            sizes="(min-width: 640px) 33vw, 100vw"
            className="aspect-[16/10] h-full w-full rounded-xl object-cover sm:aspect-auto"
          />
        </div>
      </section>

      {/* Impact */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <Image
          src={appleOutline}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-28 w-[36rem] max-w-none opacity-10 select-none"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
            Nearly four decades of neighbors helping neighbors
          </h2>
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-white/25 pt-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <p className="font-heading text-4xl font-semibold">
                    {s.value}
                  </p>
                  <p className="mt-2 text-white/80">{s.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Ways to help */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image
            src={volunteers}
            alt="Volunteers gathered around carts of donated groceries ready for Thanksgiving distribution"
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <SectionHeading eyebrow="Get involved" title="Be the one who helps">
              Open Door runs on the generosity of our neighbors. Every dollar,
              can and hour goes directly to families in the Freehold area.
            </SectionHeading>

            <ul className="mt-8 divide-y border-y">
              <li className="py-5">
                <a
                  href={site.links.donate}
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-sans text-lg font-semibold">
                      Give funds
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Pays for food, essential expenses and the staff who keep
                      our doors open.
                    </p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li className="py-5">
                <Link
                  href="/give#food"
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-sans text-lg font-semibold">
                      Donate food
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      See our most-needed list and drop off during pantry hours.
                    </p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
              <li className="py-5">
                <Link
                  href="/volunteer"
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-sans text-lg font-semibold">
                      Volunteer
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Sort, pack, greet, drive or tutor. If you want to help,
                      we&apos;ll find a spot for you.
                    </p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Throughout the year"
            title="Seasonal programs"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-cream p-6">
              <p className="text-sm font-semibold text-brand-deep">November</p>
              <h3 className="mt-1 text-xl font-semibold">
                Thanksgiving Dinner
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Each year we provide hundreds of families with everything for a
                Thanksgiving dinner, turkey included.
              </p>
            </div>
            <div className="rounded-xl border bg-cream p-6">
              <p className="text-sm font-semibold text-brand-deep">December</p>
              <h3 className="mt-1 text-xl font-semibold">Christmas Gifts</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Gifts for the children of families registered with our Advocacy
                program, to brighten the holiday season.
              </p>
            </div>
            <div className="rounded-xl border bg-cream p-6">
              <p className="text-sm font-semibold text-brand-deep">
                Year-round
              </p>
              <h3 className="mt-1 text-xl font-semibold">Birthday Bags</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every child deserves to feel celebrated. We send birthday bags
                home for registered children ages 6 to 16.
              </p>
            </div>
          </div>
          <Link
            href="/get-help#seasonal"
            className={cn(
              buttonVariants({ variant: "link" }),
              "mt-6 h-auto px-0 text-base font-semibold"
            )}
          >
            Program details &amp; eligibility <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <VisitUs />
    </>
  )
}
