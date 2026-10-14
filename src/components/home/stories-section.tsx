import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { assetPath } from "@/lib/assets";

export function StoriesSection() {
  return (
    <Section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Stories &amp; reflections
          </p>
          <h2
            id="stories-heading"
            className="max-w-xl text-balance font-extrabold"
          >
            Real experience. Room to reflect.
          </h2>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
            JiEnzi Africa creates space for storytelling and dialogue that
            connects experience with reflection and action.
          </p>
          <figure className="stories-visual">
            <Image
              src={assetPath("/images/stories-conversation.jpg")}
              alt="Three young women sharing a lively conversation on outdoor steps."
              fill
              sizes="(min-width: 1024px) 450px, (min-width: 640px) 540px, 92vw"
              className="photo-drift photo-drift--detail object-cover"
            />
          </figure>
        </div>

        <div className="lg:self-center">
          <blockquote className="border-l-[3px] border-[var(--color-brand-yellow)] pl-5 sm:pl-7">
            <p className="text-pretty text-lg font-bold leading-snug text-[var(--color-ink)] sm:text-xl lg:text-2xl">
              “We become who we are by what we choose, and what we are willing
              to let go.”
            </p>
            <footer className="mt-5 text-xs font-semibold leading-5 text-[var(--color-muted)] sm:text-sm">
              From JiEnzi Africa&apos;s supplied #SOAR quote artwork.
            </footer>
          </blockquote>

          <div className="mt-8 border-t border-[var(--color-border)] pt-5">
            <p className="text-sm font-bold text-[var(--color-ink)] sm:text-base">
              The JiEnzi Africa Podcast
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
              Its stated purpose is to use stories and dialogue to shift
              mindsets. Approved episode links and first-person stories were
              not included in the materials for this build, so none are
              presented as published here.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
