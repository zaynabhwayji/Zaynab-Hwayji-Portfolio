export type EducationItem = {
  degree: string;
  institution: string;
  detail: string;
  date: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Beirut Arab University — Faculty of Science",
    detail: "GPA: 3.45",
    date: "May 2025",
  },
  {
    degree: "Lebanese Baccalaureate — Sociology & Economics",
    institution: "",
    detail: "Mention: Very Good",
    date: "August 2021",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    title: "Next.js Bootcamp",
    issuer: "TechTalks Community",
    date: "March 2026",
  },
  {
    title: "Ethical Hacking & Cybersecurity Workshop",
    issuer: "Semicolon Academy",
    date: "October 2025",
  },
  {
    title: "AI & Cybersecurity Workshop",
    issuer: "Tomohi Platform in collaboration with HounaTech",
    date: "October 2025",
  },
  {
    title: "IC3 Digital Literacy Certification",
    issuer: "Certiport",
    date: "February 2025",
  },
  {
    title: "Unlocking the Secrets of Cyber Security Workshop",
    issuer: "Semicolon Academy – BAU",
    date: "January 2024",
  },
  {
    title: "Soft Skills Workshop",
    issuer: "Career Coaching Specialist Mr. Salim Dabliz",
    date: "December 2023",
  },
];

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "French", level: "Intermediate" },
];
