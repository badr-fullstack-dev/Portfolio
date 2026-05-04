import type {
  CaseStudy,
  ContactInfo,
  Locale,
  SeoConfig,
  ServiceItem,
  TechItem,
} from "@/lib/types";

export const locales: Locale[] = ["fr", "en"];

export const contactInfo: ContactInfo = {
  name: "Badreddine",
  email: "elaouba@et.esiea.fr",
  phone: "+33 678398091",
  linkedin: "https://www.linkedin.com/in/badreddine-el-aouba-952b84352/",
  github: "https://github.com/badr-fullstack-dev",
  location: "Paris, France - remote",
};

export const seo: Record<Locale, SeoConfig> = {
  fr: {
    title: "Badreddine | Automations IA et développeur full-stack freelance",
    description:
      "Portfolio freelance de Badreddine, développeur full-stack basé à Paris. Automations IA, chatbots, applications React/Node et sites web pour PME.",
    ogTitle: "Badreddine - Automations IA et full-stack pour PME",
    ogDescription:
      "Des outils IA fiables, des chatbots métier et des applications web complètes pour transformer les tâches répétitives en systèmes utiles.",
  },
  en: {
    title: "Badreddine | AI automation and full-stack freelance developer",
    description:
      "Freelance portfolio for Badreddine, a Paris-based full-stack developer building AI automations, chatbots, React/Node apps and business websites.",
    ogTitle: "Badreddine - AI automation and full-stack systems",
    ogDescription:
      "Reliable AI workflows, business chatbots and full-stack web products for teams that need practical software shipped.",
  },
};

type SiteContent = {
  locale: Locale;
  altLocale: Locale;
  altLocaleLabel: string;
  route: string;
  altRoute: string;
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    availability: string;
    avatarAlt: string;
    signalTitle: string;
    signalItems: string[];
  };
  proof: string[];
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    live: string;
    code: string;
    items: CaseStudy[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    techTitle: string;
    tech: TechItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    directTitle: string;
    directIntro: string;
    formTitle: string;
    fallback: string;
  };
  form: {
    name: string;
    email: string;
    company: string;
    budget: string;
    projectType: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
    budgetOptions: string[];
    projectOptions: string[];
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const sharedTech: TechItem[] = [
  { label: "React", group: "frontend" },
  { label: "TypeScript", group: "frontend" },
  { label: "JavaScript", group: "frontend" },
  { label: "Tailwind CSS", group: "frontend" },
  { label: "Node.js", group: "backend" },
  { label: "Express", group: "backend" },
  { label: "Django", group: "backend" },
  { label: "MongoDB", group: "backend" },
  { label: "OpenAI", group: "ai" },
  { label: "Claude", group: "ai" },
  { label: "Prompt engineering", group: "ai" },
  { label: "GitHub", group: "tools" },
  { label: "Vercel", group: "tools" },
  { label: "Render", group: "tools" },
  { label: "Postman", group: "tools" },
];

export const content: Record<Locale, SiteContent> = {
  fr: {
    locale: "fr",
    altLocale: "en",
    altLocaleLabel: "EN",
    route: "/",
    altRoute: "/en",
    nav: {
      services: "Services",
      work: "Projets",
      process: "Méthode",
      about: "Profil",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Freelance IA et full-stack basé à Paris",
      title:
        "Je transforme les tâches répétitives des PME en outils web fiables.",
      subtitle:
        "Automations IA, chatbots métier, applications React/Node et sites e-commerce livrés de l'idée au déploiement.",
      primaryCta: "Parler du projet",
      secondaryCta: "Voir les preuves",
      availability: "Disponible pour missions freelance et remote",
      avatarAlt: "Photo de profil GitHub de Badreddine",
      signalTitle: "Signal projet",
      signalItems: [
        "Audit rapide du workflow existant",
        "Prototype IA ou web exploitable",
        "Livraison avec sécurité, tests et déploiement",
      ],
    },
    proof: [
      "Automations IA",
      "Chatbots métier",
      "Apps React/Node",
      "Sites et e-commerce",
      "Français, anglais, arabe",
    ],
    services: {
      eyebrow: "Ce que je livre",
      title: "Des systèmes utiles, pas seulement des pages jolies.",
      intro:
        "Le site doit convaincre un dirigeant de PME que Badreddine peut comprendre son besoin, réduire le travail manuel et livrer un outil maintenable.",
      items: [
        {
          icon: "bot",
          title: "Automations IA et chatbots",
          description:
            "Connexion de LLMs à des tâches réelles: support, qualification de leads, génération de contenu, assistants internes.",
          bullets: [
            "Prompt engineering orienté fiabilité",
            "Flux avec validation humaine quand nécessaire",
            "Interfaces simples pour équipes non techniques",
          ],
        },
        {
          icon: "code",
          title: "Applications web sur mesure",
          description:
            "Applications full-stack avec React, Node.js, APIs, bases de données et déploiement propre.",
          bullets: [
            "Tableaux de bord et outils internes",
            "APIs REST et intégrations métier",
            "Architecture claire pour évoluer après v1",
          ],
        },
        {
          icon: "store",
          title: "Sites business et e-commerce",
          description:
            "Sites vitrines, pages de conversion et expériences e-commerce rapides, responsive et faciles à présenter.",
          bullets: [
            "Design moderne et orienté confiance",
            "Parcours contact ou achat sans friction",
            "SEO technique et performance de base",
          ],
        },
      ],
    },
    work: {
      eyebrow: "Preuves réelles",
      title: "Des projets qui montrent le périmètre complet.",
      intro:
        "Chaque projet est présenté sans métriques inventées: uniquement ce qui est public ou déjà documenté.",
      live: "Demo",
      code: "Code",
      items: [
        {
          title: "Jarvis Desktop AI Assistant",
          category: "Projet personnel IA",
          summary:
            "Assistant desktop Windows-first avec autonomie gardée, HUD futuriste, voix, mémoire, audit log et orchestrateur Python.",
          stack: ["Python", "React", "Tauri", "Policy engine"],
          bullets: [
            "Actions supervisées avec niveaux de risque et approbations",
            "Bridge local entre interface et orchestrateur",
            "Tests du runtime, de la voix, de la mémoire et de la fiabilité",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Jarvis-Desktop-AI-Assistant",
            },
          ],
        },
        {
          title: "UMOD",
          category: "Client e-commerce français",
          summary:
            "Travail client autour d'une page d'accueil, d'un calculateur métier et d'un chatbot pour une activité e-commerce.",
          stack: ["JavaScript", "Node.js", "Chatbot", "Landing page"],
          bullets: [
            "Calculateur d'aides avec frontend et backend publics",
            "Chatbot avec interface et API séparées",
            "Approche de production pour un besoin métier concret",
          ],
          links: [
            { label: "Site", href: "https://umod.fr" },
            {
              label: "Landing",
              href: "https://github.com/badr-fullstack-dev/umod-page-acceuil2",
            },
            {
              label: "Chatbot",
              href: "https://github.com/badr-fullstack-dev/Umod-Chat-Bot-backend",
            },
          ],
        },
        {
          title: "Cogelas Website",
          category: "Site client livré",
          summary:
            "Site business public avec déploiement Vercel, pensé pour présenter une activité de manière claire et moderne.",
          stack: ["HTML", "CSS", "Vercel"],
          bullets: [
            "Site public disponible en ligne",
            "Projet récent maintenu sur GitHub",
            "Exemple de livraison rapide pour une entreprise",
          ],
          links: [
            { label: "Demo", href: "https://cogelas-website.vercel.app" },
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Cogelas-Website",
            },
          ],
        },
        {
          title: "Haltea Website",
          category: "Site client",
          summary:
            "Site vitrine client publié dans le portfolio GitHub, utile comme preuve de travail web orienté business.",
          stack: ["HTML", "CSS"],
          bullets: [
            "Projet front-end simple et focalisé",
            "Structure adaptée à une présence web professionnelle",
            "Aucune fausse métrique ajoutée au case study",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Haltea-website",
            },
          ],
        },
        {
          title: "E-commerce Platform",
          category: "Projet full-stack personnel",
          summary:
            "Plateforme e-commerce avec frontend et backend séparés pour montrer le travail sur plusieurs couches produit.",
          stack: ["React", "Node.js", "API", "Vercel"],
          bullets: [
            "Catalogue, panier et parcours checkout côté produit",
            "Frontend et backend organisés dans deux dépôts",
            "Démo frontend publique disponible",
          ],
          links: [
            {
              label: "Demo",
              href: "https://ecommerce-website-frontend-lilac.vercel.app",
            },
            {
              label: "Frontend",
              href: "https://github.com/badr-fullstack-dev/ecommerce-website-frontend",
            },
            {
              label: "Backend",
              href: "https://github.com/badr-fullstack-dev/ecommerce-website-backend",
            },
          ],
        },
      ],
    },
    process: {
      eyebrow: "Méthode",
      title: "Un déroulé lisible pour limiter le risque.",
      intro:
        "Le workflow est pensé pour les petites équipes: décider vite, prouver vite, puis sécuriser la mise en production.",
      steps: [
        "Audit du besoin, des outils existants et des tâches répétitives",
        "Cadrage du périmètre v1 et des limites à ne pas dépasser",
        "Prototype court pour valider la valeur réelle",
        "Développement full-stack avec validations régulières",
        "Tests, sécurité des données et gestion des erreurs",
        "Déploiement, documentation et support de lancement",
      ],
    },
    about: {
      eyebrow: "Profil",
      title: "Un développeur full-stack qui utilise l'IA comme levier produit.",
      body: [
        "Badreddine est basé à Paris et construit des sites, applications web, outils IA et automations. Son positionnement freelance combine exécution full-stack et prompt engineering pratique.",
        "L'objectif n'est pas de faire une démo impressionnante une seule fois, mais de créer des systèmes qui restent utiles quand un vrai utilisateur arrive avec un vrai cas métier.",
        "Il travaille en français, anglais et arabe, avec une préférence pour les missions où un prototype rapide peut devenir un outil fiable.",
      ],
      techTitle: "Stack utilisée",
      tech: sharedTech,
    },
    contact: {
      eyebrow: "Contact",
      title: "Décrivons le workflow à automatiser.",
      intro:
        "Envoyez le contexte, le délai et ce qui vous prend trop de temps aujourd'hui. Vous pouvez aussi contacter Badreddine directement.",
      directTitle: "Canaux directs",
      directIntro:
        "Le formulaire est relié à Resend en production. Si l'email serveur n'est pas encore configuré, les contacts directs restent affichés.",
      formTitle: "Brief rapide",
      fallback:
        "Si le formulaire n'est pas encore configuré, écrivez directement à elaouba@et.esiea.fr.",
    },
    form: {
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      budget: "Budget indicatif",
      projectType: "Type de projet",
      message: "Message",
      submit: "Envoyer le brief",
      sending: "Envoi...",
      success:
        "Merci, votre message est prêt côté site. Badreddine vous répondra directement par email.",
      error:
        "Le message n'a pas pu être envoyé. Utilisez l'email direct ci-dessous.",
      privacy:
        "Aucun tracking invasif en v1. Les données du formulaire servent uniquement à répondre à votre demande.",
      budgetOptions: [
        "A préciser",
        "Moins de 1 000 EUR",
        "1 000 - 3 000 EUR",
        "3 000 - 8 000 EUR",
        "Plus de 8 000 EUR",
      ],
      projectOptions: [
        "Automation IA",
        "Chatbot",
        "Application web",
        "Site business",
        "E-commerce",
        "Audit ou cadrage",
      ],
    },
    footer: {
      tagline: "Automations IA, web apps et sites business depuis Paris.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    locale: "en",
    altLocale: "fr",
    altLocaleLabel: "FR",
    route: "/en",
    altRoute: "/",
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      about: "Profile",
      contact: "Contact",
    },
    hero: {
      eyebrow: "AI and full-stack freelancer based in Paris",
      title: "I turn repetitive SMB workflows into reliable web tools.",
      subtitle:
        "AI automations, business chatbots, React/Node apps and e-commerce experiences shipped from idea to deployment.",
      primaryCta: "Discuss a project",
      secondaryCta: "See proof",
      availability: "Available for freelance and remote work",
      avatarAlt: "Badreddine GitHub profile photo",
      signalTitle: "Project signal",
      signalItems: [
        "Fast audit of the existing workflow",
        "Usable AI or web prototype",
        "Delivery with security, tests and deployment",
      ],
    },
    proof: [
      "AI automations",
      "Business chatbots",
      "React/Node apps",
      "Sites and e-commerce",
      "French, English, Arabic",
    ],
    services: {
      eyebrow: "What I deliver",
      title: "Useful systems, not only good-looking pages.",
      intro:
        "The site should convince an SMB owner that Badreddine can understand the need, reduce manual work and ship a maintainable tool.",
      items: [
        {
          icon: "bot",
          title: "AI automations and chatbots",
          description:
            "LLMs connected to real tasks: support, lead handling, content generation and internal assistants.",
          bullets: [
            "Reliability-focused prompt engineering",
            "Human validation when the workflow needs it",
            "Simple interfaces for non-technical teams",
          ],
        },
        {
          icon: "code",
          title: "Custom web applications",
          description:
            "Full-stack applications with React, Node.js, APIs, databases and clean deployment.",
          bullets: [
            "Dashboards and internal tools",
            "REST APIs and business integrations",
            "A clear architecture that can grow after v1",
          ],
        },
        {
          icon: "store",
          title: "Business sites and e-commerce",
          description:
            "Fast, responsive business websites, conversion pages and e-commerce experiences.",
          bullets: [
            "Modern design focused on trust",
            "Low-friction contact or purchase paths",
            "Baseline technical SEO and performance",
          ],
        },
      ],
    },
    work: {
      eyebrow: "Real proof",
      title: "Projects that show the full delivery range.",
      intro:
        "Each project is presented without invented metrics: only public or already documented facts.",
      live: "Demo",
      code: "Code",
      items: [
        {
          title: "Jarvis Desktop AI Assistant",
          category: "Personal AI project",
          summary:
            "Windows-first desktop assistant with guarded autonomy, futuristic HUD, voice, memory, audit log and a Python orchestrator.",
          stack: ["Python", "React", "Tauri", "Policy engine"],
          bullets: [
            "Supervised actions with risk tiers and approvals",
            "Local bridge between the interface and orchestrator",
            "Runtime, voice, memory and reliability tests",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Jarvis-Desktop-AI-Assistant",
            },
          ],
        },
        {
          title: "UMOD",
          category: "French e-commerce client",
          summary:
            "Client work around a landing page, business calculator and chatbot for an e-commerce activity.",
          stack: ["JavaScript", "Node.js", "Chatbot", "Landing page"],
          bullets: [
            "Calculator with public frontend and backend repos",
            "Chatbot with separate UI and API",
            "Production-minded approach for a concrete business need",
          ],
          links: [
            { label: "Site", href: "https://umod.fr" },
            {
              label: "Landing",
              href: "https://github.com/badr-fullstack-dev/umod-page-acceuil2",
            },
            {
              label: "Chatbot",
              href: "https://github.com/badr-fullstack-dev/Umod-Chat-Bot-backend",
            },
          ],
        },
        {
          title: "Cogelas Website",
          category: "Delivered client website",
          summary:
            "Public business website deployed on Vercel, designed to present a company clearly and professionally.",
          stack: ["HTML", "CSS", "Vercel"],
          bullets: [
            "Public site available online",
            "Recent project maintained on GitHub",
            "Example of fast delivery for a business",
          ],
          links: [
            { label: "Demo", href: "https://cogelas-website.vercel.app" },
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Cogelas-Website",
            },
          ],
        },
        {
          title: "Haltea Website",
          category: "Client website",
          summary:
            "Client showcase website published in the GitHub portfolio, useful as proof of business-focused web work.",
          stack: ["HTML", "CSS"],
          bullets: [
            "Simple focused front-end project",
            "Structure adapted to a professional web presence",
            "No fake metrics added to the case study",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Haltea-website",
            },
          ],
        },
        {
          title: "E-commerce Platform",
          category: "Personal full-stack project",
          summary:
            "E-commerce platform with separated frontend and backend repos to show work across product layers.",
          stack: ["React", "Node.js", "API", "Vercel"],
          bullets: [
            "Catalog, cart and checkout product flow",
            "Frontend and backend organized in two repos",
            "Public frontend demo available",
          ],
          links: [
            {
              label: "Demo",
              href: "https://ecommerce-website-frontend-lilac.vercel.app",
            },
            {
              label: "Frontend",
              href: "https://github.com/badr-fullstack-dev/ecommerce-website-frontend",
            },
            {
              label: "Backend",
              href: "https://github.com/badr-fullstack-dev/ecommerce-website-backend",
            },
          ],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A clear path to reduce delivery risk.",
      intro:
        "The workflow is designed for small teams: decide quickly, prove value quickly, then secure production.",
      steps: [
        "Audit the need, current tools and repetitive tasks",
        "Define the v1 scope and what must stay out of scope",
        "Build a short prototype to validate real value",
        "Develop the full-stack product with regular reviews",
        "Test, protect data and handle failure states",
        "Deploy, document and support the launch",
      ],
    },
    about: {
      eyebrow: "Profile",
      title: "A full-stack developer using AI as a product lever.",
      body: [
        "Badreddine is based in Paris and builds websites, web apps, AI tools and automations. His freelance positioning combines full-stack execution with practical prompt engineering.",
        "The goal is not to make one impressive demo, but to create systems that remain useful when real users bring real business cases.",
        "He works in French, English and Arabic, with a preference for missions where a fast prototype can become a reliable tool.",
      ],
      techTitle: "Working stack",
      tech: sharedTech,
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's describe the workflow to automate.",
      intro:
        "Send the context, timeline and what takes too much time today. You can also contact Badreddine directly.",
      directTitle: "Direct channels",
      directIntro:
        "The form is wired to Resend in production. If server email is not configured yet, direct contact channels stay visible.",
      formTitle: "Quick brief",
      fallback:
        "If the form is not configured yet, email elaouba@et.esiea.fr directly.",
    },
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      budget: "Indicative budget",
      projectType: "Project type",
      message: "Message",
      submit: "Send the brief",
      sending: "Sending...",
      success:
        "Thank you, your message is ready on the site side. Badreddine will reply by email.",
      error:
        "The message could not be sent. Please use the direct email below.",
      privacy:
        "No invasive tracking in v1. Form data is only used to answer your request.",
      budgetOptions: [
        "To be discussed",
        "Less than EUR 1,000",
        "EUR 1,000 - 3,000",
        "EUR 3,000 - 8,000",
        "More than EUR 8,000",
      ],
      projectOptions: [
        "AI automation",
        "Chatbot",
        "Web application",
        "Business website",
        "E-commerce",
        "Audit or scoping",
      ],
    },
    footer: {
      tagline: "AI automations, web apps and business sites from Paris.",
      rights: "All rights reserved.",
    },
  },
};
