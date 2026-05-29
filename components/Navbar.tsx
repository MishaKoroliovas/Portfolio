"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/site";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/10 bg-[#050807]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 font-mono text-sm font-semibold tracking-[0.2em] text-zinc-100"
          onClick={closeMenu}
        >
          <span className="grid size-10 place-items-center rounded border border-[#00FF9C]/50 bg-[#00FF9C]/10 text-[#00FF9C] shadow-[0_0_28px_rgba(0,255,156,0.18)]">
            {personalInfo.initials}
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded px-3 py-2 text-sm transition ${
                activeHref === link.href
                  ? "bg-[#00FF9C]/10 text-[#00FF9C]"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded border border-[#00FF9C]/50 bg-[#00FF9C] px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(0,255,156,0.32)]"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded border border-zinc-700 text-zinc-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <button
        type="button"
        aria-label="Close navigation menu"
        className={`fixed inset-0 top-16 bg-black/55 transition lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none hidden translate-x-full opacity-0"
        } fixed right-0 top-16 h-[calc(100svh-4rem)] w-full max-w-sm overflow-y-auto border-l border-emerald-300/10 bg-[#07100d] p-4 shadow-2xl transition sm:w-80 sm:p-5`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`rounded px-3 py-3.5 text-base transition ${
                activeHref === link.href
                  ? "bg-[#00FF9C]/10 text-[#00FF9C]"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 rounded border border-[#00FF9C]/50 bg-[#00FF9C] px-4 py-3.5 text-center text-sm font-semibold text-black"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
