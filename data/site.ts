export const personalInfo = {
  // TODO: Replace with the real portfolio owner name.
  name: "Misha Koroliov",
  initials: "AM",
  // TODO: Replace with the target role/title.
  title: "IT | Networking / Security",
  // TODO: Replace with a real one-line personal tagline.
  tagline:
    "Building resilient systems by thinking like an attacker and defending like an engineer.",
  location: "United Kingdom",
  email: "alex.morgan@example.com",
  cvUrl: "/cv-placeholder.pdf",
};

export const heroTerminal = {
  path: "/usr/local/security_profile",
  lines: [
    { command: "whoami", output: personalInfo.title },
    {
      command: "focus --current",
      output: "penetration-testing | detection-engineering | secure-systems",
    },
    { command: "status", output: "available_for_security_projects" },
  ],
  status: "awaiting_next_engagement",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Labs", href: "#ctf-labs" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  // TODO: Replace this placeholder bio with the real professional summary.
  bio: "TODO: Add a concise bio covering IT background, security interests, current focus areas, and the kind of work you want to do next.",
  // TODO: Replace this label when a real profile photo is added.
  profilePhotoLabel: "Profile Photo TODO",
  stats: [
    // TODO: Replace with accurate numbers.
    { label: "Years Experience", value: "3+" },
    { label: "Certifications", value: "5" },
    { label: "Projects Completed", value: "12" },
  ],
};

export const socials = [
  // TODO: Replace placeholder social profile URLs.
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "Twitter/X", href: "https://x.com/your-handle" },
  { label: "Email", href: `mailto:${personalInfo.email}` },
];

export const contactContent = {
  // TODO: Replace with real contact positioning copy.
  heading: "Security opportunities, lab feedback, and collaboration.",
  // TODO: Replace when the contact form is connected to a real backend.
  body: "Use the form or connect through a profile link. The CV button is a placeholder for V1.",
  formSuccess:
    "Message captured in the frontend demo. Connect a backend in V2.",
};

export const ctfLabs = [
  // TODO: Replace platform links, ranks, and badges with real profile data.
  {
    platform: "HackTheBox",
    rank: "Hacker",
    badge: "HTB",
    profileUrl: "https://www.hackthebox.com/",
    summary: "Active Directory labs, web exploitation, and privilege escalation practice.",
  },
  {
    platform: "TryHackMe",
    rank: "Top 5%",
    badge: "THM",
    profileUrl: "https://tryhackme.com/",
    summary: "Blue team rooms, SOC analysis, and guided penetration testing paths.",
  },
  {
    platform: "PicoCTF",
    rank: "Competitor",
    badge: "PCTF",
    profileUrl: "https://picoctf.org/",
    summary: "Cryptography, forensics, reverse engineering, and web challenges.",
  },
];

export const blogPosts = [
  // TODO: Replace with real write-ups when the blog is implemented.
  {
    title: "TODO: Web App Recon Workflow",
    excerpt:
      "Placeholder write-up covering scope review, passive discovery, active enumeration, and notes hygiene.",
    date: "2026-01-15",
    tags: ["Recon", "Web", "Methodology"],
  },
  {
    title: "TODO: Splunk Detection Lab Notes",
    excerpt:
      "Placeholder notes for building detections around suspicious PowerShell and endpoint telemetry.",
    date: "2026-02-08",
    tags: ["Blue Team", "Splunk", "Detection"],
  },
  {
    title: "TODO: Privilege Escalation Checklist",
    excerpt:
      "Placeholder checklist for Linux enumeration, misconfigurations, and evidence capture.",
    date: "2026-03-21",
    tags: ["Linux", "Privesc", "CTF"],
  },
];
