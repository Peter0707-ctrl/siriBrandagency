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
    department: "Executive Leadership & Corporate Brand Strategy",
    category: "Executive",
    tagline: "Visionary Corporate Leadership • Brand Architecture & Enterprise Governance",
    bio: "Founder & Chief Executive Officer leading Siribrand Agency TZ with high-level corporate brand architecture, multi-sector media expansion, and strategic enterprise growth across Tanzania and East Africa.",
    extendedBio: "Sweetbert Macha directs the executive vision, corporate governance, and multi-disciplinary expansion of Siribrand Agency TZ. Renowned for strategic brand engineering, high-level diplomatic and institutional partnerships, and creative media mastery, he guides enterprises, academic institutions, and national initiatives from conceptual foundations to dominant market leadership.",
    image: "/clients/sweetbert-macha.png",
    skills: [
      "Executive Brand Architecture",
      "Corporate Strategy & Governance",
      "Diplomatic & Institutional Media",
      "High-Impact Commercial Campaigns",
      "Market Expansion & Business Growth",
      "Creative Direction & Leadership"
    ],
    technologies: [
      "Brand Positioning Strategy",
      "Enterprise Governance",
      "Commercial Media Direction",
      "Campaign ROI Architecture"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "siribrandagencytz@gmail.com"
    },
    featured: true,
    order: 1
  },
  {
    id: "peter-joseph",
    name: "PETER JOSEPH MSIRA",
    role: "AI Systems Engineer • Full-Stack Web Developer • UI/UX Architect",
    department: "Artificial Intelligence & Software Engineering",
    category: "Technology",
    tagline: "Master's Scholar in Data Structures & AI (UDSM) • Intelligent Web Architecture",
    bio: "AI Engineer, Full-Stack Web Developer, and UI/UX Designer with advanced academic specialization in Data Structures, Artificial Intelligence, and Computer Science at the University of Dar es Salaam (UDSM).",
    extendedBio: "Peter Joseph Msira spearheads the artificial intelligence, algorithmic infrastructure, and digital engineering ecosystem at Siribrand Agency TZ. With advanced postgraduate academic mastery in Data Structures, Algorithms, and Artificial Intelligence in Computer Science at the University of Dar es Salaam (UDSM), Peter engineers mission-critical web applications, enterprise POS systems, and AI-driven automation pipelines. His technical prowess combines deep computational theory with cutting-edge modern UI/UX design, empowering African and international brands with ultra-fast, intelligent, and scalable digital platforms.",
    image: "/clients/peter-joseph.png",
    skills: [
      "Data Structures & Advanced Algorithms",
      "Artificial Intelligence & Machine Learning",
      "Full-Stack Web & Mobile App Engineering",
      "Enterprise UI/UX Design Systems",
      "POS & Cloud Software Architecture",
      "High-Performance Computing & APIs"
    ],
    technologies: [
      "Python / PyTorch & AI Frameworks",
      "Data Structures & Algorithm Design",
      "React, Next.js & TypeScript",
      "Tailwind CSS & Modern UI",
      "Node.js & Cloud Systems",
      "PostgreSQL & REST/GraphQL",
      "Figma UI/UX & Design Systems"
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
