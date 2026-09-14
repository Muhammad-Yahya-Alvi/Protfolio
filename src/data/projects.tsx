import { TypographyP } from "@/components/ui/typography";

export type ProjectSkill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

const skill = (title: string): ProjectSkill => ({
  title,
  bg: "#024644",
  fg: "#c2e1df",
  icon: <span className="text-[10px] font-bold">{title.slice(0, 2).toUpperCase()}</span>,
});

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: ProjectSkill[]; backend: ProjectSkill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const createProject = (
  id: string,
  category: string,
  title: string,
  description: string,
  github: string,
  frontend: string[],
  backend: string[] = []
): Project => ({
  id,
  category,
  title,
  src: "/assets/seo/og-image.png",
  screenshots: [],
  live: "#",
  github,
  skills: {
    frontend: frontend.map(skill),
    backend: backend.map(skill),
  },
  content: <TypographyP className="font-mono text-lg leading-relaxed">{description}</TypographyP>,
});

const projects: Project[] = [
  createProject(
    "yax-ai",
    "AI developer tool",
    "YAX-AI",
    "YAX CORE is a lightweight Node.js foundation that simplifies structured multi-modal AI integration with Google's GenAI SDK. It focuses on repeatable setup, clear boundaries, and practical developer workflows.",
    "https://github.com/Muhammad-Yahya-Alvi/YAX-AI",
    ["HTML", "JavaScript", "Node.js"],
    ["Google GenAI"]
  ),
  createProject(
    "erp-bridge",
    "ERP organization",
    "ERP Bridge",
    "ERP Bridge is a GitHub organization for JavaScript-based ERP workflow tools, including EPM mass uploads, O2C e-billing, monitoring, and operational business applications.",
    "https://github.com/ERP-Bridge",
    ["JavaScript", "ERP", "Business tools"]
  ),
  createProject(
    "admission-system",
    "Desktop application",
    "University Admission System",
    "A Java Swing and MySQL admission management system with authentication, a centralized admin dashboard, and a workflow for managing university applications.",
    "https://github.com/Muhammad-Yahya-Alvi/UniversityAdmissionSystem",
    ["Java", "Swing"],
    ["MySQL", "OOP"]
  ),
  createProject(
    "library-system",
    "Management system",
    "Library Management System",
    "A practical library solution for organizing books, members, checkouts, returns, and everyday transaction workflows in one place.",
    "https://github.com/Muhammad-Yahya-Alvi/library-management-system",
    ["TypeScript", "GitHub"],
    ["Data management"]
  ),
  createProject(
    "attendance-system",
    "Academic system",
    "SMIU Attendance Management System",
    "A C-based system for tracking student attendance records and supporting organized academic reporting at SMIU.",
    "https://github.com/Muhammad-Yahya-Alvi/SMIU-Attendance-Management-System",
    ["C", "GitHub"]
  ),
];

export default projects;
