import Image from "next/image"

import apple from "@/public/images/apple-outline.png"

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <Image
        src={apple}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-10 w-[34rem] max-w-none opacity-15 select-none"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-wide text-white/75 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {children && (
        <div className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  )
}
