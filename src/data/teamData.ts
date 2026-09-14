export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: 'Executive' | 'Technology' | 'Creative' | 'Operations';
  tagline: string;
  education?: string[];
  bio: string;
  extendedBio?: string;
  leadershipVision?: string;
  projects?: {
    name: string;
    description: string;
    tag?: string;
  }[];
  image: string;
  skills: string[];
  technologies: string[];
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
    whatsapp?: string;
    phone?: string;
  };
  featured: boolean;
  order: number;
}

export const teamData: TeamMember[] = [
  {
    id: "sweetbert-macha",
    name: "SWEETBERT MACHA",
    role: "Founder & Chief Executive Officer (CEO)",
    department: "Executive Leadership & Brand Strategy",
    category: "Executive",
    tagline: "Visionary Leadership • Strategic Brand Growth & Corporate Governance",
    bio: "Leading Siribrand Agency TZ with a strategic vision to transform African enterprises and global brands into high-impact market leaders through creative storytelling, cutting-edge technology, and strategic brand execution.",
    extendedBio: "Sweetbert Macha steers the overarching corporate direction, client partnerships, and strategic expansion of Siribrand Agency TZ. With deep expertise in brand governance, business development, and market dynamics in East Africa, he ensures every agency initiative creates tangible commercial value, executive prestige, and sustainable brand equity for our clients.",
    leadershipVision: "To establish Siribrand Agency as East Africa's benchmark creative powerhouse, setting new standards in corporate branding, luxury visual production, and digital market dominance.",
    image: "/clients/sweetbert-macha.png",
    skills: [
      "Executive Brand Strategy",
      "Business Growth & Operations",
      "Client Partnership Governance",
      "Market Expansion & Vision",
      "Commercial Media Direction",
      "Corporate Positioning"
    ],
    technologies: [
      "Strategic Planning",
      "Enterprise Management",
      "Financial Strategy",
      "Brand Architecture",
      "Multi-Channel Campaign Strategy"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 1
  },
  {
    id: "peter-joseph",
    name: "PETER JOSEPH MSIRA",
    role: "Computer Scientist | Software Developer | AI & Machine Learning Specialist | IT Architect",
    department: "Technology, Data Structures & Artificial Intelligence",
    category: "Technology",
    tagline: "Pioneering Intelligent Systems, High-Performance Software & Machine Learning Innovation",
    education: [
      "Master of Computer Science (MSc) — Specializing in Data Structures and Artificial Intelligence at University of Dar es Salaam (UDSM) (Pursuing)",
      "Bachelor of Computer Science — Kampala International University (KIU)"
    ],
    bio: "Peter Joseph Msira is a Computer Scientist, Software Developer, AI enthusiast, and technology entrepreneur focused on building practical digital solutions through software engineering, artificial intelligence, automation, and emerging technologies.",
    extendedBio: "Holding a Bachelor of Computer Science from Kampala International University and currently pursuing his Master of Computer Science (MSc) with specialization in Data Structures and Artificial Intelligence at the University of Dar es Salaam (UDSM), Peter brings deep algorithmic rigor, machine learning architecture, and robust full-stack engineering to Siribrand Agency. As a technology entrepreneur, he designs and deploys scalable platforms combining software engineering, AI automation, and data-driven decision-making.",
    leadershipVision: "Passionate about leveraging artificial intelligence and computational engineering to solve real-world problems, modernize digital services, and build scalable technology products that compete globally across African and international markets.",
    projects: [
      {
        name: "Copetra AI",
        description: "AI assistant project focused on intelligent interaction, learning, and practical digital assistance.",
        tag: "Artificial Intelligence"
      },
      {
        name: "CopetraNovaX",
        description: "AI/ML-powered trading technology project focused on algorithmic market analysis and automated trading signals.",
        tag: "AI / Machine Learning & FinTech"
      },
      {
        name: "Ajira Market",
        description: "High-scale digital platform designed to connect talent with employment and HR-related opportunities.",
        tag: "Enterprise Web Platform"
      },
      {
        name: "Siribrand Agency",
        description: "Modern digital ecosystem, web architecture, and branding platform engine.",
        tag: "Digital Ecosystem"
      },
      {
        name: "Secured Academic Result Portal",
        description: "Academic management system designed to securely manage student results, attendance, grading algorithms, teachers, parents, and administrators.",
        tag: "Cybersecurity & Academic Systems"
      }
    ],
    image: "/clients/peter-joseph.png",
    skills: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Software Development & Systems Architecture",
      "Web Application Engineering",
      "IT Support & Systems Maintenance",
      "API & Payment Integration",
      "Database Systems & Cloud Infrastructure",
      "Cybersecurity & Secure Systems",
      "Automation & Intelligent Applications"
    ],
    technologies: [
      "Python / AI & ML Frameworks",
      "Data Structures & Algorithms",
      "React / Next.js / TypeScript",
      "Node.js & Express / FastAPI",
      "PostgreSQL / MongoDB / Redis",
      "Tailwind CSS & UI/UX Design",
      "RESTful APIs & GraphQL",
      "Linux / Docker & Cloud Systems"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/Peter0707-ctrl",
      instagram: "https://instagram.com/peterjoh_jim",
      email: "pj0040280@gmail.com",
      whatsapp: "255673190931",
      phone: "+255673190931"
    },
    featured: true,
    order: 2
  },
  {
    id: "chenlee-soja",
    name: "CHENLEE SOJA MKUVASSA",
    role: "Photographer & Editor | Visual Media Specialist",
    department: "Photography, Cinematography & Visual Editing",
    category: "Creative",
    tagline: "High-End Visual Production • Editorial Retouching & Cinematic Storytelling",
    bio: "Chenlee Soja Mkuvassa is a creative photographer and professional visual editor at Siribrand Agency TZ, specializing in high-fashion studio shoots, commercial product photography, corporate portraits, and advanced digital editing.",
    extendedBio: "Chenlee leads visual storytelling through the lens at Siribrand Agency TZ. With expert mastery in studio lighting, color theory, composition, and high-end post-production retouching, Chenlee produces striking visual content for corporate brands, lifestyle campaigns, executive portraits, and events across Tanzania and East Africa.",
    leadershipVision: "Elevating African visual aesthetics and digital storytelling to global industry standards through precision photography, cinematic lighting, and cutting-edge digital editing.",
    projects: [
      {
        name: "Studio & Commercial Shoots",
        description: "High-end studio photography sessions for corporate executives, fashion campaigns, and commercial brands.",
        tag: "Studio Photography"
      },
      {
        name: "Event & Documentary Coverage",
        description: "Live event media, corporate galas, and documentary photography capturing high-impact real-time moments.",
        tag: "Visual Media"
      },
      {
        name: "Post-Production & Color Grading",
        description: "Master-level digital retouching, color grading, and creative compositing for editorial and digital publications.",
        tag: "Digital Editing"
      }
    ],
    image: "/clients/chenlee-soja.png",
    skills: [
      "Studio & Commercial Photography",
      "Digital Photo Retouching & Editing",
      "Cinematic Lighting & Composition",
      "Color Grading & Post-Production",
      "Visual Storytelling & Art Direction",
      "Event & Executive Portraiture"
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "DaVinci Resolve Studio",
      "Capture One",
      "Sony & Canon Cinema / Alpha Systems",
      "Studio Strobe & Lighting Systems"
    ],
    socials: {
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 3
  }
];
