export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  category: string;
  items: string[];
  features: string[];
  metrics: { label: string; value: string };
  image: string;
  bgGradient: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Digital Marketing",
    tagline: "Drive Attention & Measurable ROI",
    shortDesc: "We help brands establish a strong digital presence and turn online attention into meaningful business results.",
    fullDesc: "From search engines to high-performing digital channels, our data-driven growth strategies blend audience psychology, precise targeting, and creative storytelling to maximize reach, conversions, and measurable business growth.",
    category: "Growth & Media",
    items: [
      "Social Media Management",
      "Digital Marketing Strategy",
      "Content Marketing",
      "Social Media Advertising",
      "Campaign Management",
      "Audience & Competitor Research",
      "SEO & Online Visibility",
      "Performance Analysis & Reporting"
    ],
    features: [
      "Multi-channel audience retargeting",
      "Real-time ROI dashboard & attribution tracking",
      "Full-funnel conversion rate optimization"
    ],
    metrics: { label: "Average Campaign Reach", value: "3.5M+" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-blue-600/20 via-indigo-900/10 to-transparent"
  },
  {
    id: "branding-graphic-design",
    number: "02",
    title: "Branding & Graphic Design",
    tagline: "Distinctive & Memorable Visual Identities",
    shortDesc: "We create distinctive visual identities that make brands recognizable, professional, and memorable.",
    fullDesc: "A great brand isn't just a logo—it is how your company is felt, remembered, and trusted. We engineer timeless visual design systems, brand guidelines, and physical marketing collaterals that position your business at the highest echelon of your market.",
    category: "Identity & Visuals",
    items: [
      "Brand Strategy",
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines",
      "Marketing Materials",
      "Posters & Flyers",
      "Business Profiles",
      "Corporate Branding",
      "Packaging Design"
    ],
    features: [
      "End-to-end design system design tokens",
      "Extensive vector brand guideline documentation",
      "Premium print-ready CMYK & digital RGB packaging specs"
    ],
    metrics: { label: "Identities Crafted", value: "85+" },
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-cyan-600/20 via-blue-900/10 to-transparent"
  },
  {
    id: "photography-videography",
    number: "03",
    title: "Photography & Videography",
    tagline: "Cinematic Visual Storytelling",
    shortDesc: "We capture your brand, products, people, and events through high-quality visual storytelling.",
    fullDesc: "We bring stories to life through cinematic 4K video production, high-fashion lighting, product staging, and emotional documentary storytelling tailored for both large screens and rapid-consumption social channels.",
    category: "Cinematics & Media",
    items: [
      "Corporate Photography",
      "Product Photography",
      "Event Photography",
      "Promotional Videos",
      "Corporate Videos",
      "Social Media Reels",
      "Interviews",
      "Documentary Production",
      "Event Coverage"
    ],
    features: [
      "Cinema-grade 4K/6K cinema camera workflows",
      "Dedicated sound engineering & pro color grading",
      "Rapid turnaround for social & broadcast formats"
    ],
    metrics: { label: "Cinematic Video Views", value: "12M+" },
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-indigo-600/20 via-slate-900/10 to-transparent"
  },
  {
    id: "social-media-management",
    number: "04",
    title: "Social Media Management",
    tagline: "Active, Relevant & High-Engagement",
    shortDesc: "We take the pressure off managing your social platforms while keeping your brand active, relevant, and engaging.",
    fullDesc: "We handle your entire social media ecosystem—from strategic monthly editorial calendars and short-form video production to active community moderation and granular monthly performance analytics.",
    category: "Community & Content",
    items: [
      "Content Planning",
      "Content Creation",
      "Caption Writing",
      "Community Management",
      "Reels & Short-form Videos",
      "Page Management",
      "Monthly Content Calendars",
      "Analytics & Reporting"
    ],
    features: [
      "Weekly trends forecasting and rapid audio sync",
      "Interactive audience nurture & DM management",
      "Comprehensive monthly growth & engagement retrospectives"
    ],
    metrics: { label: "Monthly Impressions Managed", value: "20M+" },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-violet-600/20 via-blue-900/10 to-transparent"
  },
  {
    id: "web-digital-solutions",
    number: "05",
    title: "POS, Web & Mobile App Development",
    tagline: "Point of Sale Systems, Web Platforms & Mobile Applications",
    shortDesc: "Tunatengeneza Mifumo ya POS (Mauzo & Stoo), Tovuti (Websites) na Mobile & Web Apps za kisasa kwa biashara na taasisi.",
    fullDesc: "Kutoka mifumo madhubuti ya POS (Point of Sale Systems) ya kusimamia mauzo, risiti, na stoo, hadi tovuti za kisasa (Websites) na mobile applications za iOS na Android. Tunajenga mifumo ya kidijitali inayorahisisha uendeshaji wa biashara yako 24/7.",
    category: "Engineering & Tech",
    items: [
      "POS Systems (Point of Sale & Stoo)",
      "Website & Web Application Design",
      "Mobile App Development (iOS & Android)",
      "E-Commerce & Online Stores",
      "Business Management Software",
      "Landing Pages & Funnels",
      "Database & Cloud Systems",
      "WhatsApp & Payment Gateway Integration"
    ],
    features: [
      "Mifumo ya POS yenye ripoti za kila siku, risiti & stock tracking",
      "Websites na Mobile Apps za kisasa zenye kasi ya juu sana",
      "Uunganishaji wa malipo (M-Pesa, Tigo Pesa, Airtel Money, Kadi & Benki)"
    ],
    metrics: { label: "Systems & Apps Built", value: "45+" },
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-blue-500/20 via-sky-950/10 to-transparent"
  },
  {
    id: "creative-campaigns",
    number: "06",
    title: "Creative Campaigns",
    tagline: "Inspire Action & Captivate Attention",
    shortDesc: "From concept to execution, we develop campaigns designed to attract attention and inspire action.",
    fullDesc: "We conceptualize multi-channel creative campaigns that disrupt market noise. Combining cultural insights, daring visual concepts, influencer synergy, and high-impact digital promotions that move the needle.",
    category: "Strategy & Creative",
    items: [
      "Campaign Strategy",
      "Creative Concepts",
      "Promotional Campaigns",
      "Product Launches",
      "Event Campaigns",
      "Awareness Campaigns",
      "Digital Advertising"
    ],
    features: [
      "Integrated 360-degree cross-platform rollout",
      "Creative copywriting and viral hook engineering",
      "Direct conversion funnel and lead capture tracking"
    ],
    metrics: { label: "Campaign Engagement Rate", value: "4.8x Avg" },
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-amber-600/15 via-blue-900/10 to-transparent"
  },
  {
    id: "digital-event-cards",
    number: "07",
    title: "Digital Event Cards",
    tagline: "Modern, Interactive & Shareable Invites",
    shortDesc: "We design modern, engaging digital cards that make it easy to announce, promote, and share events across digital platforms.",
    fullDesc: "Say goodbye to boring invites. Our digital cards feature interactive links, RSVP buttons, Google Maps location integration, and high-resolution WhatsApp-optimized layouts that impress guests immediately.",
    category: "Events & Digital",
    items: [
      "Digital Invitations",
      "Event Announcement Cards",
      "Save-the-Date Designs",
      "Birthday & Wedding Cards",
      "Corporate Event Cards",
      "Event Posters & E-flyers",
      "Social Media Event Creatives",
      "WhatsApp-Ready Digital Cards"
    ],
    features: [
      "One-click WhatsApp & SMS shareable layouts",
      "Interactive calendar and GPS venue pin embeds",
      "Elegant motion animations and micro-typography"
    ],
    metrics: { label: "Event Cards Delivered", value: "500+" },
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-rose-600/15 via-indigo-900/10 to-transparent"
  },
  {
    id: "event-planning-organizing",
    number: "08",
    title: "Event Planning & Organizing",
    tagline: "Flawless Execution from Concept to Reality",
    shortDesc: "From concept to execution, we help plan and coordinate memorable events that are professionally organized and smoothly delivered.",
    fullDesc: "We take the complexity out of event logistics. From large-scale corporate conferences, tech summits, and brand product launches to VIP galas, we deliver stage design, branding, guest flow, vendor management, and live media coverage.",
    category: "Experiential & Events",
    items: [
      "Event Concept & Planning",
      "Venue & Logistics Coordination",
      "Event Branding & Decoration",
      "Guest Management",
      "Program & Schedule Coordination",
      "Vendor Coordination",
      "Event Promotion & Marketing",
      "Photography & Videography",
      "Corporate & Social Events",
      "Conferences, Launches & Campaign Events"
    ],
    features: [
      "3D venue staging & spatial brand installations",
      "Real-time guest registration & security protocol",
      "Live broadcast & social media team on-site"
    ],
    metrics: { label: "Attendees Managed", value: "25,000+" },
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-emerald-600/15 via-blue-900/10 to-transparent"
  },
  {
    id: "tourism-travel-marketing",
    number: "09",
    title: "Tourism & Travel Marketing",
    tagline: "Showcase Africa's Beauty to the World",
    shortDesc: "We help tourism businesses and destinations attract more visitors through creative storytelling, digital marketing, and memorable travel experiences.",
    fullDesc: "Tanzania is a global destination. We help safari operators, eco-lodges, hotels, and tourism boards reach high-net-worth international and domestic travelers through immersive visual content, targeted global campaigns, and premium booking portals.",
    category: "Hospitality & Tourism",
    items: [
      "Tourism Marketing Strategy",
      "Destination Promotion",
      "Tour Package Promotion",
      "Travel Content Creation",
      "Tourism Photography & Videography",
      "Social Media Marketing",
      "Digital Campaigns",
      "Tour & Travel Brand Development",
      "Promotional Videos",
      "Tourism Event & Experience Promotion"
    ],
    features: [
      "Drone cinematography & wildlife storytelling",
      "Multilingual international PPC advertising (US, Europe, Asia)",
      "High-converting itinerary landing page architectures"
    ],
    metrics: { label: "International Reach", value: "45+ Countries" },
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-amber-600/20 via-orange-950/10 to-transparent"
  },
  {
    id: "printing-production",
    number: "10",
    title: "Printing & Production",
    tagline: "Physical Craft & Premium Material Finish",
    shortDesc: "We transform digital designs into high-quality physical materials that bring brands to life and create a professional impression.",
    fullDesc: "High-precision physical production using premium stock, embossed foils, matte laminates, large-format UV printing, and custom corporate merchandising that leaves a tactile, lasting impression.",
    category: "Print & Production",
    items: [
      "Business Cards",
      "Flyers & Brochures",
      "Posters & Banners",
      "Roll-up Banners",
      "Pull-up & Backdrop Designs",
      "Event Tickets & Invitations",
      "Stickers & Labels",
      "T-shirts & Branded Apparel",
      "Corporate Stationery",
      "Certificates",
      "Calendars",
      "Signage & Billboards",
      "Promotional Materials",
      "Event Branding & Print Materials"
    ],
    features: [
      "Premium heavy card stocks (350gsm–600gsm with foil & spot UV)",
      "Large-format outdoor weatherproof vinyl & backlit displays",
      "Strict color calibration matching exact Pantone brand specs"
    ],
    metrics: { label: "Print Items Produced", value: "100,000+" },
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1200&auto=format&fit=crop",
    bgGradient: "from-sky-600/20 via-blue-900/10 to-transparent"
  }
];
