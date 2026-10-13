import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"
import garden from "@/public/images/garden-volunteers.jpg"
import studentVolunteers from "@/public/images/student-volunteers.jpg"
import volunteers from "@/public/images/volunteers-thanksgiving.jpg"

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer at the Freehold Area Open Door food pantry, after-school program or vegetable garden.",
}

const roles = [
  { name: "Sorter", detail: "Check and organize incoming donations" },
  { name: "Packer", detail: "Pack groceries for families and deliveries" },
  { name: "Front door greeter", detail: "Welcome neighbors as they arrive" },
  {
    name: "Computer operator",
    detail: "Help check neighbors in at the front desk",
  },
  {
    name: "Home delivery driver",
    detail: "Deliver groceries to neighbors at home",
  },
  {
    name: "Retail pick-up driver",
    detail: "Collect donations from local stores",
  },
]

export default function VolunteerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Volunteer"
        title="If you want to help, we'll find a place for you"
      >
        <p>
          Volunteers are the heart of Open Door. They sort, pack, drive, tutor
          and garden so that no one in our community goes hungry.
        </p>
      </PageIntro>

      {/* Pantry */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand uppercase">
              Food pantry
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Volunteer at the pantry
            </h2>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-cream p-4">
                <dt className="text-sm text-muted-foreground">Shifts</dt>
                <dd className="mt-1 font-semibold">Mon – Thu, 9 am – 3 pm</dd>
              </div>
              <div className="rounded-lg bg-cream p-4">
                <dt className="text-sm text-muted-foreground">Age</dt>
                <dd className="mt-1 font-semibold">15 and older</dd>
              </div>
            </dl>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Some positions include a short training. Fill out the application
              and we&apos;ll reach out about a role and schedule that fits you.
            </p>
            <a
              href={site.links.volunteerForm}
              className={cn(buttonVariants({ size: "cta" }), "mt-6")}
            >
              Volunteer application <ExternalLink className="size-4" />
            </a>
          </div>

          <div>
            <Image
              src={volunteers}
              alt="Open Door volunteers with carts of groceries"
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[16/10] w-full rounded-xl object-cover"
            />
            <h3 className="mt-8 font-sans text-lg font-semibold">
              Pantry roles
            </h3>
            <ul className="mt-3 divide-y border-y">
              {roles.map((r) => (
                <li
                  key={r.name}
                  className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-4"
                >
                  <span className="font-medium">{r.name}</span>
                  <span className="text-muted-foreground sm:text-right">
                    {r.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="border-t bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            More ways to pitch in
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <article className="overflow-hidden rounded-xl border bg-white">
              <Image
                src={garden}
                alt="Volunteers at the community vegetable garden"
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Vegetable Garden</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Since 2019 our garden on land donated by St. Robert Bellarmine
                  Parish (61 Georgia Road, Freehold) has grown fresh produce for
                  the pantry. Help us plant, tend, harvest and deliver.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border bg-white">
              <Image
                src={studentVolunteers}
                alt="Young volunteers at the Open Door pantry"
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Under 15</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Younger volunteers can make a big impact by running a
                  collection drive or community project. Bring us your ideas. We
                  love new ones.
                </p>
              </div>
            </article>

            <article className="flex flex-col rounded-xl border bg-white p-6">
              <h3 className="text-xl font-semibold">After School Program</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Help Freehold Borough students with homework, reading and
                computer skills, or join in on educational activities.
              </p>
              <div className="mt-auto border-t pt-6">
                <p className="font-semibold">Interested in any of these?</p>
                <p className="mt-1 text-muted-foreground">
                  Call{" "}
                  <a
                    href={site.phoneHref}
                    className="text-foreground underline"
                  >
                    {site.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${site.email}?subject=Volunteering`}
                    className="text-foreground underline"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
