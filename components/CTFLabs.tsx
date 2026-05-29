import SectionReveal from "@/components/SectionReveal";
import { ctfLabs } from "@/data/site";

export default function CTFLabs() {
  return (
    <section id="ctf-labs" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Hands-on Practice</p>
          <h2>CTF & Labs</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ctfLabs.map((lab) => (
            <article
              key={lab.platform}
              className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-[#00FF9C]/50"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-16 place-items-center rounded border border-[#00FF9C]/35 bg-[#00FF9C]/10 font-mono font-bold text-[#00FF9C]">
                  {lab.badge}
                </div>
                <span className="rounded border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
                  {lab.rank}
                </span>
              </div>
              <h3 className="mt-5 font-mono text-xl font-semibold text-white">
                {lab.platform}
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">{lab.summary}</p>
              <a
                href={lab.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-[#00FF9C]/60 hover:text-[#00FF9C]"
              >
                View Profile
              </a>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
