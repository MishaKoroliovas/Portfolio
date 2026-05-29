export type ProjectCategory = "Offensive" | "Defensive" | "Tools";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
};

// TODO: Replace placeholder projects with real repositories, demos, and outcomes.
export const projects: Project[] = [
  {
    title: "TODO: Web Application Penetration Test Lab",
    description:
      "A documented lab assessment covering reconnaissance, vulnerability validation, exploitation notes, and remediation guidance.",
    category: "Offensive",
    tags: ["CTF", "Penetration Testing", "Web Security"],
    githubUrl: "https://github.com/your-username/web-pentest-lab",
    demoUrl: "#",
  },
  {
    title: "TODO: Home SOC Detection Stack",
    description:
      "A defensive lab with endpoint logs, Splunk dashboards, alert triage notes, and simulated attack telemetry.",
    category: "Defensive",
    tags: ["Blue Team", "Splunk", "Detection Engineering"],
    githubUrl: "https://github.com/your-username/home-soc-lab",
    demoUrl: "#",
  },
  {
    title: "TODO: Python Recon Automation Toolkit",
    description:
      "A lightweight toolkit for target inventory, service discovery parsing, and repeatable engagement notes.",
    category: "Tools",
    tags: ["Python", "Nmap", "Automation"],
    githubUrl: "https://github.com/your-username/recon-toolkit",
    demoUrl: "#",
  },
];
