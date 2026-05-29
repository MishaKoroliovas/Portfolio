import { heroTerminal, personalInfo } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="cyber-grid absolute inset-0 -z-20" />
      <div className="scanline absolute inset-0 -z-10 opacity-40" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00FF9C]/10 sm:h-[36rem] sm:w-[36rem]" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 py-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#00FF9C] sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
            Security Portfolio
          </p>
          <h1 className="mobile-safe-text font-mono text-[clamp(2.4rem,13vw,4rem)] font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mobile-safe-text mt-4 font-mono text-lg leading-7 text-zinc-200 sm:mt-5 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="rounded border border-[#00FF9C]/60 bg-[#00FF9C] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,255,156,0.35)] sm:px-6 sm:py-3 sm:tracking-[0.18em]"
            >
              View My Work
            </a>
            <a
              href={personalInfo.cvUrl}
              className="rounded border border-zinc-700 px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-zinc-100 transition hover:-translate-y-1 hover:border-[#00FF9C]/60 hover:text-[#00FF9C] sm:px-6 sm:py-3 sm:tracking-[0.18em]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative min-h-72 w-full max-w-full overflow-hidden rounded border border-[#00FF9C]/20 bg-black/60 p-4 shadow-[0_0_60px_rgba(0,255,156,0.08)] sm:min-h-80 sm:p-5">
          <div className="mb-4 flex min-w-0 items-center gap-2 border-b border-zinc-800 pb-4">
            <span className="size-3 rounded-full bg-red-500" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-[#00FF9C]" />
            <span className="mobile-safe-text ml-2 min-w-0 font-mono text-[0.68rem] text-zinc-500 sm:ml-3 sm:text-xs">
              {heroTerminal.path}
            </span>
          </div>
          <div className="space-y-4 font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {heroTerminal.lines.map((line) => (
              <div key={line.command} className="space-y-4">
                <p className="mobile-safe-text">
                  <span className="text-[#00FF9C]">$</span> {line.command}
                </p>
                <p
                  className={`mobile-safe-text ${
                    line.command === "status"
                      ? "text-[#00FF9C]"
                      : "text-zinc-100"
                  }`}
                >
                  {line.output}
                </p>
              </div>
            ))}
            <p className="terminal-cursor mobile-safe-text text-zinc-500">
              {heroTerminal.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
