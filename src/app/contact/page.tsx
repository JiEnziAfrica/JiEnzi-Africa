import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with JiEnzi Africa.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-page" aria-labelledby="contact-heading">
        <div className="contact-page__intro">
          <Container>
            <p className="contact-page__eyebrow">JiEnzi Africa / Contact</p>
            <h1 id="contact-heading">
              Let&apos;s talk<span>.</span>
            </h1>
            <p>
              Have a question, an idea, or a way you&apos;d like to work
              together? Start a conversation.
            </p>
          </Container>
        </div>

        <div className="contact-page__content">
          <Container className="contact-page__grid">
            <div>
              <p className="contact-page__section-label">Send us a message</p>
              <h2>What would you like to talk about?</h2>
              <ContactForm />
            </div>

            <aside
              className="contact-page__details"
              aria-labelledby="contact-details-heading"
            >
              <p className="contact-page__section-label">Get in touch</p>
              <h2 id="contact-details-heading">We&apos;re listening.</h2>
              <p>
                For questions, partnerships, volunteering, or other enquiries,
                email JiEnzi Africa directly.
              </p>
              <a href="mailto:jienziafrica@gmail.com">
                <span aria-hidden="true">@</span>
                jienziafrica@gmail.com
              </a>
            </aside>
          </Container>
        </div>
      </section>
    </SiteShell>
  );
}
