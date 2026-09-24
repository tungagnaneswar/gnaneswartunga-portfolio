export const siteData = {
  name: 'Gnaneswar Tunga',
  title: 'Java Full-Stack Engineer building reliable software.',
  describe: 'Java Full-Stack Engineer with 1+ year of professional experience developing Spring Boot REST APIs, PostgreSQL databases, and production-ready backend applications.',
  pitch: 'Building scalable backend systems with Java.',
  location: 'Hyderabad, India',
  email: 'tungagnaneswar12@gmail.com',
  phone: '+91 6301508340',
  github: 'https://github.com/tungagnaneswar',
  linkedin: 'https://linkedin.com/in/gnaneswartunga',
  resume: 'https://drive.google.com/file/d/1TIn20frhUDdzFvttJFf3uzycKEG_aTJh/view?usp=sharing',
} as const;

export const about = {
  paragraphs: [
    'Software Developer at eArbor, developing backend services with Java, Spring Boot, and PostgreSQL, while delivering responsive web interfaces using React.',
    'Graduated with a B.Tech in Information Technology followed by intensive Java full-stack training, establishing a strong foundation in Object-Oriented Programming, database normalization, and REST API design.',
    'Currently focusing on backend engineering, JVM performance, SQL query optimization, and building database tools like Schema Vault to solve real developer workflow challenges.',
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Backend Engineering',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate / JPA', 'REST APIs'],
  },
  {
    category: 'Frontend Engineering',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Database & DevOps',
    items: ['PostgreSQL', 'SQL Optimization', 'Docker', 'Git', 'AWS', 'Linux'],
  },
  {
    category: 'Engineering Concepts',
    items: ['OOP', 'Data Structures', 'REST API Design', 'JWT Authentication', 'RBAC'],
  },
];

export type Project = {
  title: string;
  number: string;
  description: string;
  badge: 'PROFESSIONAL' | 'ENGINEERING PROJECT';
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    challenge: string;
    learned: string;
  };
  features?: string[];
};

export const projects: Project[] = [
  {
    title: 'Schema Vault - Database Schema Comparison & Drift Detection Platform',
    number: '01',
    badge: 'ENGINEERING PROJECT',
    description: 'An automated developer tool that detects database schema drift across environments by inspecting PostgreSQL system catalogs and comparing structural AST diffs.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Docker', 'React', 'TypeScript', 'Git'],
    github: 'https://github.com/tungagnaneswar/schema-vault-backend',
    demo: 'https://schema-vault-kappa.vercel.app/',
    featured: true,
    caseStudy: {
      problem: 'Unnoticed database schema drift between local, staging, and production environments causes silent runtime failures and broken production deployments.',
      solution: 'Built a Spring Boot comparison service that extracts metadata from PostgreSQL information_schema catalogs and flags schema drift before release.',
      challenge: 'Parsing PostgreSQL catalog metadata to compare tables, data types, indexes, and constraints accurately without false-positive drift alerts.',
      learned: 'Mastered PostgreSQL information_schema catalogs, structural AST diffing, metadata extraction, and building production developer tools.'
    }
  },
  {
    title: 'Fleet Management System',
    number: '02',
    badge: 'PROFESSIONAL',
    description: 'A production vehicle tracking platform engineered with real-time WebSocket telemetry, optimized PostgreSQL queries, and Role-Based Access Control.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Socket.IO', 'RBAC', 'React', 'TypeScript'],
    featured: true,
    caseStudy: {
      problem: 'Legacy HTTP polling caused high server latency, high database overhead, and delayed vehicle status updates across tracking feeds.',
      solution: 'Developed Spring Boot REST APIs, designed normalized PostgreSQL schemas, and integrated Socket.IO WebSockets for low-latency telemetry streaming.',
      challenge: 'Optimizing PostgreSQL query execution for time-series updates while preventing connection bottlenecks during peak vehicle tracking.',
      learned: 'Mastered WebSocket lifecycle management, database index tuning for real-time telemetry, and secure RBAC authorization models.'
    }
  },
  {
    title: 'Property Management Platform',
    number: '03',
    badge: 'PROFESSIONAL',
    description: 'An enterprise multi-tenant property platform built with real-time notifications, JWT authentication, and optimized database endpoints.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'REST API', 'Socket.IO', 'JWT', 'React'],
    featured: true,
    caseStudy: {
      problem: 'Property managers and tenants experienced communication delays due to synchronous request handling and unoptimized query execution.',
      solution: 'Engineered Spring Boot REST services, added Socket.IO real-time event streams, and implemented JWT authentication with RBAC in React.',
      challenge: 'Maintaining strict multi-tenant data isolation boundaries while delivering fast event broadcasting for urgent maintenance alerts.',
      learned: 'Gained hands-on experience in Spring Security authentication, PostgreSQL JOIN optimizations, and modular React component design.'
    }
  }
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'eArbor LLP',
    role: 'Full-Stack Software Developer',
    period: 'Aug 2025 - Present',
    location: 'Hyderabad, India',
    bullets: [
      'Developed multiple production REST APIs using Java and Spring Boot for core business modules.',
      'Designed normalized PostgreSQL database schemas and optimized SQL queries for high-performance retrieval.',
      'Integrated Socket.IO WebSockets for real-time event notifications, replacing legacy HTTP polling systems.',
      'Implemented secure JWT authentication and Role-Based Access Control (RBAC) across backend endpoints.',
      'Built responsive React components and integrated frontends with production Spring Boot REST services.',
      'Participated in active production deployments, sprint planning, and collaborative code reviews.',
    ],
  },
  {
    company: 'KodNest Technologies Pvt. Ltd.',
    role: 'Java Full Stack Intern',
    period: 'Aug 2024 - Mar 2025',
    location: 'Bangalore, India',
    bullets: [
      'Trained in Core Java, Spring Boot, Hibernate/JPA, Object-Oriented Design, and PostgreSQL database modeling.',
      'Designed relational database schemas and developed CRUD REST APIs for full-stack web applications.',
      'Built interactive React frontend interfaces, connecting components to backend REST endpoints.',
      'Utilized Git for version control, participated in collaborative code reviews, and debugged application issues.',
    ],
  },
];

