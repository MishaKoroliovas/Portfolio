export type SkillCategory =
  | "Offensive Security"
  | "Defensive Security"
  | "Networking"
  | "Tools & Platforms"
  | "Programming";

export type Skill = {
  name: string;
  icon: string;
};

// TODO: Replace placeholder skills with confirmed strengths and proficiency levels.
export const skills: Record<SkillCategory, Skill[]> = {
  "Offensive Security": [
    { name: "Kali Linux", icon: "KL" },
    { name: "Nmap", icon: "NM" },
    { name: "Metasploit", icon: "MS" },
    { name: "Burp Suite", icon: "BS" },
    { name: "Web App Testing", icon: "WA" },
  ],
  "Defensive Security": [
    { name: "Splunk", icon: "SP" },
    { name: "SIEM Triage", icon: "SI" },
    { name: "Incident Response", icon: "IR" },
    { name: "Threat Hunting", icon: "TH" },
    { name: "MITRE ATT&CK", icon: "MA" },
  ],
  Networking: [
    { name: "TCP/IP", icon: "IP" },
    { name: "DNS", icon: "DN" },
    { name: "Firewalls", icon: "FW" },
    { name: "VPNs", icon: "VP" },
    { name: "Wireshark", icon: "WS" },
  ],
  "Tools & Platforms": [
    { name: "Linux", icon: "LX" },
    { name: "Windows Server", icon: "WS" },
    { name: "Docker", icon: "DK" },
    { name: "GitHub", icon: "GH" },
    { name: "Azure", icon: "AZ" },
  ],
  Programming: [
    { name: "Python", icon: "PY" },
    { name: "Bash", icon: "SH" },
    { name: "PowerShell", icon: "PS" },
    { name: "TypeScript", icon: "TS" },
    { name: "SQL", icon: "DB" },
  ],
};
