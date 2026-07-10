export const siteData = {
  name: 'Gnaneswar Tunga',
  nickname: 'Eshwar',
  title: 'Full-Stack Software Developer',
  pitch: 'I build reliable, well-engineered systems end to end from React interfaces to Spring Boot backends.',
  location: 'Hyderabad, India',
  email: 'tungagnaneswar12@gmail.com',
  github: 'https://github.com/tungagnaneswar',
  linkedin: 'https://linkedin.com/in/gnaneswartunga',
  resume: '#',
} as const;

export const about = {
  paragraphs: [
    "I'm a full-stack software developer currently working at eArbor in Hyderabad, where I design and build features across the entire stack — REST APIs, database schemas, and React frontends.",
    "My core stack is Java, Spring Boot, React.js, Node.js, Express.js, and PostgreSQL. I'm certified in Microsoft Azure Data Engineering and Java Full Stack Development, and I hold a B.Tech in Information Technology from Sri Venkateswara Engineering College (2020–2024).",
    "Right now I'm focused on deepening my backend and distributed-systems knowledge, and building portfolio projects that reflect production-level engineering decisions.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Structured Query Language(SQL)'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Express.js'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Cloud / DevOps',
    items: ['Docker', 'AWS', 'Git & GitHub'],
  },
  {
    category: 'Concepts',
    items: ['REST API Design', 'System Design', 'Distributed Systems (Raft)', 'JWT Auth', 'SOLID Principles', 'Load Balancing', 'Microservices', 'Data Structures & Algorithms'],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  isActive?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Schema Vault',
    description:
      'A database schema management tool that helps you compare demo and production environments and highlight differences. It supports both PostgreSQL and MySQL.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Swagger UI', 'Docker', 'PostgreSQL', 'MySQL', 'React', 'TypeScript'],
    github: '#',
    demo: '#',
    featured: true,
    isActive: true,
  },
  {
    title: 'Distributed Key-Value Store',
    description:
      'A Raft-consensus-based distributed KV store with full SDD documentation, leader election, log replication, and containerized observability via Prometheus and Grafana.',
    tags: ['Java 21', 'Spring Boot', 'RocksDB', 'React', 'TypeScript', 'Docker', 'Prometheus', 'Grafana'],
    github: '#',
    demo: '#',
    featured: true,
    isActive: true,
  },
  {
    title: 'Smart Inventory & Billing Manager',
    description:
      'Production-style backend with Spring Security + JWT auth, a SOLID-principles-driven architecture, careful PostgreSQL schema design, and a React frontend.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React'],
    github: '#',
    demo: '#',
    featured: true,
    isActive: false,
  },
  {
    title: 'Fleet Management System',
    description:
      'End-to-end fleet tracking and management system with real-time status updates and role-based access control.',
    tags: ['Node.js', 'Express.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: '#',
    featured: true,
    isActive: true,
  },
  {
    title: 'Preserve Platform',
    description:
      'A digital preservation platform enabling users to archive, organize, and securely share personal media collections.',
    tags: ['Node.js', 'Express.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: '#',
    featured: true,
    isActive: true,
  },
  {
    title: 'Sales Savvy',
    description:
      'A sales analytics and CRM dashboard providing actionable insights through clean data visualizations and pipeline tracking.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'JWT Auth'],
    github: '#',
    demo: '#',
    featured: true,
    isActive: false,
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
      'Design and implement RESTful APIs in Java / Spring Boot, collaborating with cross-functional teams to deliver features from schema to UI.',
      'Build and maintain React.js frontends, ensuring responsive layouts and clean component architecture aligned with UX requirements.',
      'Contribute to PostgreSQL database design, query optimization, and data-integrity patterns for production workloads.',
    ],
  },
  {
    company: 'KodNest Technologies Pvt. Ltd.',
    role: 'Java Full Stack Intern',
    period: 'Aug 2024 - Mar 2025',
    location: 'Bangalore, India',
    bullets: [
      'Completed an intensive Java full-stack development program covering backend, frontend, database, and cloud technologies.',
      'Gained hands-on experience with Spring Boot, React.js, MySQL.',
      'Participated in hackathons and coding challenges, developing problem-solving skills and collaborative development practices.',
      'Built and deployed multiple full-stack projects, demonstrating proficiency in the complete software development lifecycle.',
    ],
  },
];
