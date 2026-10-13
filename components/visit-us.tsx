import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function VisitUs({ title = "Visit the pantry" }: { title?: string }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            No appointment needed. Stop in during pantry hours and a member of
            our team will help you.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-4">
              <dt>
                <MapPin className="mt-0.5 size-5 text-brand" />
                <span className="sr-only">Address</span>
              </dt>
              <dd>
                <p className="font-semibold">{site.address.street}</p>
                <p className="text-muted-foreground">
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Clock className="mt-0.5 size-5 text-brand" />
                <span className="sr-only">Hours</span>
              </dt>
              <dd>
                <p className="font-semibold">{site.hours.days}</p>
                <p className="text-muted-foreground">
                  {site.hours.time} · Closed Friday – Sunday
                </p>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Phone className="mt-0.5 size-5 text-brand" />
                <span className="sr-only">Phone</span>
              </dt>
              <dd>
                <a
                  href={site.phoneHref}
                  className="font-semibold hover:underline"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Mail className="mt-0.5 size-5 text-brand" />
                <span className="sr-only">Email</span>
              </dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={site.links.directions}
            className={cn(buttonVariants({ size: "cta" }), "mt-8")}
          >
            Get directions
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <iframe
            title={`Map showing ${site.name} at ${site.address.street}`}
            src={site.links.mapEmbed}
            className="aspect-[4/3] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
