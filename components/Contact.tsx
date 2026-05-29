"use client";

import { FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { contactContent, personalInfo, socials } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(contactContent.formSuccess);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Connect</p>
          <h2>Contact</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded border border-zinc-800 bg-zinc-950/70 p-4 sm:p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-zinc-300">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded border border-zinc-800 bg-black px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-[#00FF9C]/70"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm text-zinc-300">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded border border-zinc-800 bg-black px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-[#00FF9C]/70"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-zinc-300">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded border border-zinc-800 bg-black px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-[#00FF9C]/70"
                placeholder="Tell me about the role, project, or security challenge."
              />
            </label>
            <button
              type="submit"
              className="mt-5 w-full rounded border border-[#00FF9C]/60 bg-[#00FF9C] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,255,156,0.35)] sm:w-auto sm:py-3 sm:tracking-[0.18em]"
            >
              Send Message
            </button>
            {status ? (
              <p className="mt-4 text-sm text-[#00FF9C]" role="status">
                {status}
              </p>
            ) : null}
          </form>

          <aside className="rounded border border-zinc-800 bg-zinc-950/70 p-4 sm:p-5">
            <h3 className="mobile-safe-text font-mono text-lg font-semibold text-white sm:text-xl">
              {contactContent.heading}
            </h3>
            <p className="mt-4 leading-7 text-zinc-400">
              {contactContent.body}
            </p>
            <div className="mt-6 grid gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-between rounded border border-zinc-800 px-4 py-3 text-zinc-200 transition hover:border-[#00FF9C]/60 hover:text-[#00FF9C]"
                >
                  <span>{social.label}</span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
            <a
              href={personalInfo.cvUrl}
              className="mt-6 inline-flex rounded border border-[#00FF9C]/50 px-4 py-3 text-sm font-semibold text-[#00FF9C] transition hover:bg-[#00FF9C] hover:text-black"
            >
              Download CV
            </a>
          </aside>
        </div>
      </SectionReveal>
    </section>
  );
}
