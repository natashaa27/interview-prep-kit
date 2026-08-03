import type { Framework, InterviewExperience, Handbook, Resource } from "../types";

// ─── FRAMEWORKS ─────────────────────────────────────────────────────────────
// Standard, well-known consulting case frameworks to seed the section.
// More can be added alongside real casebooks later.

export const frameworks: Framework[] = [
  {
    id: 1,
    name: "Profitability Framework",
    subtitle: "For profit-drop / profit-improvement cases",
    source: "Standard consulting framework",
    steps: [
      {
        letter: "1",
        title: "Clarify the Objective",
        description:
          "Confirm what 'profit' means here (net income, margin, segment profit) and the timeframe of the drop or target.",
      },
      {
        letter: "2",
        title: "Break Down Profit = Revenue − Cost",
        description:
          "Revenue = Price × Volume, split by segment/product/region. Cost = Fixed + Variable, split by cost category.",
      },
      {
        letter: "3",
        title: "Identify the Driver",
        description:
          "Isolate whether the issue is revenue-side (price, volume, mix) or cost-side (input costs, overhead, efficiency).",
      },
      {
        letter: "4",
        title: "Quantify & Prioritize",
        description:
          "Size each lever's impact on profit. Focus on the 1-2 levers with the largest, most controllable impact.",
      },
      {
        letter: "5",
        title: "Recommend & Caveat",
        description:
          "State a clear recommendation, expected impact, implementation risk, and next steps to validate.",
      },
    ],
  },
  {
    id: 2,
    name: "Market Sizing (Top-Down / Bottom-Up)",
    subtitle: "For guesstimate and market-entry cases",
    source: "Standard consulting framework",
    steps: [
      {
        letter: "1",
        title: "Pick an Approach",
        description:
          "Top-down: start from total population/market and narrow down. Bottom-up: build from a unit (per-store, per-user) and scale up.",
      },
      {
        letter: "2",
        title: "State Assumptions Explicitly",
        description:
          "Call out every number you're assuming (population, penetration, frequency, price) before calculating.",
      },
      {
        letter: "3",
        title: "Do the Math Out Loud",
        description: "Walk through the multiplication/division step by step so the interviewer can follow and correct.",
      },
      {
        letter: "4",
        title: "Sanity-Check the Answer",
        description:
          "Compare the result against a known benchmark (population, GDP, category size) to see if it's plausible.",
      },
    ],
  },
  {
    id: 3,
    name: "Market Entry Framework",
    subtitle: "For 'should we enter this market' cases",
    source: "Standard consulting framework",
    steps: [
      {
        letter: "1",
        title: "Market Attractiveness",
        description: "Size, growth rate, profitability, and competitive intensity of the target market.",
      },
      {
        letter: "2",
        title: "Capability Fit",
        description: "Does the company have the assets, brand, distribution, and skills to compete and win here?",
      },
      {
        letter: "3",
        title: "Entry Mode",
        description: "Organic build, acquisition, joint venture, or licensing — trade off speed, cost, and control.",
      },
      {
        letter: "4",
        title: "Financial Case",
        description: "Estimate investment required, payback period, and expected ROI versus the company's hurdle rate.",
      },
      {
        letter: "5",
        title: "Risks & Mitigation",
        description: "Regulatory, competitive response, execution risk — and how each would be mitigated.",
      },
    ],
  },
];

export const experiences: InterviewExperience[] = [];

export const handbooks: Handbook[] = [];

export const resources: Resource[] = [
  {
    icon: "📘",
    category: "Book",
    name: "Case in Point — Marc Cosentino",
    description: "The most widely used consulting case-interview prep book; covers frameworks and worked examples.",
  },
  {
    icon: "📕",
    category: "Book",
    name: "Case Interview Secrets — Victor Cheng",
    description: "Former McKinsey interviewer's guide to structuring and delivering case interview answers.",
  },
  {
    icon: "🌐",
    category: "Website",
    name: "PrepLounge",
    description: "Community platform for practicing live case interviews with peers and coaches.",
  },
];
