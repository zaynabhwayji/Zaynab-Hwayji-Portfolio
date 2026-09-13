export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  learnings: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "techtalks",
    title: "TechTalks — Developer Community Platform",
    shortTitle: "TechTalks",
    description:
      "Built a full-stack developer community platform with authentication, GitHub OAuth, developer profiles, post CRUD functionality, Server Actions, API Route Handlers, and MongoDB integration.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Auth.js",
      "Tailwind CSS",
      "Zod",
    ],
    features: [
      "Authentication",
      "GitHub OAuth",
      "Developer profiles",
      "Post creation",
      "Post editing",
      "Post deletion",
      "CRUD functionality",
      "Server Actions",
      "API Route Handlers",
      "MongoDB",
      "Mongoose",
      "Zod validation",
    ],
    highlights: [
      "Full-stack architecture with the Next.js App Router, combining Server Components, Server Actions, and API Route Handlers.",
      "Authentication layer powered by Auth.js with GitHub OAuth for secure developer sign-in.",
      "Data modeling and persistence with MongoDB and Mongoose, including validation with Zod.",
    ],
    learnings: [
      "Designing a full-stack App Router application that blends server and client rendering.",
      "Implementing OAuth authentication and protecting routes based on auth state.",
      "Structuring MongoDB schemas and validating input with Zod before it reaches the database.",
    ],
    github: "https://github.com/zaynabhwayji/Developer-Community",
    featured: true,
    image: "/projects/techtalks.svg",
    accent: "lavender",
  },
 
  {
    slug: "shopverse",
    title: "Shopverse — E-Commerce REST API",
    shortTitle: "Shopverse",
    description:
      "Built a complete e-commerce REST API with Node.js, Express.js, MongoDB, and Mongoose, featuring CRUD operations, relationships, product queries, order management, and centralized error handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Postman",
    ],
    features: [
      "Product CRUD",
      "Category CRUD",
      "Tag CRUD",
      "User CRUD",
      "Order management",
      "MongoDB relationships",
      "Mongoose populate",
      "Product filtering",
      "Sorting",
      "Pagination",
      "Order status management",
      "Server-side order total",
      "Centralized error handling",
      "Postman testing",
    ],
    highlights: [
      "Implemented one-to-many and many-to-many relationships using MongoDB references and Mongoose populate().",
      "Built product filtering, sorting, and pagination with query parameters.",
      "Implemented server-side order total calculation and controlled order status transitions.",
      "Added centralized error handling for validation errors, invalid IDs, duplicate values, and not-found resources.",
    ],
    learnings: [
      "Designing a structured REST API with controllers, routes, models, and middleware.",
      "Modeling relationships in MongoDB and using Mongoose populate() for related data.",
      "Handling filtering, sorting, pagination, validation, and centralized API errors.",
      "Testing REST API endpoints and complete request flows with Postman.",
    ],
    github: "https://github.com/zaynabhwayji/Shopverse",
    featured: true,
    image: "/projects/shopverse.svg",
    accent: "sage",
  },
  {
    slug: "mongodb-rest-api",
    title: "MongoDB REST API",
    shortTitle: "MongoDB REST API",
    description:
      "Built a RESTful API for product management using Node.js and Express.js with MongoDB Atlas and Mongoose.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "REST API",
      "Postman",
    ],
    features: [
      "Create products",
      "Retrieve products",
      "Update products",
      "Delete products",
      "Validation",
      "Error handling",
      "MongoDB integration",
      "REST API",
      "Postman testing",
    ],
    highlights: [
      "Clean RESTful endpoints for full product CRUD operations.",
      "Mongoose models with validation and structured error handling.",
      "Tested end-to-end with Postman against a MongoDB Atlas cluster.",
    ],
    learnings: [
      "Designing RESTful routes and HTTP semantics with Express.",
      "Modeling documents with Mongoose and validating input.",
      "Testing APIs systematically with Postman.",
    ],
    github: "https://github.com/zaynabhwayji/mongooseXnodeJs",
    featured: false,
    image: "/projects/mongodb-rest-api.svg",
    accent: "sage",
  },
  {
    slug: "academya",
    title: "Academya — Course Enrollment Platform",
    shortTitle: "Academya",
    description:
      "Built a fully client-side course enrollment platform using Next.js App Router with course search, filtering, sorting, dynamic routing, enrollment, and progress tracking.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Context API",
      "useReducer",
      "localStorage",
    ],
    features: [
      "Course search",
      "Filtering",
      "Sorting",
      "Dynamic routing",
      "Course enrollment",
      "Progress tracking",
      "Context API",
      "useReducer",
      "localStorage",
      "Responsive UI",
    ],
    highlights: [
      "Client-side state management with Context API and useReducer for enrollment and progress.",
      "Dynamic routing for individual course pages with search, filtering, and sorting.",
      "Persistent enrollment and progress data via localStorage.",
    ],
    learnings: [
      "Managing complex client state with useReducer and Context.",
      "Building dynamic routes and nested layouts in the App Router.",
      "Persisting user state locally without a backend.",
    ],
    github: "https://github.com/zaynabhwayji/Academya",
    featured: true,
    image: "/projects/academya.svg",
    accent: "blush",
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    shortTitle: "Task Manager App",
    description:
      "Built a task management application with task creation, editing, completion management, dynamic routing, API endpoints, loading UI, and reusable components.",
    technologies: [
      "Next.js",
      "React",
      "App Router",
      "Server Components",
      "Client Components",
      "API Route Handlers",
    ],
    features: [
      "Task creation",
      "Task editing",
      "Completion management",
      "Dynamic routing",
      "API Route Handlers",
      "Server Components",
      "Client Components",
      "Loading UI",
      "Reusable components",
    ],
    highlights: [
      "Mix of Server and Client Components for a balanced rendering strategy.",
      "API Route Handlers for task operations with loading UI states.",
      "Reusable component composition for task views.",
    ],
    learnings: [
      "Splitting work between Server and Client Components intentionally.",
      "Building API Route Handlers with clear request and response shapes.",
      "Designing reusable UI components for repeated task views.",
    ],
    github: "https://github.com/zaynabhwayji/mini-next-app",
    featured: true,
    image: "/projects/task-manager-app.svg",
    accent: "rose",
  },
  {
    slug: "shopreact",
    title: "ShopReact — E-Commerce Application",
    shortTitle: "ShopReact",
    description:
      "Built a responsive e-commerce application with product search, category filtering, shopping cart management, routing, and persistent cart state.",
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "React Hooks",
      "JavaScript",
      "localStorage",
    ],
    features: [
      "Product search",
      "Category filtering",
      "Shopping cart",
      "Routing",
      "Context API",
      "Persistent cart state",
      "Responsive UI",
    ],
    highlights: [
      "Client-side routing with React Router across product and cart pages.",
      "Global cart state with Context API and React Hooks.",
      "Persistent cart across sessions using localStorage.",
    ],
    learnings: [
      "Structuring a multi-page React app with React Router.",
      "Lifting and sharing state with Context API.",
      "Persisting client state in localStorage.",
    ],
    github: "https://github.com/zaynabhwayji/Shop-React",
    liveDemo: "https://zaynabhwayji.github.io/Shop-React/",
    featured: false,
    image: "/projects/shopreact.svg",
    accent: "lavender",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    shortTitle: "Weather App",
    description:
      "Built a responsive weather application with live API integration, city search, dynamic weather information, reusable components, and error handling.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "OpenWeather API",
      "REST API",
      "React Hooks",
    ],
    features: [
      "Live weather API",
      "City search",
      "Weather data display",
      "React Hooks",
      "Reusable components",
      "Error handling",
    ],
    highlights: [
      "Live integration with the OpenWeather REST API.",
      "City search with dynamic weather data rendering.",
      "Reusable components and graceful error handling.",
    ],
    learnings: [
      "Consuming a third-party REST API from a React app.",
      "Managing async state and errors with hooks.",
      "Designing reusable presentational components.",
    ],
    github: "https://github.com/zaynabhwayji/weather_app_starter",
    featured: false,
    image: "/projects/weather-app.svg",
    accent: "sage",
  },
  {
    slug: "react-context-api-mini-shop",
    title: "React Context API Mini Shop",
    shortTitle: "Context API Mini Shop",
    description:
      "Built a mini e-commerce application using React Context API for global cart and theme state, custom hooks, quantity management, and persistent cart data.",
    technologies: [
      "React",
      "Context API",
      "Hooks",
      "Vite",
      "JavaScript",
      "localStorage",
    ],
    features: [
      "Global cart state",
      "Theme state",
      "Custom hooks",
      "Quantity management",
      "Persistent cart data",
      "localStorage",
    ],
    highlights: [
      "Global cart and theme state managed with Context API.",
      "Custom hooks for cart logic and quantity management.",
      "Persistent cart data via localStorage.",
    ],
    learnings: [
      "Designing custom hooks to encapsulate reusable logic.",
      "Managing multiple global concerns with Context.",
      "Persisting cart data across reloads.",
    ],
    github: "https://github.com/zaynabhwayji/mini-shop",
    featured: false,
    image: "/projects/react-context-api-mini-shop.svg",
    accent: "blush",
  },
  {
    slug: "shoplite",
    title: "ShopLite — E-Commerce Store",
    shortTitle: "ShopLite",
    description:
      "Built a responsive e-commerce store with product search, category filtering, shopping cart functionality, and persistent cart data.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "localStorage",
      "Git",
      "GitHub",
    ],
    features: [
      "Product search",
      "Category filtering",
      "Shopping cart",
      "localStorage",
      "Responsive design",
    ],
    highlights: [
      "Vanilla JavaScript implementation with no frameworks.",
      "Client-side search, filtering, and cart logic.",
      "Persistent cart data with localStorage.",
    ],
    learnings: [
      "Building interactive UI with plain JavaScript and DOM APIs.",
      "Structuring a responsive layout with HTML and CSS.",
      "Persisting state with localStorage.",
    ],
    github: "https://github.com/zaynabhwayji/ShopLite",
    liveDemo: "https://zaynabhwayji.github.io/ShopLite/",
    featured: false,
    image: "/projects/shoplite.svg",
    accent: "rose",
  },
  {
    slug: "todo-list-app",
    title: "Todo List App",
    shortTitle: "Todo List App",
    description:
      "Built a responsive task management application with CRUD operations, search, filtering, task status management, and persistent localStorage data.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6", "localStorage"],
    features: [
      "CRUD operations",
      "Task search",
      "Filtering",
      "Task status management",
      "localStorage",
      "Responsive UI",
    ],
    highlights: [
      "Full CRUD for tasks with search and filtering.",
      "Task status management with a clean, responsive UI.",
      "Persistent data with localStorage.",
    ],
    learnings: [
      "Implementing CRUD with vanilla JavaScript.",
      "Filtering and searching client-side data.",
      "Keeping state persistent across reloads.",
    ],
    github: "https://github.com/zaynabhwayji/todolist",
    liveDemo: "https://zaynabhwayji.github.io/todolist/",
    featured: false,
    image: "/projects/todo-list-app.svg",
    accent: "lavender",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
