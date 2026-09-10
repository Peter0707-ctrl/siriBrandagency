export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  subCategory: string;
  year: string;
  featured: boolean;
  image: string;
  secondaryImages?: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: {
    stat: string;
    label: string;
  }[];
  deliverables: string[];
  testimonialQuote?: string;
  clientPerson?: string;
}

export const portfolioCategories = [
  "All",
  "Tourism & Travel",
  "Education",
  "Events & Academic",
  "NGO & Non-Profit",
  "Diplomatic & Corporate",
  "Real Estate"
];

export const clientPartnersList = [
  {
    id: "france-embassy",
    name: "Ambassade de France en Tanzanie",
    shortName: "French Embassy TZ",
    category: "Diplomatic Mission & Cultural Affairs",
    tag: "Diplomatic & Embassy",
    description: "High-level cultural event coverage, diplomatic media support, promotional materials, official campaign creative design, and protocol-level documentation.",
    logo: "/clients/france-embassy.png",
    bgStyle: "bg-white p-2.5",
    verified: true
  },
  {
    id: "udiaa",
    name: "UDIAA",
    shortName: "University of Dar es Salaam",
    subName: "Internal Audit Association",
    category: "Higher Education & Academic Governance",
    tag: "Academic Institution",
    description: "Event stage branding, digital invitation cards, summit media coverage, innovation exhibition creatives, and executive forum materials.",
    logo: "/clients/udiaa.png",
    bgStyle: "bg-white p-2.5",
    verified: true
  },
  {
    id: "visit-tanga",
    name: "Visit Tanga",
    shortName: "Destination Marketing",
    category: "Tourism & Destination Marketing",
    tag: "Tourism & Hospitality",
    description: "Destination branding, tourism photography, 4K documentary filmmaking, and digital travel campaigns promoting Tanga's coastline, heritage, and eco-tourism.",
    logo: "/clients/visit-tanga.png",
    bgStyle: "bg-[#0b1c2d] p-1.5",
    verified: true
  },
  {
    id: "brainyield-schools",
    name: "Brain Yield Schools",
    shortName: "Brain Yield Schools",
    category: "Private Education & Academic Excellence",
    tag: "Education",
    description: "Complete visual identity, prospectus design, student enrollment campaigns, social media management, and modern academic digital branding.",
    logo: "/clients/brainyield.png",
    bgStyle: "bg-[#101018] p-1.5",
    verified: true
  },
  {
    id: "perfect-property",
    name: "Perfect Property",
    shortName: "Real Estate & Property",
    category: "Real Estate & Land Development",
    tag: "Real Estate",
    description: "Property marketing campaigns, high-converting digital advertising, branded property collaterals, and customer acquisition lead funnels.",
    logo: "/clients/perfect-property.png",
    bgStyle: "bg-white p-2.5",
    verified: true
  },
  {
    id: "lighters-family",
    name: "Lighters Family Organization",
    shortName: "Lighters Family Org",
    category: "NGO & Community Empowerment",
    tag: "Non-Profit & NGO",
    description: "Impact documentary production, charity campaign visuals, community outreach materials, annual reports, and social advocacy digital media.",
    logo: "/clients/lighters-family.png",
    bgStyle: "bg-white p-2.5",
    verified: true
  },
  {
    id: "copetra-ai",
    name: "Copetra AI",
    shortName: "PJ Copetranova AI Engine",
    category: "Artificial Intelligence & Academic Technology",
    tag: "AI & Tech Product",
    description: "Next-generation academic AI engine, intelligent mathematics & software development solver, progressive web platform, and modern interactive UI/UX architecture.",
    logo: "/clients/copetra-ai.jpg",
    bgStyle: "bg-slate-950 p-1.5",
    link: "https://miraculous-forgiveness-production-10d4.up.railway.app/",
    verified: true
  }
];

export const portfolioProjects: Project[] = [
  {
    id: "visit-tanga-project",
    title: "Visit Tanga: Destination Branding, Tourism Videography & Global Campaign",
    client: "Visit Tanga",
    category: "Tourism & Travel",
    subCategory: "Destination Marketing • 4K Cinematography • Social Media",
    year: "2024 - 2025",
    featured: true,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "Comprehensive destination branding, documentary cinematography, and social media campaign promoting Tanga Region's attractions, beaches, and eco-tourism.",
    challenge: "Elevating Tanga's tourism appeal against traditional northern circuit safari routes and boosting domestic and international visitor interest.",
    solution: "Siribrand produced 4K drone documentaries, social media reels, promotional photography, and targeted digital campaigns showcasing Pangani, Amboni Caves, and Usambara mountains.",
    results: [
      { stat: "2.5M+", label: "Campaign Impressions" },
      { stat: "+140%", label: "Tourism Inquiries" },
      { stat: "100%", label: "Content Delivery" }
    ],
    deliverables: [
      "Tourism Promotion Short Films",
      "Drone Aerial Cinematography",
      "Social Media Reels & Content Calendar",
      "Digital Marketing & Travel Campaigns"
    ],
    testimonialQuote: "Siribrand captured the spirit and beauty of Tanga with world-class visual quality that brought immense attention to our tourism initiatives.",
    clientPerson: "Visit Tanga Initiative"
  },
  {
    id: "brainyield-schools-project",
    title: "Brainyield Schools: Brand Identity, Prospectus & Digital Enrollment Drive",
    client: "Brainyield Schools",
    category: "Education",
    subCategory: "Brand Identity • Academic Prospectus • Digital Growth",
    year: "2024 - 2025",
    featured: true,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "End-to-end rebranding, corporate stationery, school prospectus design, and digital enrollment marketing for Brainyield Schools.",
    challenge: "Standing out in a competitive private educational sector and presenting an authoritative, modern learning environment to parents.",
    solution: "Developed an elegant visual identity, high-quality printed school prospectus, campus photography, and hyper-targeted social media advertising for school admissions.",
    results: [
      { stat: "+210%", label: "Admission Inquiries" },
      { stat: "1,200+", label: "Prospectuses Printed" },
      { stat: "99%", label: "Parent Satisfaction" }
    ],
    deliverables: [
      "School Visual Identity & Logo System",
      "Printed Prospectus, Flyers & Banners",
      "Campus & Student Life Photography",
      "Social Media Ad Campaigns"
    ],
    testimonialQuote: "Working with Siribrand helped us present Brainyield Schools with professional prestige that parents immediately trust.",
    clientPerson: "School Management, Brainyield Schools"
  },
  {
    id: "udiaa-dsm-project",
    title: "UDIAA DSM: Innovation Summit Branding, Stage Design & Media Coverage",
    client: "UDIAA DSM",
    category: "Events & Academic",
    subCategory: "Event Branding • Digital Cards • Live Media Coverage",
    year: "2024",
    featured: true,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    summary: "Experiential stage branding, digital invitation cards, backdrop production, and full video coverage for UDIAA DSM innovation gatherings.",
    challenge: "Delivering fast-turnaround event branding, seamless RSVP management, and dynamic stage backdrops for high-profile academic & innovation delegates.",
    solution: "Designed modern digital event cards for WhatsApp sharing, printed stage roll-up banners and backdrops, and deployed a live camera unit on-site.",
    results: [
      { stat: "800+", label: "Delegates Checked In" },
      { stat: "100%", label: "Event Staging Execution" },
      { stat: "4K", label: "Full Video Highlights" }
    ],
    deliverables: [
      "WhatsApp Digital Event Cards & E-Flyers",
      "Stage Backdrops & Roll-up Banners",
      "High-Resolution Event Photography",
      "Keynote Video & Highlight Reels"
    ],
    testimonialQuote: "Siribrand executed our event visuals and media coverage with exceptional speed and creativity.",
    clientPerson: "Coordination Team, UDIAA DSM"
  },
  {
    id: "lighters-family-project",
    title: "Lighters Family Organization: Impact Documentary & Awareness Campaign",
    client: "Lighters Family Organization",
    category: "NGO & Non-Profit",
    subCategory: "Documentary Film • NGO Branding • Social Advocacy",
    year: "2024 - 2025",
    featured: false,
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1200&auto=format&fit=crop",
    summary: "Human-centered impact documentary production, social media campaign, and community storytelling for Lighters Family Organization.",
    challenge: "Communicating grassroots social empowerment programs compellingly to attract international partners and local donor support.",
    solution: "Produced emotional field video documentaries, branded social awareness posters, and an annual impact overview booklet.",
    results: [
      { stat: "5,000+", label: "Community Reach" },
      { stat: "15", label: "Story Videos Delivered" },
      { stat: "+85%", label: "Partner Engagement" }
    ],
    deliverables: [
      "Field Impact Video Documentaries",
      "Social Advocacy Content & Flyers",
      "Print Materials & Branded T-Shirts",
      "Community Awareness Strategy"
    ],
    testimonialQuote: "Siribrand understood our mission deeply and translated our community work into stories that touch hearts.",
    clientPerson: "Leadership, Lighters Family Organization"
  },
  {
    id: "embassy-of-france-project",
    title: "Embassy of France in Tanzania: Cultural Event Creatives & Media Production",
    client: "Embassy of France in Tanzania",
    category: "Diplomatic & Corporate",
    subCategory: "Diplomatic Event Media • Print Collaterals • Cultural Creatives",
    year: "2024 - 2025",
    featured: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    summary: "Official event collaterals, digital announcements, and premium photo/video documentation for French Embassy cultural and diplomatic initiatives in Tanzania.",
    challenge: "Meeting strict diplomatic visual standards, bilingual communications, and high-precision event print deadlines.",
    solution: "Designed clean editorial posters, digital cards, high-end roll-up backdrops, and provided professional corporate photography coverage.",
    results: [
      { stat: "100%", label: "Protocol Compliance" },
      { stat: "500+", label: "VIP Guests Hosted" },
      { stat: "Premium", label: "Media Quality" }
    ],
    deliverables: [
      "Official Event Posters & Digital Creatives",
      "Diplomatic Event Photography & Media",
      "Backdrop & Stage Print Production",
      "Social Media Announcement Assets"
    ],
    testimonialQuote: "Professional, creative, responsive, and focused on delivering the highest standard of work.",
    clientPerson: "Cultural Department, Embassy of France in Tanzania"
  },
  {
    id: "perfect-property-project",
    title: "Perfect Property: Real Estate Digital Ads, Drone Site Tours & Lead Engine",
    client: "Perfect Property",
    category: "Real Estate",
    subCategory: "Real Estate Marketing • Drone Walkthroughs • Lead Generation",
    year: "2024 - 2025",
    featured: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    summary: "End-to-end property marketing campaigns, 4K drone site walkthroughs, and high-converting advertising for Perfect Property.",
    challenge: "Building trust for land and property buyers and scaling buyer leads across Dar es Salaam, Pwani, and Bagamoyo locations.",
    solution: "Created engaging drone site videos, clear plot map graphics, social media ads targeting salaried professionals, and instant WhatsApp inquiry funnels.",
    results: [
      { stat: "1,500+", label: "Qualified Land Leads" },
      { stat: "120+", label: "Plots Sold" },
      { stat: "4.8x", label: "Ad Return on Spend" }
    ],
    deliverables: [
      "4K Aerial Drone Property Tours",
      "Meta & TikTok Sponsored Ad Creatives",
      "Land Catalogues & Print Banners",
      "Instant WhatsApp Sales Lead Funnel"
    ],
    testimonialQuote: "Siribrand's videos and social media ads directly drove massive land buyers to our sites every single week.",
    clientPerson: "Sales Director, Perfect Property"
  }
];
