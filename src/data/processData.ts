export interface ProcessStep {
  step: string;
  name: string;
  headline: string;
  description: string;
  details: string[];
  deliverable: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    headline: "Uncovering Core Truths & Opportunities",
    description: "We learn about your brand, goals, audience, competitors, and challenges.",
    details: [
      "Stakeholder interviews and brand vision alignment",
      "In-depth market landscape & competitor gap analysis",
      "Audience persona identification & behavioral mapping"
    ],
    deliverable: "Discovery & Opportunity Blueprint",
    duration: "Phase 1"
  },
  {
    step: "02",
    name: "STRATEGIZE",
    headline: "Architecting the Roadmap to Victory",
    description: "We develop a clear creative and marketing strategy tailored to your objectives.",
    details: [
      "Core brand positioning & narrative framework",
      "Channel architecture & distribution strategy",
      "Key performance indicators & milestone timelines"
    ],
    deliverable: "Creative & Growth Roadmap",
    duration: "Phase 2"
  },
  {
    step: "03",
    name: "CREATE",
    headline: "Crafting High-Impact Brand Assets",
    description: "Our creative team develops compelling visuals, content, campaigns, and brand experiences.",
    details: [
      "Visual identity systems, typography & digital design",
      "Cinematic video production, photo shoots & audio design",
      "High-converting web architecture & interactive UI/UX"
    ],
    deliverable: "Master Creative Production Suite",
    duration: "Phase 3"
  },
  {
    step: "04",
    name: "LAUNCH",
    headline: "Orchestrating Market Rollout",
    description: "We put your strategy into action across the right platforms and channels.",
    details: [
      "Omnichannel media campaign deployment & advertising",
      "Live event staging & social media broadcast rollout",
      "Performance tracking & real-time response monitoring"
    ],
    deliverable: "Live Campaign & Asset Rollout",
    duration: "Phase 4"
  },
  {
    step: "05",
    name: "MEASURE & IMPROVE",
    headline: "Iterating for Compounded Growth",
    description: "We analyze performance, identify opportunities, and continuously improve your marketing efforts.",
    details: [
      "Granular attribution & conversion rate reporting",
      "Audience sentiment analysis & creative fatigue mitigation",
      "Continuous optimization loops for maximum scale"
    ],
    deliverable: "Monthly ROI & Growth Intelligence",
    duration: "Continuous"
  }
];
