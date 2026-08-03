export type CaseType =
  | "Market Sizing"
  | "Profitability"
  | "Market Entry"
  | "Guesstimate"
  | "Growth Strategy"
  | "Operations"
  | "M&A";

export type SourceKey = string;

export interface CaseStudy {
  id: number;
  title: string;
  source: SourceKey;
  domain: string;
  type: CaseType;
  tags: string[];
  summary: string;
  question: string;
  keyTakeaway: string;
  approach: string[];
}

export interface FrameworkStep {
  letter: string;
  title: string;
  description: string;
}

export interface Framework {
  id: number;
  name: string;
  subtitle: string;
  source: string;
  steps: FrameworkStep[];
}

export interface InterviewExperience {
  id: number;
  company: string;
  role: string;
  offered: "Yes" | "No" | "Unknown";
  type: "Product" | "Tech" | "BA";
  source: SourceKey;
  rounds: string;
  tip: string;
}

export interface Handbook {
  icon: string;
  name: string;
  source: string;
  institution: string;
  pages: number;
  description: string;
  color: string;
  pdfFile?: string;
}

export interface Resource {
  icon: string;
  category: "Book" | "YouTube" | "Twitter / X" | "Website" | "Course" | "Community";
  name: string;
  description: string;
}

export type SectionId = "cases" | "frameworks" | "experiences" | "handbooks" | "resources";
