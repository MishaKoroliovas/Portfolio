import SectionReveal from "@/components/SectionReveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-kicker">Credentials</p>
          <h2>Certifications</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="rounded border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-[#00FF9C]/50"
            >
              <div className="grid size-14 place-items-center rounded border border-[#00FF9C]/35 bg-[#00FF9C]/10 font-mono text-sm font-bold text-[#00FF9C]">
                {cert.badge}
              </div>
              <h3 className="mt-5 font-mono text-lg font-semibold text-white">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{cert.issuer}</p>
              <p className="mt-4 inline-flex rounded border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-500">
                {cert.date}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
