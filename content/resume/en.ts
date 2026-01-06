export interface ResumeData {
  hero: {
    name: string;
    title: string;
    location: string;
    email: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string[];
  }>;
  selectedProjects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  skills: {
    technical: string[];
    tools: string[];
    languages: string[];
  };
  technologies: {
    usingNow: string[];
    learning: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    details?: string;
  }>;
  references: Array<{
    name: string;
    role: string;
    company: string;
    testimonial: string;
  }>;
}

export const resumeEN: ResumeData = {
  hero: {
    name: "Eray Sari",
    title: "Frontend Engineer",
    location: "Austria",
    email: "erayssari52@gmail.com",
    summary:
      "Frontend engineer specializing in React, Next.js, and performance-focused web applications. Building fast, modern, and accessible user experiences.",
  },
  experience: [
    {
      company: "Sarjnerde",
      role: "Frontend Developer",
      period: "2025 May - 2025 September",
      description: [
        "Built the Support and Event Log pages of the CMS panel from scratch",
        "Implemented a chat-based support system (WhatsApp-like) with conversation view, unread message prioritization, sorting, search, advanced filtering, and detailed views",
        "Improved performance and user experience by implementing infinite scrolling and optimizing data loading using Intersection Observer",
        "Worked with scalable frontend architecture and complex state management",
      ],
    },
    {
      company: "Sarjnerde",
      role: "Frontend Developer Intern",
      period: "2025 March - 2025 May",
      description: [
        "Redesigned Payment and Payout pages with a modern UI/UX to improve transaction and approval workflows",
        "Implemented internationalization (i18n) across multiple modules",
        "Gained hands-on experience in a production-grade energy management software platform",
      ],
    },
  ],
  selectedProjects: [
    {
      title: "LastBite - Donate App",
      description:
        "Frontend development of a donation and discount platform enabling users to purchase or donate products close to their expiration date. The application features a complete e-commerce flow with role-based access control.",
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS", "Axios"],
      link: "https://github.com/EraySari/donate-app",
    },
    {
      title: "The Wishpering Pines",
      description:
        "A cabin reservation web application developed as part of a team project, focusing on clean architecture, reusable components, and seamless backend integration.",
      technologies: ["React", "React Query", "Tailwind CSS"],
      link: "https://github.com/EraySari/management_of_json_data",
    },
  ],
  skills: {
    technical: [
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
    tools: ["Git", "Jest", "Testing Library", "Webpack", "Vite"],
    languages: ["Turkish Native", "English B1", "German B1"],
  },
  technologies: {
    usingNow: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
    learning: ["Node.js", "TypeScript"],
  },
  education: [
    {
      institution: "Sakarya University",
      degree: "Bachelor of Computer Engineering",
      period: "2020 - 2025",
      details:
        "Relevant coursework: Web Development, Data Structures, Algorithms",
    },
  ],
  references: [
    {
      name: "Halit Dogan",
      role: "Co-Founder & CEO",
      company: "Sarjnerde",
      testimonial:
        "I am confident that Eray will continue to create significant value in future roles through his dedication, integrity, and professionalism.",
    },
  ],
};
