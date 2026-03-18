export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type ProjectCaseStudy = {
  title: string;
  company: string;
  summary: string;
  metrics: string[];
  stack: string[];
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTags = [
  "React & Next.js",
  ".NET Core & ASP.NET",
  "Azure & AWS",
  "Microservices",
];

export const stats = [
  { value: "16+", label: "Years building production software" },
  { value: "45+", label: "Global client engagements delivered" },
  { value: "9,000+", label: "Hands-on engineering hours" },
  { value: "100%", label: "Delivery-first execution mindset" },
] as const;

export const aboutPoints = [
  "I build full-stack systems that balance product quality, engineering rigor, and long-term maintainability.",
  "My strongest work sits at the intersection of UX clarity, scalable architecture, and fast execution.",
  "I’ve led delivery across freelance, startup, and enterprise environments using Next.js, React, .NET, Azure, SQL, and Docker.",
];

export const featuredProjects: ProjectCaseStudy[] = [
  {
    title: "SaaS Platform Delivery at Scale",
    company: "Freelance Consulting",
    summary:
      "Led end-to-end product delivery for SaaS and enterprise clients, translating business requirements into production-grade full-stack applications.",
    metrics: [
      "45+ client projects delivered",
      "9,000+ billed engineering hours",
      "100% project delivery focus",
    ],
    stack: ["Next.js", "React", ".NET Core", "SQL", "Docker", "CI/CD"],
  },
  {
    title: "Enterprise Platform Modernization",
    company: "SolarWinds",
    summary:
      "Improved deployment and service architecture for enterprise software, strengthening performance, scalability, and operational reliability.",
    metrics: [
      "2+ years in technical leadership",
      "Reduced installation and setup effort",
      "Improved service performance and onboarding automation",
    ],
    stack: [".NET", "SQL Express", "Domain Graph Services", "Security Hardening"],
  },
  {
    title: "Cloud-Backed Business Systems",
    company: "Trescal",
    summary:
      "Designed and delivered maintainable enterprise systems with Azure-backed architecture, reusable components, and targeted performance improvements.",
    metrics: [
      "2+ years consulting delivery",
      "Legacy modernization and reusable architecture",
      "Cross-functional releases with QA and DevOps",
    ],
    stack: ["ASP.NET", "Azure", "SQL Server", "Architecture Design"],
  },
];

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Full-Stack Senior Developer",
    period: "July 2024 - Present",
    highlights: [
      "Delivered 45+ global projects with 100% delivery success across SaaS, startup, and enterprise engagements.",
      "Accumulated 9,000+ billable hours in full-stack engineering using React, Next.js, .NET Core, and SQL.",
      "Designed and implemented microservices and API-first architectures, including monolith-to-microservice migrations.",
      "Containerized services with Docker and improved release reliability through CI/CD-driven deployment workflows.",
      "Led requirements-to-delivery execution with stakeholders, turning business needs into production-ready solutions.",
    ],
  },
  {
    company: "SolarWinds",
    role: "Team Lead",
    location: "Remote | Czech Republic",
    period: "March 2022 - July 2024",
    highlights: [
      "Led backend development and cross-team planning for 2+ years, driving delivery quality and engineering standards.",
      "Reduced enterprise setup and deployment effort by streamlining installation workflows across environments.",
      "Improved application performance by refactoring services into domain graph services for scalable data access.",
      "Automated SQL Express storage provisioning for trial customers, reducing manual onboarding operations.",
      "Strengthened security posture through vulnerability patching, secure coding controls, and platform upgrades.",
    ],
  },
  {
    company: "Trescal",
    role: "Full Stack .NET Developer and Consultant",
    period: "December 2019 - January 2022",
    highlights: [
      "Delivered enterprise full-stack solutions over 2+ years using .NET, ASP.NET, Azure, and SQL-based systems.",
      "Contributed to high-level and low-level architecture decisions for scalable, maintainable application design.",
      "Refactored legacy modules to improve maintainability, production stability, and long-term code sustainability.",
      "Implemented targeted performance tuning and reusable component patterns to accelerate delivery cycles.",
      "Collaborated with QA, DevOps, and product stakeholders to ensure reliable releases and requirement traceability.",
    ],
  },
  {
    company: "The Kickstation",
    role: "Co-Founder & Full Stack .NET Developer",
    period: "December 2019 - January 2022",
    highlights: [
      "Led product and platform engineering over 2+ years, aligning roadmap execution with business outcomes.",
      "Designed scalable application architecture and technical standards to support long-term platform growth.",
      "Resolved performance bottlenecks and introduced automation to improve reliability and operational efficiency.",
      "Developed automation bots to process licensing workflows and reduce repetitive manual handling.",
      "Improved data protection using stronger encryption and secure engineering practices.",
    ],
  },
  {
    company: "Mailmonitor",
    role: "Full Stack .NET Developer",
    period: "September 2017 - May 2021",
    highlights: [
      "Built and maintained scalable .NET applications for 3+ years with consistent release stability.",
      "Contributed to architecture planning for robust, maintainable, and extensible enterprise systems.",
      "Migrated legacy applications to modern .NET frameworks to improve performance and supportability.",
      "Integrated third-party APIs to expand product capabilities and improve end-user workflows.",
      "Optimized application code paths and SQL queries to reduce latency and improve runtime efficiency.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend Engineering",
    values: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "React Query"],
  },
  {
    label: "Backend Engineering",
    values: [".NET Core", "ASP.NET MVC/Web API", "Entity Framework", "LINQ", "Microservices"],
  },
  {
    label: "Cloud & DevOps",
    values: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Azure DevOps"],
  },
  {
    label: "Data & Architecture",
    values: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "API Design", "Scalable Systems"],
  },
  {
    label: "Product Delivery",
    values: ["Architecture Planning", "Stakeholder Collaboration", "Team Leadership", "Performance Optimization"],
  },
  {
    label: "Tooling",
    values: ["VS Code", "Visual Studio", "Rider", "Postman", "Git", "JIRA"],
  },
] as const;

export const contactLinks = [
  { label: "Email", value: "krutiksheth@gmail.com", href: "mailto:krutiksheth@gmail.com" },
  { label: "Phone", value: "+91 95582 57973", href: "tel:+919558257973" },
  { label: "LinkedIn", value: "linkedin.com/in/krutik-sheth-6b653335", href: "https://linkedin.com/in/krutik-sheth-6b653335" },
] as const;
