import SectionReveal from "@/components/SectionReveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Learning</p>
          <h2>Education</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.qualification}`}
              className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-[#00FF9C]/50"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00FF9C]">
                {item.dates}
              </p>
              <h3 className="mt-4 font-mono text-xl font-semibold text-white">
                {item.qualification}
              </h3>
              <p className="mt-2 text-zinc-300">{item.institution}</p>
              <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
