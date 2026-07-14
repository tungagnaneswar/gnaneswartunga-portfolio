export const siteData = {
  name: 'Building reliable software.',
  nickname: 'Gnaneswar Tunga',
  title: 'Focused on Java, Spring Boot and understanding production-scale systems.',
  pitch: 'Building reliable software.',
  location: 'Hyderabad, India',
  email: 'tungagnaneswar12@gmail.com',
  github: 'https://github.com/tungagnaneswar',
  linkedin: 'https://linkedin.com/in/gnaneswartunga',
  resume: 'https://drive.google.com/file/d/1KvWJommSnJOZt-rmG0T6Iw8F5u-2nqry/view?usp=sharing',
} as const;

export const about = {
  paragraphs: [
    "I'm a full-stack engineer working at eArbor in Hyderabad. I spend my days designing REST APIs, structuring PostgreSQL schemas, and hooking everything up to React frontends.",
    "My journey formally started at Sri Venkateswara Engineering College, followed by intensive full-stack training. Over time, I've grown a deep appreciation for the entire stack — especially the backend. Java, Spring Boot, and Node.js are where I feel most at home.",
    "I'm currently spending most of my free time learning Java internals, distributed systems, and building Gnanadhan. I enjoy understanding how systems work internally, from JVM behavior to distributed systems.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Core Expertise',
    items: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API Design', 'React.js'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Node.js', 'Express.js', 'Docker', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS', 'Git'],
  },
  {
    category: 'Currently Learning',
    items: ['System Design', 'Distributed Systems (Raft)', 'GenAI'],
  },
];

export type Project = {
  title: string;
  number: string;
  description: string;
  badge: 'PROFESSIONAL' | 'PERSONAL';
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  caseStudy?: {
    why: string;
    problem: string;
    challenge: string;
    learned: string;
  };
  features?: string[];
};

export const currentlyBuilding = {
  title: 'Gnanadhan',
  description: 'I started Gnanadhan because I wanted students to understand concepts clearly instead of memorizing interview answers and random notes.',
  status: 'Early Development',
  target: 'Version 1.0 in future.'
};

export const projects: Project[] = [
  {
    title: 'Property Management Platform',
    number: '01',
    badge: 'PROFESSIONAL',
    description: 'Implemented production modules including real-time notifications, PostgreSQL schema design and responsive React interfaces.',
    tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Java'],
    featured: true,
    features: [
      'Designed PostgreSQL schemas and robust REST APIs.',
      'Built production-ready React interfaces with reusable components.',
      'Developed comprehensive role-based access control modules.',
      'Optimized backend queries for high-volume tenant data.'
    ]
  },
  {
    title: 'Fleet Management System',
    number: '02',
    badge: 'PROFESSIONAL',
    description: 'Engineered a real-time fleet tracking system to solve legacy polling issues. Integrated WebSockets for live status updates and optimized PostgreSQL databases for scale.',
    tags: ['Node.js', 'Express.js', 'React', 'TypeScript', 'Socket.IO', 'PostgreSQL'],
    featured: true,
    features: [
      'Implemented Socket.IO real-time notifications, replacing legacy polling.',
      'Designed scalable PostgreSQL database schemas and API endpoints.',
      'Built responsive interfaces for live vehicle tracking and status updates.',
      'Integrated role-based access for fleet managers and administrators.'
    ]
  },
  {
    title: 'Milk Manager',
    number: '03',
    badge: 'PERSONAL',
    description: 'Built for my father\'s dairy business to replace manual paper tracking. Provides a mobile-friendly dashboard for daily milk logging and automated monthly billing reports.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    featured: true,
    features: [
      'Customer management module',
      'Daily milk tracking dashboard',
      'Automated monthly report generation',
      'Real-time income calculations'
    ],
    caseStudy: {
      why: 'My father was managing his dairy business on paper, which made monthly billing and tracking incredibly time-consuming and error-prone.',
      problem: 'Needed a simple, mobile-friendly way to log daily milk quantities per customer and instantly generate accurate end-of-month billing reports.',
      challenge: 'Designing an intuitive UI that non-technical users (like my father) could easily use every day without friction.',
      learned: 'Software is most powerful when it solves real, tangible problems for real people. Empathy is the most important engineering skill.'
    }
  },
  {
    title: 'Schema Vault',
    number: '04',
    badge: 'PERSONAL',
    description: 'Developed a comparison engine to detect database schema drift between local and production environments, solving the problem of silent deployment bugs.',
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'React', 'TypeScript'],
    github: '#',
    demo: '#',
    caseStudy: {
      why: 'I repeatedly faced issues keeping local and production databases synced without paying for expensive tools.',
      problem: 'Database schema drift causes silent bugs that are hard to trace and break production deployments.',
      challenge: 'Writing a reliable comparison engine that parses SQL structure and accurately detects missing columns, indexes, and constraints without false positives.',
      learned: 'Deepened my understanding of PostgreSQL internals, metadata tables, and writing robust parsing logic in Spring Boot.'
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
      'Implemented Socket.IO real-time notifications, replacing a polling-based system and reducing server load significantly.',
      'Designed PostgreSQL schemas and REST APIs in Java / Spring Boot, delivering features end-to-end from database to UI.',
      'Built production-ready React.js frontends with clean component architecture, responsive layouts, and consistent UX.',
    ],
  },
  {
    company: 'KodNest Technologies Pvt. Ltd.',
    role: 'Java Full Stack Intern',
    period: 'Aug 2024 - Mar 2025',
    location: 'Bangalore, India',
    bullets: [
      'Completed an intensive Java full-stack program — Spring Boot, React.js, MySQL, and cloud fundamentals.',
      'Built and deployed multiple full-stack applications, demonstrating ownership across the entire development lifecycle.',
      'Competed in hackathons and coding challenges, sharpening problem-solving and collaborative engineering skills.',
    ],
  },
];
