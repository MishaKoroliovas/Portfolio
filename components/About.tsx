import SectionReveal from "@/components/SectionReveal";
import { about, personalInfo } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Profile</p>
          <h2>About Me</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded border border-[#00FF9C]/20 bg-zinc-950/70 p-6">
            <div className="mx-auto grid aspect-square max-w-xs place-items-center rounded border border-dashed border-[#00FF9C]/35 bg-[#00FF9C]/5">
              <div className="text-center">
                <div className="mx-auto grid size-28 place-items-center rounded-full border border-[#00FF9C]/50 bg-black font-mono text-3xl font-bold text-[#00FF9C] shadow-[0_0_34px_rgba(0,255,156,0.16)]">
                  {personalInfo.initials}
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {about.profilePhotoLabel}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-300">{about.bio}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:border-[#00FF9C]/50"
                >
                  <div className="font-mono text-3xl font-bold text-[#00FF9C]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
