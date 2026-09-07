export interface WhyUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  subPoints: string[];
  iconName: string;
  highlight: string;
}

export const whyUsData: WhyUsItem[] = [
  {
    id: "creative-thinking",
    number: "01",
    title: "Creative Thinking",
    description: "We don't believe in ordinary solutions. We develop creative ideas that help brands stand out.",
    subPoints: [
      "Custom visual concepts crafted from scratch",
      "Distinctive narrative angles that capture audience curiosity",
      "Forward-thinking design that avoids generic template tropes"
    ],
    iconName: "Award",
    highlight: "Bold & Unconventional"
  },
  {
    id: "strategy-driven",
    number: "02",
    title: "Strategy-Driven",
    description: "Every creative decision is backed by a clear understanding of your goals, audience, and market.",
    subPoints: [
      "Deep audience segmentation & competitor intelligence",
      "Clear positioning roadmaps tailored to African & global contexts",
      "Alignment of every visual asset with commercial milestones"
    ],
    iconName: "Compass",
    highlight: "Data-Backed Direction"
  },
  {
    id: "quality-first",
    number: "03",
    title: "Quality First",
    description: "From visuals to communication, we pay attention to the details that shape how people perceive your brand.",
    subPoints: [
      "Pixel-perfect digital craft & rigorous typography standards",
      "Cinema-grade color grading and high-fidelity audio",
      "Premium print production and tactile substrate perfection"
    ],
    iconName: "ShieldCheck",
    highlight: "Uncompromising Standards"
  },
  {
    id: "results-focused",
    number: "04",
    title: "Results Focused",
    description: "Beautiful content is important—but we also focus on engagement, reach, conversions, awareness, and business growth.",
    subPoints: [
      "KPI dashboards tracking ROAS, CAC, and lead volume",
      "Continuous A/B testing of visual hooks and copy angles",
      "Tangible revenue growth prioritized over vanity metrics"
    ],
    iconName: "TrendingUp",
    highlight: "Measurable Impact"
  },
  {
    id: "one-creative-partner",
    number: "05",
    title: "One Creative Partner",
    description: "Branding, photography, videography, social media, digital marketing, and creative strategy—all under one roof.",
    subPoints: [
      "Eliminate fragmented communication between multiple vendors",
      "Seamless brand consistency across digital and physical touchpoints",
      "Dedicated account strategy and turnkey project management"
    ],
    iconName: "Layers",
    highlight: "End-to-End Synergy"
  }
];
