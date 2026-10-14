import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { assetPath } from "@/lib/assets";

const focusAreas = [
  "Self-mastery, leadership, and strategic development",
  "Work readiness and opportunity pathways",
  "Enterprise and business development",
];

const initiatives = [
  {
    number: "01",
    name: "JiEnzi Skates",
    descriptor: "Growth in Motion",
    description:
      "A youth engagement club using skating as an experiential entry point to guided challenges, progressive skill-building, and personal growth.",
    visual: "skates",
  },
  {
    number: "02",
    name: "JiEnzi Africa Podcast",
    descriptor: "Stories that Shift Mindsets",
    description:
      "Storytelling and dialogue connect real experiences with reflection, practical learning, and ideas for action.",
    visual: "podcast",
  },
  {
    number: "03",
    name: "JiEnzi Opportunity Expos",
    descriptor: "Pathways to Possibility",
    description:
      "A platform designed to connect young people with mentors, opportunities, and pathways for their next steps.",
    visual: "expo",
  },
] as const;

type InitiativeVisualType = "skates" | "podcast" | "expo";

function InitiativePhoto({
  src,
  alt,
  photographer,
  photoUrl,
}: {
  src: string;
  alt: string;
  photographer: string;
  photoUrl: string;
}) {
  return (
    <figure className="initiative-visual">
      <div className="initiative-visual__canvas initiative-visual__canvas--photo">
        <Image
          src={assetPath(src)}
          alt={alt}
          fill
          sizes="(min-width: 768px) 29vw, 90vw"
          className="photo-drift photo-drift--detail object-cover object-center"
        />
      </div>
      <figcaption className="initiative-visual__caption">
        Reference photo ·{" "}
        <a
          className="font-semibold text-[var(--color-ink)] underline underline-offset-2"
          href={photoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {photographer} / Pexels
        </a>
        .
      </figcaption>
    </figure>
  );
}

function InitiativeVisual({ type }: { type: InitiativeVisualType }) {
  if (type === "skates") {
    return (
      <figure className="initiative-visual">
        <div className="initiative-visual__canvas initiative-visual__canvas--photo">
          <Image
            src={assetPath("/images/hero/skates-coaching.png")}
            alt="A coach guides a young participant during a JiEnzi Skates practice."
            fill
            sizes="(min-width: 768px) 29vw, 90vw"
            className="photo-drift photo-drift--detail object-cover object-top"
          />
          <span className="initiative-visual__image-label">JiEnzi Skates</span>
        </div>
        <figcaption className="initiative-visual__caption">
          A JiEnzi Skates coaching session.
        </figcaption>
      </figure>
    );
  }

  if (type === "podcast") {
    return (
      <InitiativePhoto
        src="/images/initiatives/podcast-recording.jpg"
        alt="A young man speaking into a microphone in a recording studio."
        photographer="Ben Khatry"
        photoUrl="https://www.pexels.com/photo/young-man-engaging-in-a-podcast-recording-36917949/"
      />
    );
  }

  return (
    <InitiativePhoto
      src="/images/initiatives/opportunity-expo.jpg"
      alt="A woman listening at a conference, with other attendees behind her."
      photographer="Daniel Samson"
      photoUrl="https://www.pexels.com/photo/attentive-audience-member-at-conference-event-32315949/"
    />
  );
}

export function WhatWeDoSection() {
  return (
    <Section
      id="what-we-do"
      aria-labelledby="work-heading"
      className="work-section relative isolate scroll-mt-24 overflow-hidden bg-[var(--color-paper)]"
    >
      <div className="work-section__pattern" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              What we do
            </p>
            <h2
              id="work-heading"
              className="text-balance font-extrabold"
            >
              Put growth into practice.
            </h2>
          </div>
          <p className="max-w-2xl text-[0.9375rem] leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
            JiEnzi works with young people, professionals, and institutions
            through platforms for personal development, work readiness, and
            enterprise growth.
          </p>
        </div>

        <div className="mt-10 grid border-y border-[var(--color-border)] sm:mt-12 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div
              key={area}
              className="border-b border-[var(--color-border)] py-5 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="text-xs font-bold text-[var(--color-brand-yellow)]">
                0{index + 1}
              </p>
              <p className="mt-2 max-w-xs text-[0.9375rem] font-semibold leading-6 text-[var(--color-ink)] sm:text-base">
                {area}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h3 className="font-bold">Platforms for progress</h3>
            <p className="max-w-lg text-sm leading-6 text-[var(--color-muted)] sm:text-base">
              Different ways in. One shared commitment to intentional growth.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3 md:gap-6">
            {initiatives.map((initiative) => (
              <article
                key={initiative.number}
                className="initiative-item border-t-2 border-[var(--color-ink)] pt-5"
              >
                <p className="text-xs font-bold text-[var(--color-brand-yellow)]">
                  {initiative.number}
                </p>
                <InitiativeVisual type={initiative.visual} />
                <h4 className="mt-3 font-bold">
                  {initiative.name}
                </h4>
                <p className="mt-1 text-sm font-semibold text-[var(--color-muted)]">
                  {initiative.descriptor}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
                  {initiative.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
