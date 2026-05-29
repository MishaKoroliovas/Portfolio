import { navLinks, personalInfo, socials } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <div className="mobile-safe-text font-mono text-lg font-bold text-white">
            {personalInfo.name}
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            Copyright {year}. Built with React + Tailwind.
          </p>
        </div>

        <div className="space-y-6 lg:text-right">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:justify-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded border border-zinc-900 px-3 py-2 text-center text-sm text-zinc-400 transition hover:text-[#00FF9C] sm:border-0 sm:px-0 sm:py-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="grid size-10 place-items-center rounded border border-zinc-800 font-mono text-xs text-zinc-400 transition hover:border-[#00FF9C]/50 hover:text-[#00FF9C]"
                aria-label={social.label}
              >
                {social.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
