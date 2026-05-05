export type Locale = "fr" | "en";

export type IconName =
  | "bot"
  | "code"
  | "store"
  | "shield"
  | "rocket"
  | "workflow"
  | "terminal"
  | "globe";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
};

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  bullets: string[];
  links: ProjectLink[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TechItem = {
  label: string;
  group: "frontend" | "backend" | "ai" | "tools";
};

export type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};
