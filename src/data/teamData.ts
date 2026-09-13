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
    id: "creative-director",
    name: "AMANI MWANGI",
    role: "Creative Director & Lead Brand Strategist",
    department: "Creative Direction & Brand Identity",
    category: "Creative",
    tagline: "Shaping Timeless Visual Systems & Brand Stories",
    bio: "Directing brand identity systems, typography, corporate guidelines, and multi-channel creative storytelling that command market recognition.",
    extendedBio: "Amani oversees all visual assets produced at Siribrand. From vector logo architecture to luxury packaging and editorial design, he ensures brand consistency across every physical and digital medium.",
    image: "",
    skills: [
      "Art Direction",
      "Brand Identity Systems",
      "Editorial Design",
      "Typography & Color Theory"
    ],
    technologies: [
      "Adobe Illustrator",
      "Photoshop",
      "Figma",
      "Cinema 4D",
      "InDesign"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: false,
    order: 3
  },
  {
    id: "head-of-media",
    name: "KELVIN MTALII",
    role: "Head of Media Production & Cinematography",
    department: "Media & Film Production",
    category: "Creative",
    tagline: "Cinema-Grade Visual Storytelling for Screen & Stage",
    bio: "Specializing in commercial cinematography, drone wildlife documentaries, 4K promotional films, and live multi-camera broadcast coverage across East Africa.",
    extendedBio: "Kelvin brings over 8 years of cinema camera experience, directing high-impact commercial campaigns, safari documentaries, and corporate galas with broadcast-level color grading and sound design.",
    image: "",
    skills: [
      "Cinema Direction & Lighting",
      "Aerial Drone Cinematography",
      "DaVinci Color Grading",
      "Commercial Sound Design"
    ],
    technologies: [
      "RED / Sony FX Cine Systems",
      "DaVinci Resolve Studio",
      "Premiere Pro",
      "After Effects"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: false,
    order: 4
  },
  {
    id: "digital-marketing-lead",
    name: "FATMA HASSAN",
    role: "Head of Digital Marketing & Social Strategy",
    department: "Growth & Performance Marketing",
    category: "Operations",
    tagline: "Data-Driven Audience Growth & Paid Media Scaling",
    bio: "Driving audience acquisition, SEO, social media management, and high-converting paid ad funnels that deliver measurable ROI for ambitious brands.",
    extendedBio: "Fatma orchestrates Siribrand's performance marketing engine, managing multi-million impression campaigns across Meta, Google, TikTok, and LinkedIn with granular conversion attribution.",
    image: "",
    skills: [
      "Performance Ads (Meta & Google)",
      "Social Media Editorial Strategy",
      "Funnel & CRO Optimization",
      "Audience Data Analytics"
    ],
    technologies: [
      "Meta Ads Manager",
      "Google Analytics 4",
      "SEMrush",
      "HubSpot"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: false,
    order: 5
  },
  {
    id: "events-operations-lead",
    name: "JOSEPHAT SHAYO",
    role: "Head of Event Planning & Production Logistics",
    department: "Experiential & Event Operations",
    category: "Operations",
    tagline: "Flawless Execution from Stage Design to Guest Flow",
    bio: "Coordinating corporate conferences, summits, product launches, digital invitations, and stage branding with seamless precision.",
    extendedBio: "Josephat leads on-ground event operations across Tanzania, managing venue logistics, audiovisual vendors, VIP protocol, and high-impact physical print staging.",
    image: "",
    skills: [
      "Event Concept & Staging",
      "Vendor & Venue Logistics",
      "Digital Event Cards & RSVP",
      "Large-Scale Print Production"
    ],
    technologies: [
      "Event Logistics Software",
      "Stage CAD Layouts",
      "NFC Badging",
      "Print Specs Management"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: false,
    order: 6
  },
  {
    id: "tourism-client-relations",
    name: "NEEMA KILIMBA",
    role: "Tourism Marketing & Client Relations Lead",
    department: "Hospitality & Strategic Partnerships",
    category: "Operations",
    tagline: "Connecting African Destinations with Global Travelers",
    bio: "Managing tourism campaigns, safari operator branding, international traveler booking journeys, and key enterprise client accounts.",
    extendedBio: "Neema brings specialized acumen in East African travel marketing, working with eco-lodges, tour operators, and destination boards to drive high-value international bookings.",
    image: "",
    skills: [
      "Tourism Destination Marketing",
      "Global Traveler Funnels",
      "Key Account Management",
      "Itinerary Web Systems"
    ],
    technologies: [
      "Travel CRM Systems",
      "Global PPC Targeting",
      "Booking Portals",
      "Client Retainer Governance"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: false,
    order: 7
  }
];
