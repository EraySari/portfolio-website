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
        "Developed and maintained high-performance React applications using Next.js",
        "Collaborated with design and backend teams to deliver scalable solutions",
        "Optimized applications for performance and accessibility",
      ],
    },
    {
      company: "Sarjnerde",
      role: "Frontend Developer Intern",
      period: "2025 March - 2025 May",
      description: [
        "Built responsive web applications with React and TypeScript",
        "Implemented modern UI/UX patterns and best practices",
        "Contributed to improving code quality and developer experience",
      ],
    },
  ],
  selectedProjects: [
    {
      title: "Project One",
      description:
        "A high-performance web application built with Next.js and TypeScript.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "/work",
    },
    {
      title: "Project Two",
      description:
        "Modern e-commerce platform with optimized UX and performance.",
      technologies: ["React", "Next.js", "Node.js"],
    },
  ],
  skills: {
    technical: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    tools: ["Git", "Jest", "Testing Library", "Webpack", "Vite"],
    languages: ["English B1", "German B1"],
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
      name: "John Doe",
      role: "Engineering Manager",
      company: "Company Name",
      testimonial:
        "Eray is an exceptional frontend engineer with a strong focus on performance and user experience. Highly recommended.",
    },
  ],
};
