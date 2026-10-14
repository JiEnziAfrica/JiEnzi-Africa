import Image from "next/image";

import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/ui/button";
import { assetPath } from "@/lib/assets";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-background-rule" aria-hidden="true">
        <span className="hero-background-rule__track" />
        <span className="hero-background-rule__segment" />
      </div>

      <Container className="relative z-10 grid items-center gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-12">
        <div className="max-w-xl">
          <p className="hero-copy-reveal mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-muted)] sm:mb-5 sm:text-xs">
            Reflect. Act. Grow.
          </p>

          <h1 className="hero-heading-reveal text-balance font-[var(--font-body)] font-extrabold text-[var(--color-ink)]">
            <span className="block">A Generation</span>
            <span className="block text-[var(--color-brand-yellow)]">
              Built to Grow.
            </span>
          </h1>

          <p className="hero-copy-reveal hero-copy-reveal-delay mt-4 max-w-lg text-pretty text-[0.9375rem] leading-6 text-[var(--color-muted)] sm:mt-5 sm:text-base sm:leading-7">
            JiEnzi Africa is a youth-centered community inspiring young people
            to discover their potential, take meaningful action, and grow with
            purpose.
          </p>

          <div className="hero-copy-reveal hero-copy-reveal-delay mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-7">
            <LinkButton
              href="#our-philosophy"
              className="min-h-11 px-5 text-[0.8125rem] sm:min-h-12 sm:px-6 sm:text-sm"
            >
              Explore our philosophy
            </LinkButton>
          </div>

          <div
            className="hero-copy-reveal hero-copy-reveal-delay mt-6 border-t border-[var(--color-border)] pt-3 sm:mt-9 sm:pt-4"
          >
            <p className="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)] sm:mb-2 sm:text-xs">
              Our philosophy
            </p>
            <p className="text-[0.8125rem] font-semibold text-[var(--color-ink)] sm:text-base">
              Reflection
              <span className="px-2 text-[var(--color-brand-yellow)]">→</span>
              Proactivity
              <span className="px-2 text-[var(--color-brand-yellow)]">→</span>
              Intentionality
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <figure>
            <div className="hero-image-reveal relative aspect-[16/10] max-h-48 overflow-hidden border-r-4 border-t-4 border-[var(--color-brand-yellow)] bg-[var(--color-surface)] sm:max-h-[22rem] sm:border-r-8 sm:border-t-8 lg:aspect-[5/4] lg:max-h-none">
              <Image
                src={assetPath("/images/hero/community-concept.png")}
                alt="Young people sharing ideas in a group conversation."
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="photo-drift photo-drift--hero object-cover"
              />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
