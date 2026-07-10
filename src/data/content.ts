export const siteData = {
  name: 'Gnaneswar Tunga',
  nickname: 'Eshwar',
  title: 'Full-Stack Software Developer',
  pitch: 'I build reliable, well-engineered systems end to end — from React interfaces to Spring Boot backends.',
  location: 'Hyderabad, India',
  email: 'gnaneswartunga@gmail.com',
  github: 'https://github.com/gnaneswartunga',
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
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
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
    items: ['PostgreSQL', 'RocksDB'],
  },
  {
    category: 'Cloud / DevOps',
    items: ['Microsoft Azure', 'Docker', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Concepts',
    items: ['REST API Design', 'System Design', 'Distributed Systems (Raft)', 'JWT Auth', 'SOLID Principles'],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Distributed Key-Value Store',
    description:
      'A Raft-consensus-based distributed KV store with full SDD documentation, leader election, log replication, and containerized observability via Prometheus and Grafana.',
    tags: ['Java 21', 'Spring Boot', 'RocksDB', 'React', 'TypeScript', 'Docker', 'Prometheus', 'Grafana'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Smart Inventory & Billing Manager',
    description:
      'Production-style backend with Spring Security + JWT auth, a SOLID-principles-driven architecture, careful PostgreSQL schema design, and a React frontend.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Fleet Management System',
    description:
      'End-to-end fleet tracking and management system with real-time status updates and role-based access control.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'Preserve Platform',
    description:
      'A digital preservation platform enabling users to archive, organize, and securely share personal media collections.',
    tags: ['Node.js', 'Express.js', 'React', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'Sales Savvy',
    description:
      'A sales analytics and CRM dashboard providing actionable insights through clean data visualizations and pipeline tracking.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'Milk Dairy Management System',
    description:
      'Comprehensive dairy operations management covering inventory, vendor records, billing, and daily production logs.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    github: '#',
  },
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
    company: 'eArbor',
    role: 'Full-Stack Software Developer',
    period: '2024 — Present',
    location: 'Hyderabad, India',
    bullets: [
      'Design and implement RESTful APIs in Java / Spring Boot, collaborating with cross-functional teams to deliver features from schema to UI.',
      'Build and maintain React.js frontends, ensuring responsive layouts and clean component architecture aligned with UX requirements.',
      'Contribute to PostgreSQL database design, query optimization, and data-integrity patterns for production workloads.',
    ],
  },
  {
    company: 'Kodnest',
    role: 'Java Full Stack Intern',
    period: 'Aug 2024 — Mar 2025',
    location: 'India',
    bullets: [
      'Built end-to-end web applications during an intensive Java full-stack training program.',
      'Developed backend services and RESTful APIs utilizing Java and Spring Boot.',
      'Created responsive, user-friendly frontend interfaces using React and Tailwind CSS.',
    ],
  },
];
