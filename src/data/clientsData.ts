export interface ClientSector {
  id: string;
  name: string;
  focus: string;
  description: string;
  tag: string;
  iconName: string;
}

export const clientSectors: ClientSector[] = [
  {
    id: "startups-entrepreneurs",
    name: "Startups & Entrepreneurs",
    focus: "Go-to-Market & Scalable Brand Identity",
    description: "Empowering visionary founders to launch fast with authoritative branding, investor-ready pitch materials, and traction-driving launch campaigns.",
    tag: "High Growth",
    iconName: "Rocket"
  },
  {
    id: "smes-established-businesses",
    name: "SMEs & Established Businesses",
    focus: "Modern Rebranding & Revenue Expansion",
    description: "Revitalizing legacy businesses to dominate digital markets, outpace competitors, and modernize customer touchpoints.",
    tag: "Market Leaders",
    iconName: "Building2"
  },
  {
    id: "corporate-organizations",
    name: "Corporate Organizations",
    focus: "Enterprise Communications & ESG Media",
    description: "Delivering institutional-grade brand governance, annual reports, executive media, and nationwide marketing campaigns.",
    tag: "Enterprise",
    iconName: "Briefcase"
  },
  {
    id: "ngos-non-profits",
    name: "NGOs & Non-Profit Organizations",
    focus: "Impact Storytelling & Donor Engagement",
    description: "Capturing authentic field stories through documentary video, public awareness campaigns, and stakeholder reports.",
    tag: "Social Impact",
    iconName: "HeartHandshake"
  },
  {
    id: "schools-educational-institutions",
    name: "Schools & Educational Institutions",
    focus: "Enrollment Marketing & Digital Campuses",
    description: "Positioning academic institutions as premier learning hubs through virtual campus tours, prospectus design, and recruitment drives.",
    tag: "Education",
    iconName: "GraduationCap"
  },
  {
    id: "events-entertainment-brands",
    name: "Events & Entertainment Brands",
    focus: "Ticket Sales & Experiential Staging",
    description: "Building buzz, viral digital invites, stage visuals, and real-time social coverage for festivals, galas, and concert experiences.",
    tag: "Entertainment",
    iconName: "PartyPopper"
  },
  {
    id: "personal-brands-creators",
    name: "Personal Brands & Creators",
    focus: "Executive Presence & Media Authority",
    description: "Helping C-suite executives, public figures, and thought leaders command respect across podcasts, media, and digital platforms.",
    tag: "Personal Brand",
    iconName: "UserCheck"
  },
  {
    id: "hospitality-tourism-businesses",
    name: "Hospitality & Tourism Businesses",
    focus: "International Bookings & Wildlife Cinematics",
    description: "Attracting luxury safari travelers and hotel guests with 4K drone videography, digital booking engines, and global campaigns.",
    tag: "Destination & Travel",
    iconName: "Compass"
  },
  {
    id: "real-estate-businesses",
    name: "Real Estate Businesses",
    focus: "Property Sales & 3D Architectural Media",
    description: "Selling commercial and residential developments with immersive video walkthroughs, digital brochures, and targeted investor ads.",
    tag: "Property & Dev",
    iconName: "Home"
  },
  {
    id: "retail-ecommerce-brands",
    name: "Retail & E-commerce Brands",
    focus: "Direct-to-Consumer Growth & Packaging",
    description: "Driving shelf appeal and online store sales through tactile packaging, product reels, and high-converting performance marketing.",
    tag: "D2C & Retail",
    iconName: "ShoppingBag"
  }
];
