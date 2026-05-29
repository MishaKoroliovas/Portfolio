import SectionReveal from "@/components/SectionReveal";
import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Work History</p>
          <h2>Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-zinc-800 sm:left-4 md:left-1/2" />
          <div className="space-y-6 sm:space-y-8">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.title}`}
                className={`relative grid gap-5 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                }`}
              >
                <div className="ml-8 rounded border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-[#00FF9C]/50 sm:ml-12 sm:p-5 md:ml-0">
                  <span className="mobile-safe-text font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#00FF9C] sm:text-xs sm:tracking-[0.2em]">
                    {item.dates}
                  </span>
                  <h3 className="mobile-safe-text mt-3 font-mono text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mobile-safe-text mt-1 text-zinc-400">
                    {item.company}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#00FF9C]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="absolute left-3 top-6 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-[#00FF9C]/50 bg-[#050807] sm:left-4 sm:size-8 md:left-1/2">
                  <span className="size-2 rounded-full bg-[#00FF9C]" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
