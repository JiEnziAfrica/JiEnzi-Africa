"use client";

import type { FormEvent } from "react";

const contactEmail = "jienziafrica@gmail.com";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Reply email: ${email}`, "", message].join(
      "\n",
    );

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__fields">
        <div className="contact-form__field">
          <label htmlFor="contact-name">Your name</label>
          <input autoComplete="name" id="contact-name" name="name" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-email">Your email</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" required />
        </div>
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} required />
        </div>
      </div>
      <button className="contact-form__submit" type="submit">
        Prepare email <span aria-hidden="true">&rarr;</span>
      </button>
      <p className="contact-form__note">
        Your email app will open with your message addressed to JiEnzi Africa.
      </p>
    </form>
  );
}
