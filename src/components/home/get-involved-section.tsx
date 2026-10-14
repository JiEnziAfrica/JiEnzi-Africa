"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { assetPath } from "@/lib/assets";

const pathways = [
  {
    number: "01",
    title: "Join an experience",
    description:
      "Explore JiEnzi's activities and community programs, then choose a starting point.",
    action: "Explore initiatives",
    href: "#what-we-do",
    external: false,
  },
  {
    number: "02",
    title: "Volunteer or contribute",
    description:
      "Have time, skills, or ideas to share? Ask JiEnzi what support is useful.",
    action: "Ask about contributing",
    href: "https://wa.me/message/RZYQSERL4YOZK1",
    external: true,
  },
  {
    number: "03",
    title: "Collaborate or partner",
    description:
      "Interested in building something together? Start a conversation about a possible collaboration.",
    action: "Discuss a collaboration",
    href: "https://wa.me/message/RZYQSERL4YOZK1",
    external: true,
  },
] as const;

export function GetInvolvedSection() {
  useEffect(() => {
    const section = document.getElementById("get-involved");
    if (
      !section ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = Array.from(
      section.querySelectorAll<HTMLElement>("[data-involved-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -5% 0px" },
    );

    section.setAttribute("data-reveal-ready", "true");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="get-involved"
      aria-labelledby="involved-heading"
      className="get-involved scroll-mt-24"
    >
      <div className="get-involved__opening">
        <Container>
          <div className="get-involved__opening-grid">
            <div data-involved-reveal>
              <p className="get-involved__eyebrow">
                JiEnzi Africa <span>/</span> Get involved
              </p>
              <h2 id="involved-heading" className="get-involved__headline">
                <span>Don&apos;t just watch.</span>
                <span className="get-involved__headline-accent">
                  Be part of it.
                </span>
              </h2>
              <p className="get-involved__intro-copy">
                Good things happen when people come together. Find your place
                in the JiEnzi community.
              </p>
              <a
                className="get-involved__jump-link"
                href="#participation-pathways"
              >
                Find your way in <span aria-hidden="true">&darr;</span>
              </a>
            </div>

            <div className="get-involved__hero-media" data-involved-reveal>
              <figure className="get-involved__hero-visual">
                <div className="get-involved__hero-photo">
                  <Image
                    src={assetPath("/images/hero/skates-community.png")}
                    alt="A JiEnzi Skates coach guides two young participants during practice."
                    fill
                    sizes="(min-width: 1024px) 46vw, (min-width: 640px) 82vw, 92vw"
                    className="get-involved__hero-image photo-drift photo-drift--hero object-cover"
                  />
                </div>
                <figcaption className="get-involved__hero-label">
                  <span>JiEnzi Skates</span>
                  <span>One way to join</span>
                </figcaption>
              </figure>
              <a
                className="get-involved__skates-registration"
                href="https://forms.gle/v6ZPcc9CPPGixE587"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for JiEnzi Skates
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="participation-pathways"
        className="get-involved__pathways scroll-mt-24"
        aria-labelledby="pathways-heading"
      >
        <Container>
          <div className="get-involved__pathways-layout">
            <div className="get-involved__pathways-content">
              <div className="get-involved__pathways-heading" data-involved-reveal>
                <p className="get-involved__section-label">
                  There&apos;s more than one way in
                </p>
                <h3 id="pathways-heading">
                  Bring what you have.<br />
                  Begin where you are.
                </h3>
              </div>

              <ol className="get-involved__pathway-list">
                {pathways.map((pathway) => (
                  <li
                    className="get-involved__pathway"
                    key={pathway.number}
                    data-involved-reveal
                  >
                    <span className="get-involved__pathway-number">
                      {pathway.number}
                    </span>
                    <div className="get-involved__pathway-content">
                      <h4>
                        <a
                          className="get-involved__pathway-link"
                          href={pathway.href}
                          {...(pathway.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          <span className="get-involved__pathway-title">
                            {pathway.title}
                          </span>
                          <span className="get-involved__pathway-action">
                            {pathway.action}
                            <span aria-hidden="true">&rarr;</span>
                          </span>
                        </a>
                      </h4>
                      <p>{pathway.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="get-involved__visual" data-involved-reveal>
              <div className="get-involved__visual-frame">
                <Image
                  src={assetPath("/images/community-volunteers.jpg")}
                  alt="Young volunteers working together to organize donated supplies."
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 88vw"
                  className="photo-drift photo-drift--detail get-involved__visual-image object-cover"
                />
              </div>
            </figure>
          </div>
        </Container>
      </div>

      <footer className="ji-footer">
        <div className="ji-footer__invitation">
          <Container className="ji-footer__invitation-inner">
            <div>
              <p>Reflection &rarr; Proactivity &rarr; Intentionality</p>
              <h3>Your next chapter starts with a step.</h3>
            </div>
              <Link className="get-involved__talk-link" href="/contact">
                Let&apos;s Talk <span aria-hidden="true">&rarr;</span>
              </Link>
          </Container>
        </div>
        <Container>
          <div className="ji-footer__grid">
            <div className="ji-footer__brand">
              <Link href="/" aria-label="JiEnzi Africa home">
                <BrandMark className="ji-footer__logo" />
              </Link>
              <p>A community for young Africans to reflect, take action, and grow with purpose.</p>
            </div>
            <nav aria-label="Footer navigation">
              <h4>Explore</h4>
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#what-we-do">What We Do</Link>
              <Link href="/#stories">Stories</Link>
              <Link href="/#get-involved">Get Involved</Link>
            </nav>
            <nav aria-label="Footer initiatives">
              <h4>Our Platforms</h4>
              <Link href="/#what-we-do">JiEnzi Skates</Link>
              <Link href="/#what-we-do">Africa Podcast</Link>
              <Link href="/#what-we-do">Opportunity Expos</Link>
              <a href="https://forms.gle/v6ZPcc9CPPGixE587" target="_blank" rel="noopener noreferrer">Skates registration &#8599;</a>
            </nav>
            <div className="ji-footer__contact">
              <h4>Get In Touch</h4>
              <a
                href="mailto:jienziafrica@gmail.com"
              >
                jienziafrica@gmail.com
              </a>
              <a href="tel:+254701803323">+254 701 803 323 <span className="ji-footer__phone-label">Skates enquiries</span></a>
            <div className="get-involved__contact-links">
              <a
                className="get-involved__whatsapp-link"
                href="https://wa.me/message/RZYQSERL4YOZK1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="get-involved__social-icon get-involved__social-icon--whatsapp"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.5c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6 0 .5-.2 1.1-.6 1.4-.5.5-1.2.7-1.9.6-1.1-.2-2.5-.8-3.9-2-1.1-.9-2.1-2.2-2.5-3.2-.4-.9-.4-1.8.3-2.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="get-involved__instagram-link"
                href="https://www.instagram.com/jienzi_africa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="get-involved__social-icon get-involved__social-icon--instagram"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3.25"
                      y="3.25"
                      width="17.5"
                      height="17.5"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17.7" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                </span>
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
            </div>
          </div>
          <div className="ji-footer__bottom">
            <p>&copy; 2026 JiEnzi Africa. All rights reserved.</p>
            <a href="#main-content">Back to top &uarr;</a>
          </div>
        </Container>
      </footer>
    </section>
  );
}
