import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"

import { PageIntro, SectionHeading } from "@/components/page-intro"
import { site } from "@/lib/site"
import seal from "@/public/images/seal.jpg"
import adewale from "@/public/images/team/adewale-akinrinde.jpg"
import allen from "@/public/images/team/allen-rothman.jpg"
import alyce from "@/public/images/team/alyce-meyers.jpg"
import annette from "@/public/images/team/annette-jordan.jpg"
import brian from "@/public/images/team/brian-allain.jpg"
import eileen from "@/public/images/team/eileen-allen.jpg"
import erika from "@/public/images/team/erika-woods.jpg"
import fred from "@/public/images/team/fred-berenbroick.jpg"
import geralyn from "@/public/images/team/geralyn-fraggetta-drury.jpg"
import johnC from "@/public/images/team/john-crescenti.jpg"
import johnS from "@/public/images/team/john-spangler.jpg"
import mike from "@/public/images/team/mike-schreiber.jpg"
import van from "@/public/images/van.jpg"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The history, staff and Board of Trustees of Freehold Area Open Door, serving Central New Jersey since 1987.",
}

const timeline = [
  {
    year: "1984",
    title: "Founding",
    text: "Grassroots food donations are brought to the parking lot of the Freehold Reformed Church.",
  },
  {
    year: "1987",
    title: "Incorporation",
    text: "As more community members get involved, Open Door is incorporated on April 10, 1987.",
  },
  {
    year: "1988",
    title: "Our first office",
    text: "We move into our first permanent office on East Main Street and hire our first Program Director.",
  },
  {
    year: "1990",
    title: "39 Throckmorton Street",
    text: "Needing more space to serve our neighbors, Open Door moves to 39 Throckmorton Street.",
  },
  {
    year: "1999",
    title: "First scholarships",
    text: "Our first scholarships go to students from the After School program, which began in 1989.",
  },
  {
    year: "2006",
    title: "Plant a Row for the Hungry",
    text: "With the Monmouth County Master Gardeners, we begin receiving fresh produce from a community garden in Freehold Township.",
  },
  {
    year: "2011",
    title: "Our 100,000th neighbor",
    text: "Open Door serves its 100,000th individual, on the way to more than 350,000 since our founding.",
  },
  {
    year: "2016",
    title: "A voice for the voiceless",
    text: "Erika Woods is appointed our first full-time Director of Advocacy.",
  },
  {
    year: "2018",
    title: "New Executive Director",
    text: "Geralyn Fraggetta-Drury becomes our first full-time, paid Executive Director.",
  },
  {
    year: "2020",
    title: "COVID-19",
    text: "Our doors never closed. We moved operations to the parking lot so neighbors kept receiving food.",
  },
  {
    year: "2026",
    title: "80 Throckmorton Street",
    text: "On March 2, 2026, we welcome neighbors to our new, larger home.",
  },
]

type Person = {
  name: string
  role: string
  photo: StaticImageData
  bio: string
}

const staff: Person[] = [
  {
    name: "Geralyn Fraggetta-Drury",
    role: "Executive Director",
    photo: geralyn,
    bio: "Joined in 2018. Dedicated to expanding access, dignity and hope for neighbors in need.",
  },
  {
    name: "Erika Woods, MSW",
    role: "Advocacy Director",
    photo: erika,
    bio: "Joined in 2016. Provides compassionate policy support and resource navigation for individuals and families.",
  },
  {
    name: "Alyce Meyers",
    role: "Pantry Coordinator",
    photo: alyce,
    bio: "Joined in 2021. Organizes food distributions with a focus on community well-being.",
  },
]

const board: Person[] = [
  {
    name: "Brian Allain",
    role: "President",
    photo: brian,
    bio: "Experienced fundraiser and board member who has started small businesses and led startups inside large companies and small firms.",
  },
  {
    name: "John Crescenti",
    role: "Vice President",
    photo: johnC,
    bio: "Retired engineer and Open Door volunteer since 2017.",
  },
  {
    name: "Allen Rothman",
    role: "Secretary",
    photo: allen,
    bio: "Retired actuary and adjunct computer science faculty at Brookdale Community College. Picks up donations from Battleview Orchards.",
  },
  {
    name: "Adewale Akinrinde",
    role: "Treasurer",
    photo: adewale,
    bio: "Vice President at Bank of America and volunteer since 2021.",
  },
  {
    name: "Fred Berenbroick",
    role: "Financial Secretary",
    photo: fred,
    bio: "Retired IT executive and volunteer since 2021.",
  },
  {
    name: "Eileen Allen",
    role: "Member at Large",
    photo: eileen,
    bio: "Lifelong Freehold resident, St. Robert Bellarmine parishioner and former Freehold Township Board of Health member.",
  },
  {
    name: "Annette Jordan",
    role: "Member at Large",
    photo: annette,
    bio: "Freehold Borough Council member since 2019, working with Open Door through the Freehold Safety Net since 2020.",
  },
  {
    name: "Mike Schreiber",
    role: "Member at Large",
    photo: mike,
    bio: "Freehold resident and founder of A+ Products, a New Jersey sourcing and supply chain partner.",
  },
  {
    name: "John Spangler",
    role: "Member at Large",
    photo: johnS,
    bio: "Retired Freehold Township music educator who, with his wife Diane, has volunteered since 2004.",
  },
]

function PersonCard({ person, large }: { person: Person; large?: boolean }) {
  return (
    <li className="flex gap-4">
      <Image
        src={person.photo}
        alt={`Portrait of ${person.name}`}
        sizes={large ? "96px" : "72px"}
        className={
          large
            ? "size-24 shrink-0 rounded-full object-cover object-top"
            : "size-18 shrink-0 rounded-full object-cover object-top"
        }
      />
      <div>
        <h3 className="font-sans text-lg leading-tight font-semibold">
          {person.name}
        </h3>
        <p className="text-sm font-medium text-brand-deep">{person.role}</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          {person.bio}
        </p>
      </div>
    </li>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Neighbors helping neighbors since 1987"
      >
        <p>
          What began as an interfaith food drive in a church parking lot is now
          a multi-service agency tackling food insecurity, housing challenges
          and education, with compassion and dignity.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our vision"
            title="A stronger, more resilient community"
          >
            <p>
              We envision a community where every neighbor has access to food,
              shelter, opportunity and hope.
            </p>
            <p className="mt-4">
              Today that means a client-choice food pantry, rental and utility
              assistance, after-school enrichment, college scholarships and
              holiday food and gift distributions. With demand growing, we keep
              finding ways to reach more people and serve them well.
            </p>
          </SectionHeading>
        </div>
        <Image
          src={van}
          alt="The Open Door delivery van with the apple heart logo and the words Be the One"
          placeholder="blur"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </section>

      {/* Timeline */}
      <section className="border-t bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Our history"
            title="More than 40 years at a glance"
          />
          <ol className="mt-12 grid gap-x-10 md:grid-cols-2">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="relative border-l-2 border-brand/30 pb-10 pl-8"
              >
                <span className="absolute top-1 -left-[9px] size-4 rounded-full border-4 border-cream bg-brand" />
                <p className="font-heading text-2xl font-semibold text-brand-deep">
                  {item.year}
                </p>
                <h3 className="mt-1 font-sans text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Staff */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Our people" title="Staff" />
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {staff.map((p) => (
            <PersonCard key={p.name} person={p} large />
          ))}
        </ul>

        <div className="mt-20 border-t pt-16">
          <SectionHeading title="Board of Trustees" />
          <ul className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {board.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </ul>
        </div>
      </section>

      {/* Accountability */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <Image
            src={seal}
            alt="Freehold Area Open Door seal"
            sizes="128px"
            className="size-32 shrink-0"
          />
          <div>
            <h2 className="text-2xl font-semibold">
              Accountable to our community
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
              Open Door is a 501(c)(3) tax-exempt nonprofit and a
              GreatNonprofits Top-Rated Nonprofit for 2022, 2023, 2024 and 2025.
              Read our{" "}
              <a
                href={site.links.annualReport}
                className="text-foreground underline"
              >
                2025 Annual Report
              </a>{" "}
              or{" "}
              <a
                href={site.links.form990}
                className="text-foreground underline"
              >
                Form 990
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
