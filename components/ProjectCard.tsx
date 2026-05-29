import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded border border-zinc-800 bg-zinc-950/70 p-4 transition hover:-translate-y-1 hover:border-[#00FF9C]/50 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded border border-[#00FF9C]/30 bg-[#00FF9C]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#00FF9C]">
          {project.category}
        </span>
        <span className="font-mono text-xs text-zinc-600">PROJECT</span>
      </div>

      <h3 className="mobile-safe-text mt-5 font-mono text-lg font-semibold text-white sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-zinc-700 px-3 py-2.5 text-center text-sm text-zinc-200 transition hover:border-[#00FF9C]/60 hover:text-[#00FF9C]"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          className="rounded border border-zinc-700 px-3 py-2.5 text-center text-sm text-zinc-200 transition hover:border-[#00FF9C]/60 hover:text-[#00FF9C]"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
