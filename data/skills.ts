export type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Route Handlers",
      "Server Actions",
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    name: "State Management",
    icon: "Boxes",
    skills: ["Context API", "useReducer", "React Hooks", "localStorage"],
  },
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "Python", "C++", "C"],
  },
  {
    name: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Regression",
      "Clustering",
      "PCA",
      "Recommendation Systems",
    ],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
      "NetBeans",
      "XAMPP",
      "Jupyter Notebook",
      "Google Colab",
      "Excel",
    ],
  },
];
