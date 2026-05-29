export type Certification = {
  name: string;
  issuer: string;
  date: string;
  badge: string;
};

// TODO: Replace placeholder certifications with real credential names, dates, and verification links.
export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "TODO: 2026",
    badge: "SEC+",
  },
  {
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "TODO: 2026",
    badge: "CEH",
  },
  {
    name: "Offensive Security Certified Professional",
    issuer: "OffSec",
    date: "TODO: 2026",
    badge: "OSCP",
  },
  {
    name: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "TODO: 2026",
    badge: "CCNA",
  },
];
