import type { Metadata } from "next"

import { PageIntro } from "@/components/page-intro"
import { VisitUs } from "@/components/visit-us"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit, call or email ${site.name} at ${site.address.street} in Freehold, NJ.`,
}

const reasons = [
  {
    title: "I need food or assistance",
    text: "Come by during pantry hours, or call and we'll talk through your options.",
    href: site.phoneHref,
    label: `Call ${site.phone}`,
  },
  {
    title: "I want to make a large donation",
    text: "We'll schedule a drop-off time so our team is ready to receive it.",
    href: `mailto:${site.email}?subject=Scheduling%20a%20donation%20drop-off`,
    label: "Email to schedule",
  },
  {
    title: "Something else",
    text: "Questions about volunteering, partnerships or press? Send us a note.",
    href: `mailto:${site.email}`,
    label: site.email,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="We'd love to hear from you" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.title} className="flex flex-col rounded-xl border p-6">
              <h2 className="font-sans text-lg font-semibold">{r.title}</h2>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                {r.text}
              </p>
              <a
                href={r.href}
                className="mt-5 font-semibold break-all text-brand-deep underline underline-offset-4 hover:no-underline"
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <VisitUs title="Find us" />
    </>
  )
}
