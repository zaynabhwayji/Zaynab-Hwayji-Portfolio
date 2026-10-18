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
      "CRUD Operations",
      "JWT Authentication",
      "Role-Based Authorization",
      "Express Middleware",
      "Password Hashing",
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
    skills: [
      "Context API",
      "useReducer",
      "React Hooks",
      "localStorage",
    ],
  },
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C++",
      "C",
    ],
  },
  {
    name: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "Vite",
      "NetBeans",
      "XAMPP",
      "Jupyter Notebook",
      "Google Colab",
      "Excel",
    ],
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
]