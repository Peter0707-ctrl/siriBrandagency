export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: 'Executive' | 'Technology' | 'Creative' | 'Operations';
  tagline: string;
  bio: string;
  extendedBio?: string;
  image: string;
  skills: string[];
  technologies: string[];
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    whatsapp?: string;
  };
  featured: boolean;
  order: number;
}

export const teamData: TeamMember[] = [
  {
    id: "sweetbert-macha",
    name: "SWEETBERT MACHA",
    role: "Founder & Chief Executive Officer (CEO)",
    department: "Executive Leadership & Strategy",
    category: "Executive",
    tagline: "Visionary Leadership • Brand Growth & Enterprise Governance",
    bio: "Leading Siribrand Agency TZ with a strategic vision to transform African brands into globally competitive market leaders through creativity, technology, and strategic execution.",
    extendedBio: "Sweetbert Macha steers the overarching corporate direction, client partnerships, and strategic expansion of Siribrand Agency TZ. With deep expertise in brand governance, business development, and market dynamics in East Africa, he ensures every agency initiative creates tangible commercial value and sustainable brand equity for our clients.",
    image: "/sweetbert-macha.png",
    skills: [
      "Executive Brand Strategy",
      "Business Growth & Operations",
      "Client Partnership Governance",
      "Market Expansion & Vision"
    ],
    technologies: [
      "Strategic Planning",
      "Enterprise Management",
      "Financial Strategy",
      "Brand Architecture"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "sweetbert@siribrand.co.tz"
    },
    featured: true,
    order: 1
  },
  {
    id: "peter-joseph",
    name: "PETER JOSEPH",
    role: "AI Engineer • Web Developer • UI/UX & Digital Solutions",
    department: "Technology & Digital Architecture",
    category: "Technology",
    tagline: "Building Intelligent Systems & Modern Digital Experiences",
    bio: "Experienced in AI engineering, web development, UI/UX design, and digital solutions, with a focus on building intelligent systems and modern digital experiences that transform ideas into practical technology solutions.",
    extendedBio: "Leading Siribrand's technology backbone, Peter bridges the nexus of next-generation artificial intelligence, high-performance web engineering, and user-centric interface architecture. His engineering philosophy centers on creating lightning-fast, scalable digital products that solve concrete business challenges across African and global markets.",
    image: "/peter-joseph.png",
    skills: [
      "AI Systems Architecture",
      "Full-Stack Web Engineering",
      "UI/UX Design Systems",
      "Cloud & API Infrastructure",
      "Interactive Frontend Development",
      "Performance Optimization"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Python / AI Frameworks",
      "Tailwind CSS",
      "Node.js",
      "Figma",
      "REST & GraphQL"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com",
      email: "peter@siribrand.co.tz",
      whatsapp: "255673190931"
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
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
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
      email: "creative@siribrand.co.tz"
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
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop",
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
      email: "media@siribrand.co.tz"
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
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
      email: "marketing@siribrand.co.tz"
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
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
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
      email: "events@siribrand.co.tz"
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
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
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
      email: "partnerships@siribrand.co.tz"
    },
    featured: false,
    order: 7
  }
];
