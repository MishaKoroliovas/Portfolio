export type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  responsibilities: string[];
};

// TODO: Replace placeholder roles with real experience and measurable impact.
export const experience: ExperienceItem[] = [
  {
    company: "TODO: Managed Service Provider",
    title: "IT Support Analyst",
    dates: "TODO: 2024 - Present",
    responsibilities: [
      "Triaged endpoint, identity, and network issues across Windows and cloud environments.",
      "Documented repeatable fixes and escalation notes for recurring service desk incidents.",
      "Supported patching, account security, and vulnerability remediation workflows.",
    ],
  },
  {
    company: "TODO: Security Lab",
    title: "Cybersecurity Trainee",
    dates: "TODO: 2023 - 2024",
    responsibilities: [
      "Completed guided penetration testing labs covering enumeration and privilege escalation.",
      "Built detection notes from sample logs and mapped behaviors to MITRE ATT&CK techniques.",
      "Practiced report writing with findings, evidence, risk ratings, and remediation steps.",
    ],
  },
];
