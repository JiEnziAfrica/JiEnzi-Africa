import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LinkButton } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";

const philosophySteps = [
  {
    number: "01",
    title: "Reflection",
    description:
      "Make space to understand yourself, your values, and the direction you want to take.",
  },
  {
    number: "02",
    title: "Proactivity",
    description:
      "Turn awareness into initiative, learning, and purposeful next steps.",
  },
  {
    number: "03",
    title: "Intentionality",
    description:
      "Align choices and effort with the person and future you want to build.",
  },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            About JiEnzi Africa
          </p>
          <h2
            id="about-heading"
            className="text-balance font-extrabold"
          >
            Opportunity matters. So does the capacity to act on it.
          </h2>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
            JiEnzi Africa is a values-driven social enterprise creating learning,
            mentorship, and opportunity platforms that help young people build
            inner capacity, clarity, and purpose.
          </p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
            It grew from a simple observation: access to opportunity alone does
            not guarantee progress. Young people also need room to understand
            themselves, navigate what is in front of them, and choose their next
            steps with intention.
          </p>

          <div className="mt-8 border-l-[3px] border-[var(--color-brand-yellow)] pl-5">
            <p className="text-sm font-semibold leading-6 text-[var(--color-ink)] sm:text-base">
              For young Africans growing into leadership, work, enterprise, and
              the possibilities they choose for themselves.
            </p>
          </div>

          <LinkButton
            href="#our-philosophy"
            variant="secondary"
            className="mt-6 min-h-11 px-4 text-sm"
          >
            The JiEnzi philosophy
          </LinkButton>
        </div>

        <figure className="mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper)]">
            <Image
              src={assetPath("/images/editorial/benin-mask-reference.png")}
              alt="Black-and-white typographic study featuring a Benin mask, yellow letterforms, and accompanying historical notes."
              fill
              sizes="(min-width: 1024px) 40vw, 88vw"
              className="photo-drift photo-drift--editorial object-cover"
            />
          </div>
        </figure>
      </Container>
    </Section>
  );
}

export function PhilosophySection() {
  return (
    <Section
      id="our-philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-24 bg-[var(--color-deep)] text-[var(--color-deep-foreground)]"
    >
      <Container>
        <div className="philosophy-layout">
          <div className="philosophy-content">
            <div className="philosophy-intro">
              <div className="philosophy-intro__copy">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand-yellow)]">
                  How we grow
                </p>
                <h2
                  id="philosophy-heading"
                  className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
                >
                  Growth is a practice, not a shortcut.
                </h2>
              </div>
            </div>

            <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
              {philosophySteps.map((step) => (
                <li
                  key={step.number}
                  className="border-t border-[var(--color-deep-border)] pt-5 sm:pt-6"
                >
                  <p className="text-sm font-bold text-[var(--color-brand-yellow)]">
                    {step.number}
                  </p>
                  <h3 className="mt-3 font-bold">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-deep-muted)] sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="philosophy-cycle">
            <Image
              src={assetPath("/images/philosophy-cycle.png")}
              alt="Circular cycle illustration with a target, gear, and note connected by arrows."
              fill
              sizes="(min-width: 768px) 18vw, 22vw"
              className="philosophy-cycle__image"
            />
          </figure>
        </div>
      </Container>
    </Section>
  );
}
