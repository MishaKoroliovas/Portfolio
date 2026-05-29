"use client";

import { useMemo, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter, {
  ProjectFilterValue,
} from "@/components/ProjectFilter";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <SectionReveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="section-heading mb-0">
            <p className="section-kicker">Portfolio</p>
            <h2>Projects</h2>
          </div>
          <ProjectFilter
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
