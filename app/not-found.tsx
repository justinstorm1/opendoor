import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-brand uppercase">
        Page not found
      </p>
      <h1 className="mt-3 text-4xl font-semibold">
        Sorry, we couldn&apos;t find that page.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        It may have moved when we updated our website.
      </p>
      <Link href="/" className={`${buttonVariants({ size: "cta" })} mt-8`}>
        Back to home
      </Link>
    </section>
  )
}
