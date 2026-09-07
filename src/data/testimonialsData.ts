export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Siribrand understood our vision and transformed it into creative content that truly represented our brand.",
    author: "Client Partner",
    role: "Managing Director",
    company: "Tanzanian Enterprise Partner",
    location: "Dar es Salaam, Tanzania",
    projectType: "Brand Strategy & Digital Transformation",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-2",
    quote: "Professional, creative, responsive, and focused on delivering quality.",
    author: "Corporate Executive",
    role: "Head of Marketing & Communications",
    company: "Regional Technology Corporation",
    location: "Arusha, Tanzania",
    projectType: "Corporate Branding & Media Campaigns",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-3",
    quote: "Working with Siribrand helped us present our brand more professionally and connect better with our audience.",
    author: "Brand Founder",
    role: "Chief Executive Officer",
    company: "Tourism & Hospitality Group",
    location: "Zanzibar, Tanzania",
    projectType: "Global Tourism Marketing & Web Architecture",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop"
  }
];
