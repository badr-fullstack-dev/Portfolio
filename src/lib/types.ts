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

export type RecruitersKeyFact = { label: string; value: string };

export type RecruitersCta = { label: string; href: string };

export type RecruitersProofItem = { title: string; description: string };

export type RecruitersStackGroup = { label: string; items: string[] };

export type RecruitersLanguageItem = { label: string; level: string };

export type RecruitersContent = {
  locale: Locale;
  altLocale: Locale;
  altLocaleLabel: string;
  route: string;
  altRoute: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    keyFacts: RecruitersKeyFact[];
    primaryCta: RecruitersCta;
    secondaryCta: RecruitersCta;
  };
  profile: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  positioning: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    items: RecruitersProofItem[];
    seeMore: RecruitersCta;
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: RecruitersStackGroup[];
  };
  languages: {
    eyebrow: string;
    title: string;
    items: RecruitersLanguageItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    cvLabel: string;
    cvHref: string;
    schoolEmailLabel: string;
    schoolEmail: string;
    personalEmailLabel: string;
    personalEmail: string;
    phoneLabel: string;
    phone: string;
    linkedinLabel: string;
    linkedinHref: string;
    githubLabel: string;
    githubHref: string;
  };
};
