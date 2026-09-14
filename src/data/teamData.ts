export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: 'Executive' | 'Technology' | 'Creative' | 'Operations';
  tagline: string;
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
    tagline: "Visionary Leadership • Corporate Strategy & Brand Governance",
    bio: "Directs overall corporate vision, enterprise client partnerships, and strategic market expansion across East Africa.",
    extendedBio: "Sweetbert Macha steers corporate governance and creative business strategy at Siribrand Agency TZ, helping organizations scale market dominance through premium branding and digital innovation.",
    leadershipVision: "To establish Siribrand Agency as East Africa's leading benchmark for high-impact branding, media production, and digital solutions.",
    projects: [
      {
        name: "Enterprise Brand Architecture",
        description: "Leading corporate repositioning and brand identity overhauls for top Tanzanian enterprises.",
        tag: "Brand Governance"
      },
      {
        name: "Strategic Market Alliances",
        description: "Forming multi-sector commercial partnerships across government, tourism, and private sectors.",
        tag: "Commercial Expansion"
      }
    ],
    image: "/clients/sweetbert-macha.png",
    skills: [
      "Executive Brand Strategy",
      "Corporate Governance",
      "Client Partnership Strategy",
      "Market Expansion",
      "Commercial Media Direction",
      "Enterprise Positioning"
    ],
    technologies: [
      "Strategic Planning Systems",
      "Enterprise Management",
      "Financial Strategy",
      "Brand Architecture",
      "Multi-Channel Campaigns"
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
    name: "PETER JOSEPH",
    role: "Computer Scientist & Full-Stack Software Developer",
    department: "Technology & Software Engineering",
    category: "Technology",
    tagline: "Building High-Performance Web Applications, Systems Architecture & Digital Platforms",
    bio: "Architects scalable software applications, custom management systems, web ecosystems, and secure database infrastructures.",
    extendedBio: "Peter Joseph leads technology innovation and software engineering at Siribrand Agency TZ. He designs and deploys high-performance web applications, custom management portals, and digital tools that power seamless operations for modern enterprises.",
    projects: [
      {
        name: "Copetra Platform",
        description: "Enterprise management system focused on automated business operations and task workflows.",
        tag: "Software Systems"
      },
      {
        name: "CopetraNovaX",
        description: "Analytical computational platform engineered for market data visualization.",
        tag: "FinTech Platform"
      },
      {
        name: "Ajira Market",
        description: "Scalable recruitment ecosystem connecting modern African talent with verified opportunities.",
        tag: "Enterprise Platform"
      },
      {
        name: "Siribrand Platform",
        description: "High-performance digital ecosystem and interactive agency web application.",
        tag: "Web Engineering"
      },
      {
        name: "Secured Academic Portal",
        description: "Automated student record and academic grading system with secure authentication protocols.",
        tag: "Secure Systems"
      }
    ],
    image: "/clients/peter-joseph.png",
    skills: [
      "Software Systems Architecture",
      "Data Structures & Algorithm Design",
      "Full-Stack Web Development",
      "API & Payment Gateways",
      "Database & Cloud Infrastructure",
      "Cybersecurity & Application Security",
      "Process Automation"
    ],
    technologies: [
      "Python / Backend Engineering",
      "React / Next.js / TypeScript",
      "Node.js / Express / FastAPI",
      "PostgreSQL / MongoDB / Redis",
      "Tailwind CSS & UI/UX Systems",
      "RESTful APIs & GraphQL",
      "Docker / Linux & Cloud Deployments"
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
    tagline: "High-End Visual Production • Studio Photography & Master Retouching",
    bio: "Specializes in high-fashion studio shoots, commercial brand photography, corporate portraits, and advanced digital retouching.",
    extendedBio: "Chenlee Soja Mkuvassa leads visual photography and digital post-production at Siribrand Agency TZ. With expert mastery in lighting, composition, and color science, Chenlee produces striking visual assets for corporate brands, lifestyle campaigns, and media productions across Tanzania.",
    leadershipVision: "Setting new benchmarks in African commercial photography and cinematic visual art through precision lighting and master retouching.",
    projects: [
      {
        name: "Studio & Commercial Shoots",
        description: "High-end studio photography sessions for corporate executives, fashion campaigns, and commercial brands.",
        tag: "Studio Photography"
      },
      {
        name: "Event & Documentary Coverage",
        description: "Live event media, corporate galas, and documentary photography capturing high-impact moments.",
        tag: "Visual Media"
      },
      {
        name: "Post-Production & Color Grading",
        description: "Master-level digital retouching, color grading, and creative compositing for digital publications.",
        tag: "Digital Editing"
      }
    ],
    image: "/clients/chenlee-soja.png",
    skills: [
      "Studio & Commercial Photography",
      "High-End Photo Retouching",
      "Cinematic Lighting & Composition",
      "Color Grading & Post-Production",
      "Visual Storytelling",
      "Executive Portraiture"
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "DaVinci Resolve Studio",
      "Capture One",
      "Sony & Canon Cinema Systems",
      "Studio Strobe Lighting"
    ],
    socials: {
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 3
  },
  {
    id: "nathan-kwilasa",
    name: "NATHAN KWILASA",
    role: "Head of Social Media Management & Marketing Strategist",
    department: "Social Media Management & Digital Growth",
    category: "Operations",
    tagline: "Viral Audience Growth • Social Architecture & Paid Ad Funnels",
    bio: "Drives viral audience growth, content calendar strategy, social community engagement, and high-converting paid ad campaigns.",
    extendedBio: "Nathan Kwilasa leads social media architecture and paid growth marketing at Siribrand Agency TZ. Combining high-retention content creation with data-driven paid advertising funnels, Nathan scales brand presence and customer conversions across Instagram, TikTok, Facebook, and LinkedIn.",
    leadershipVision: "Maximizing digital attention and conversion rates by transforming social audiences into dedicated brand customers.",
    projects: [
      {
        name: "Omnichannel Brand Growth Campaigns",
        description: "Executing viral social media growth and engagement strategies for corporate and lifestyle brands.",
        tag: "Social Media Strategy"
      },
      {
        name: "Performance Paid Ads & Funnels",
        description: "Designing high-converting meta and social ad campaigns with precise audience segmentation and ROI tracking.",
        tag: "Performance Marketing"
      },
      {
        name: "Content Calendars & Community Management",
        description: "Managing daily editorial calendars, community engagement, brand tone, and customer touchpoint optimization.",
        tag: "Community Governance"
      }
    ],
    image: "/clients/nathan-kwilasa.jpg",
    skills: [
      "Social Media Management & Growth",
      "Digital Marketing Strategy",
      "Viral Content Strategy",
      "Paid Ads & Performance Marketing",
      "Audience Analytics & Segmentation",
      "Community Building & Engagement"
    ],
    technologies: [
      "Meta Ads Manager",
      "Instagram & TikTok Algorithms",
      "Google Analytics & SEMrush",
      "Creative Editing Suites",
      "Social Media Scheduling Tools",
      "Conversion Rate Optimization (CRO)"
    ],
    socials: {
      instagram: "https://instagram.com/nathan_e.k",
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 4
  },
  {
    id: "paulina-wambura",
    name: "PAULINA YOHANA WAMBURA",
    role: "Head of Marketing & Strategic Partnerships",
    department: "Corporate Marketing Strategy & Brand Growth",
    category: "Operations",
    tagline: "Corporate Marketing Leadership • Brand Expansion & Strategic Alliances",
    bio: "Leads corporate marketing strategy, enterprise client partnerships, public relations, and multi-channel promotional campaigns.",
    extendedBio: "Paulina Yohana Wambura directs commercial marketing and corporate alliances at Siribrand Agency TZ. With expertise in brand positioning, public relations, and experiential marketing, Paulina expands market reach and commercial value for enterprise clients across East Africa.",
    leadershipVision: "Positioning African enterprises as dominant market leaders through strategic marketing frameworks and high-value partnerships.",
    projects: [
      {
        name: "Enterprise Market Expansion",
        description: "Spearheading multi-sector brand positioning and commercial marketing campaigns for corporate clients.",
        tag: "Market Strategy"
      },
      {
        name: "Brand Partnerships & PR",
        description: "Securing strategic alliances, sponsor alignments, and public relations campaigns.",
        tag: "Strategic Partnerships"
      },
      {
        name: "Experiential Campaign Delivery",
        description: "Orchestrating interactive marketing roadshows, innovation summits, and premium brand experiences.",
        tag: "Brand Experience"
      }
    ],
    image: "/clients/paulina-wambura.png",
    skills: [
      "Corporate Marketing Strategy",
      "Brand Positioning & PR",
      "Market Research & Consumer Insights",
      "Strategic Brand Partnerships",
      "Campaign Management & Growth",
      "Experiential Marketing"
    ],
    technologies: [
      "Market Analytics Tools",
      "CRM & Client Management",
      "Omnichannel Marketing Systems",
      "Media Strategy Platforms",
      "Performance Metrics Reporting"
    ],
    socials: {
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 5
  },
  {
    id: "zamda-kalema",
    name: "ZAMDA YUSUPH KALEMA",
    role: "Finance Director & Corporate Controller",
    department: "Corporate Finance, Accounting & Commercial Governance",
    category: "Executive",
    tagline: "Fiscal Integrity • Capital Allocation & Commercial Governance",
    bio: "Directs agency financial forecasting, corporate budgeting, statutory tax compliance, and commercial fiscal operations.",
    extendedBio: "Zamda Yusuph Kalema oversees financial architecture, compliance, and capital allocation at Siribrand Agency TZ. With extensive expertise in corporate accounting, fiscal risk management, and statutory tax governance, Zamda ensures high financial resilience and steady growth for the agency.",
    leadershipVision: "Ensuring sustainable agency scale and investor confidence through disciplined fiscal stewardship and transparent financial governance.",
    projects: [
      {
        name: "Corporate Budgeting & Financial Control",
        description: "Designing multi-department financial forecasts, expenditure controls, and agency fiscal frameworks.",
        tag: "Financial Control"
      },
      {
        name: "Commercial Contract & Retainer Governance",
        description: "Structuring client billing schedules, enterprise retainers, and procurement governance.",
        tag: "Corporate Finance"
      },
      {
        name: "Statutory & Tax Compliance Architecture",
        description: "Ensuring regulatory audit readiness, TRA compliance, and corporate financial transparency.",
        tag: "Fiscal Compliance"
      }
    ],
    image: "/clients/zamda-kalema.jpg",
    skills: [
      "Corporate Financial Planning",
      "Budgeting & Cost Optimization",
      "Statutory & Tax Compliance",
      "Risk Management & Auditing",
      "Cashflow Forecasting",
      "Financial Analysis & Reporting"
    ],
    technologies: [
      "Financial Accounting ERPs",
      "Financial Modeling Systems",
      "Excel Advanced Analytics",
      "Payroll & Statutory Systems",
      "Enterprise Billing Platforms"
    ],
    socials: {
      email: "siribrandagencytz@gmail.com",
      whatsapp: "255692590012"
    },
    featured: true,
    order: 6
  }
];
