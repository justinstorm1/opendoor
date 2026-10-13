import type { Metadata } from "next"
import Image from "next/image"
import { Check, Phone } from "lucide-react"

import { PageIntro } from "@/components/page-intro"
import { VisitUs } from "@/components/visit-us"
import { serviceArea, site } from "@/lib/site"
import afterSchool from "@/public/images/after-school.jpg"
import pantry from "@/public/images/pantry-shelves.jpg"

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Free groceries, rental and utility assistance, after-school programs and seasonal help from Freehold Area Open Door.",
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function GetHelpPage() {
  return (
    <>
      <PageIntro eyebrow="Get help" title="We're here when you need us">
        <p>
          Whether you need groceries this week or help keeping the lights on,
          start by stopping in or giving us a call. Our team will walk you
          through it.
        </p>
      </PageIntro>

      {/* Quick contact */}
      <div className="border-b bg-blush/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[0.95rem]">
            <strong>Not sure where to start?</strong> Call us during pantry
            hours, {site.hours.shortDays}, {site.hours.time}.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-brand-deep hover:underline"
          >
            <Phone className="size-4" /> {site.phone}
          </a>
        </div>
      </div>

      {/* Food */}
      <section
        id="food"
        className="mx-auto grid max-w-6xl scroll-mt-32 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            Food pantry
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Groceries, no questions asked
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our pantry is client-choice, which means you shop for what your
            household will actually eat. It&apos;s open to anyone in need. Just
            come by during our hours.
          </p>
          <Checklist
            items={[
              "Fresh fruits and vegetables, including produce from our own garden",
              "Bakery items and bread",
              "Dairy products",
              "Prepared meals",
              "Pantry staples and household basics",
            ]}
          />
          <p className="mt-6 rounded-lg bg-cream p-4 text-[0.95rem] leading-relaxed">
            <strong>When:</strong> {site.hours.days}, {site.hours.time}
            <br />
            <strong>Where:</strong> {site.address.street}, {site.address.city}
          </p>
        </div>
        <Image
          src={pantry}
          alt="Open Door pantry shelves stocked with bread and fresh produce"
          placeholder="blur"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </section>

      {/* Housing */}
      <section id="housing" className="scroll-mt-32 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand uppercase">
              Housing security
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Help staying in your home
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Through our Advocacy program, we work one-on-one with individuals
              and families facing financial hardship to find a way through.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 sm:p-8">
            <h3 className="font-sans text-lg font-semibold">
              Our advocacy team can help with
            </h3>
            <Checklist
              items={[
                "Emergency rental assistance",
                "Utility assistance",
                "Finding and applying for relief programs",
                "Prescription assistance",
                "Transportation services",
              ]}
            />
            <p className="mt-6 border-t pt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Our program is led by Erika Woods, MSW, Advocacy Director. Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-foreground underline"
              >
                {site.phone}
              </a>{" "}
              to talk with our team about your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto grid max-w-6xl scroll-mt-32 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center"
      >
        <Image
          src={afterSchool}
          alt="Children at tables doing art and homework in the after-school program"
          placeholder="blur"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover lg:order-last"
        />
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            After school, and after graduation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Since 1989 our after-school program has given Freehold Borough
            students a safe, encouraging place to learn.
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-sans text-lg font-semibold">
                After School Program
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                Homework help, computer skills and English language learning
                support for children in Freehold Borough schools.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-lg font-semibold">Scholarships</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                Students who complete our After School Program can apply for a
                scholarship toward college or vocational school.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-lg font-semibold">
                Arts enrichment
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                In partnership with the Community Arts Center of Freehold,
                students explore creative expression and arts education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section id="seasonal" className="scroll-mt-32 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            Seasonal programs
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Holidays and birthdays
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="text-xl font-semibold">Birthday Bags</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                For children ages 6–16 whose families are registered Open Door
                clients living in our service area. A birth certificate must be
                on file for each child.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ask about it when you pick up your monthly food package.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-xl font-semibold">Thanksgiving Dinner</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every November we provide the makings of a Thanksgiving dinner,
                including a turkey. In 2025 we served hundreds of families.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Details on the 2026 distribution will be shared through our{" "}
                <a
                  href={site.links.newsletter}
                  className="font-medium text-foreground underline"
                >
                  mailing list
                </a>{" "}
                and at the pantry.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-xl font-semibold">Christmas Gifts</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Each year we provide gifts for the children of families
                registered with our Advocacy program.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-cream p-6 sm:p-8">
            <h3 className="font-sans text-lg font-semibold">
              Towns we serve for registered programs
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {serviceArea.map((town) => (
                <li
                  key={town}
                  className="rounded-full border bg-white px-3 py-1 text-sm"
                >
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <VisitUs />
    </>
  )
}
