import SectionReveal from "@/components/SectionReveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Capabilities</p>
          <h2>Skills</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:border-[#00FF9C]/50"
            >
              <h3 className="font-mono text-lg font-semibold text-white">
                {category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-200 transition hover:border-[#00FF9C]/50 hover:text-[#00FF9C]"
                  >
                    <span className="grid size-7 place-items-center rounded bg-[#00FF9C]/10 font-mono text-[0.65rem] font-bold text-[#00FF9C]">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
