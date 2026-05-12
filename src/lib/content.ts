import type {
  CaseStudy,
  ContactInfo,
  FaqItem,
  Locale,
  RecruitersContent,
  SeoConfig,
  ServiceItem,
  TechItem,
} from "@/lib/types";

export const locales: Locale[] = ["fr", "en"];

export const contactInfo: ContactInfo = {
  name: "Badreddine",
  email: "contact@badreddine.dev",
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
    faq: string;
    contact: string;
  };
  alternance: {
    label: string;
    message: string;
    cta: string;
    ariaLabel: string;
  };
  studentBadge: {
    text: string;
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
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: FaqItem[];
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
    deadline: string;
    projectType: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
    idleHint: string;
    helpers: {
      email: string;
      company: string;
      budget: string;
      deadline: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      deadline: string;
    };
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
      faq: "FAQ",
      contact: "Contact",
    },
    alternance: {
      label: "Alternance 2026",
      message:
        "En recherche d'alternance développeur full-stack — rentrée septembre 2026.",
      cta: "Recruter en alternance",
      ariaLabel: "Recherche d'alternance",
    },
    studentBadge: {
      text:
        "Étudiant ingénieur à l'ESIEA — En recherche d'alternance développeur full-stack pour la rentrée de septembre 2026 (Paris / Île-de-France).",
    },
    hero: {
      eyebrow: "Freelance IA et full-stack basé à Paris",
      title:
        "J'aide les PME à automatiser leurs tâches répétitives avec des outils web fiables.",
      subtitle:
        "Automations IA, chatbots et applications full-stack qui réduisent le travail manuel et les délais — sans démo qui s'effondre dès le premier vrai cas.",
      primaryCta: "Discuter de votre besoin",
      secondaryCta: "Voir les projets",
      availability:
        "Projets livrés en production pour des PME françaises — Paris ou remote",
      avatarAlt: "Photo de profil GitHub de Badreddine",
      signalTitle: "Signal projet",
      signalItems: [
        "Audit rapide du workflow existant",
        "Prototype IA ou web exploitable",
        "Livraison avec sécurité, tests et déploiement",
      ],
    },
    proof: [
      "3 sites client en production",
      "Apps full-stack React/Node",
      "Automations IA et chatbots",
      "Sites et e-commerce",
      "Français · Anglais",
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
            "Connecter un LLM à un vrai workflow: tri d'emails, qualification de leads, support 24/7, génération de documents répétitifs.",
          bullets: [
            "Cas d'usage chiffré avant le code, pour éviter de payer une démo",
            "Validation humaine quand l'erreur coûte cher",
            "Interface simple pour vos équipes terrain, pas pour des devs",
          ],
        },
        {
          icon: "code",
          title: "Applications web sur mesure",
          description:
            "Des outils internes ou clients quand un SaaS générique ne couvre pas votre besoin métier.",
          bullets: [
            "Tableaux de bord, portails clients, outils de gestion",
            "API REST et intégrations avec vos outils existants",
            "Architecture pensée pour évoluer après la v1, sans refonte",
          ],
        },
        {
          icon: "store",
          title: "Sites business et e-commerce",
          description:
            "Sites vitrines et e-commerce qui convertissent un visiteur en lead ou en commande, sans bloat.",
          bullets: [
            "Pages claires, rapides, responsive sur mobile dès la v1",
            "Parcours contact ou achat sans friction",
            "Bases SEO techniques et performance prêtes le jour du lancement",
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
          category: "Projet personnel — agent desktop IA",
          summary:
            "Idée née un soir: et si un agent IA contrôlait mon PC à la voix, façon Tony Stark — un assistant qui comprend, planifie, et agit à ma place ? Première vraie incursion dans l'architecture agentique et dans une stack que je ne connaissais pas (Python, Tauri, Rust).",
          stack: ["Python", "React", "Tauri", "Policy engine"],
          bullets: [
            "État actuel: commandes vocales simples (ouvrir une app, lancer un navigateur), exécution d'actions de base (app.launch, browser.read, browser.fetch), génération d'un plan à partir du contexte. Architecture à 4 sous-agents — dont un dédié sécurité et un à la planification.",
            "Stack: front Tauri/React, runtime Python, bridge local. Policy engine et niveaux de risque pour qu'aucune action sensible ne s'exécute sans validation explicite.",
            "Choix assumé: tant que la couche sécurité n'est pas éprouvée, l'agent n'a pas le contrôle complet de la machine. La prochaine itération porte sur les tâches complexes et l'élargissement contrôlé du périmètre. Ce que ça prouve: produit IA agentique complet — pas un wrapper de chat.",
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
          category: "Stage full-stack — e-commerce",
          summary:
            "Premier stage pro chez UMOD (e-commerce, transition énergétique). Arrivé pour apprendre comment marche un commerce, parti avec trois outils en production: chatbot IA, calculateur d'aides publiques, refonte complète du site.",
          stack: ["React", "Node.js", "JavaScript", "OpenAI API"],
          bullets: [
            "Sur initiative perso, proposé et construit un chatbot OpenAI en 3 jours: qualification des demandes, prise de RDV automatique, Q&A sur les services. Mis en prod sur umod.fr.",
            "Enchaîné sur un calculateur d'aides publiques (frontend + backend), puis la refonte complète du site — un mois, premier site marketing complet. Contrainte WordPress contournée avec un wrapper iframe vers une instance Netlify, pour livrer sans casser leur infra existante.",
            "Ce que je referais autrement: déploiement direct sur Vercel avec DNS au nom du client, structure projet plus propre. Ce qui reste vrai: trois livrables en prod chez un vrai e-commerce, à partir d'une feuille blanche.",
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
          category: "Site de présence — client BTP",
          summary:
            "Site vitrine déployé pour Cogelas, conçu pour présenter l'activité de manière claire, moderne et rapide à mettre en ligne.",
          stack: ["HTML", "CSS", "Vercel"],
          bullets: [
            "Construit: pages publiques structurées, mise en page responsive, déploiement Vercel.",
            "Surface technique: HTML et CSS, hébergement Vercel, démo publique accessible en ligne.",
            "Pour vous: site de présence livré rapidement, prêt à mettre en ligne sans dépendance freelance après la livraison.",
          ],
          links: [
            { label: "Site", href: "https://cogelas.fr" },
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Cogelas-Website",
            },
          ],
        },
        {
          title: "Haltea Website",
          category: "Site de présence — client événementiel",
          summary:
            "Site vitrine pour Haltea, publié dans le portfolio GitHub comme preuve de travail web orienté présentation business.",
          stack: ["HTML", "CSS"],
          bullets: [
            "Construit: structure de pages simple, focalisée sur la lisibilité et la présentation de l'activité.",
            "Surface technique: HTML et CSS, sans framework, code accessible publiquement.",
            "Pour vous: cas d'usage 'site simple, livré, sans bloat' pour TPE qui veulent une présence claire en ligne.",
          ],
          links: [
            { label: "Site", href: "https://halteaevents.fr" },
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
            "Plateforme e-commerce construite avec frontend et backend séparés pour démontrer un travail produit sur plusieurs couches: catalogue, panier, checkout.",
          stack: ["React", "Node.js", "API", "Vercel"],
          bullets: [
            "Construit: catalogue, panier et parcours checkout côté frontend; API et logique métier côté backend.",
            "Surface technique: React et Node.js, deux dépôts distincts, démo frontend déployée sur Vercel.",
            "Démonstration: projet e-commerce avec séparation propre front/back — catalogue, panier, checkout. Référence d'architecture.",
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
        "Audit et cadrage du périmètre v1",
        "Prototype rapide validé avec vous",
        "Build, sécurité et déploiement",
      ],
    },
    about: {
      eyebrow: "Profil",
      title: "Un développeur full-stack qui utilise l'IA comme levier produit.",
      body: [
        "Je suis basé à Paris, et je construis des sites, apps web, outils IA et automations. Mon créneau: exécution full-stack avec du prompt engineering pratique.",
        "Ce qui m'intéresse, ce n'est pas la démo impressionnante qu'on montre une fois. C'est l'outil qui reste utile au troisième mois, quand un vrai utilisateur arrive avec un cas tordu.",
        "Je travaille en français et en anglais, et je préfère les missions où un prototype rapide peut devenir un outil fiable.",
      ],
      techTitle: "Stack utilisée",
      tech: sharedTech,
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Ce que les PME demandent avant de commencer.",
      intro:
        "Réponses courtes et honnêtes aux points qui bloquent souvent une décision freelance.",
      items: [
        {
          question: "Comment démarre une première mission ?",
          answer:
            "Premier échange par email ou téléphone pour cadrer le besoin (30 à 45 minutes). Si le projet a du sens, je propose une v1 chiffrée avec périmètre, livrables et délais clairs avant tout développement.",
        },
        {
          question: "Pouvez-vous travailler sur un site ou un code existant ?",
          answer:
            "Oui. La majorité des missions PME démarre sur une base existante: refonte partielle, intégration d'IA dans un workflow déjà en place, ajout d'API ou correction d'un projet livré par un autre prestataire.",
        },
        {
          question:
            "Comment sont gérées les erreurs et les actions risquées des automations IA ?",
          answer:
            "Aucune action sensible (envoi client, paiement, modification de données) n'est exécutée sans validation humaine ou journal d'audit. Les workflows IA sont testés sur des cas réels avant mise en production, pas sur une démo idéale.",
        },
        {
          question:
            "À qui appartiennent le code, les comptes et les données après livraison ?",
          answer:
            "À vous. Le code est livré dans vos dépôts, les comptes (hébergement, base de données, API tierces) sont créés à votre nom, et l'accès vous est transféré entièrement à la fin de la mission.",
        },
        {
          question:
            "Peut-on commencer petit, avec un prototype, avant de s'engager ?",
          answer:
            "Oui, c'est même recommandé. Un prototype court (1 à 2 semaines) permet de valider la valeur réelle d'un workflow IA ou d'une fonctionnalité avant d'investir dans une v1 complète.",
        },
        {
          question: "Que se passe-t-il après le lancement ?",
          answer:
            "Période de support incluse pour stabiliser la mise en production, puis option de maintenance évolutive (corrections, ajouts ciblés, suivi). Vous n'êtes pas obligé de continuer avec moi: tout est documenté pour qu'une autre équipe puisse reprendre.",
        },
        {
          question: "Dans quelles langues peut-on travailler ?",
          answer:
            "Français et anglais à l'oral comme à l'écrit. Les livrables techniques (documentation, README, commits) sont en anglais par défaut, sauf demande contraire.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Décrivons le workflow à automatiser.",
      intro:
        "Envoyez en quelques lignes votre activité, le besoin concret, le délai et le budget indicatif. Réponse sous 48 h ouvrées par email.",
      directTitle: "Canaux directs",
      directIntro:
        "Le formulaire est relié à Resend en production. Si l'email serveur n'est pas encore configuré, les contacts directs restent affichés.",
      formTitle: "Brief rapide",
      fallback:
        "Si le formulaire n'est pas encore configuré, écrivez directement à contact@badreddine.dev.",
    },
    form: {
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      budget: "Budget indicatif",
      deadline: "Délai souhaité",
      projectType: "Type de projet",
      message: "Message",
      submit: "Envoyer le brief",
      sending: "Envoi...",
      success:
        "Brief reçu. Réponse par email sous 48 h ouvrées — pensez à vérifier vos spams si rien n'arrive.",
      error:
        "Le message n'a pas pu être envoyé. Utilisez l'email direct ci-dessous.",
      privacy:
        "Pas de tracking, pas de revente. Les données servent uniquement à répondre à votre demande.",
      idleHint: "Réponse sous 48 h ouvrées par email.",
      helpers: {
        email: "Adresse utilisée pour la réponse.",
        company: "Optionnel — utile pour comprendre votre activité.",
        budget: "Optionnel. Une fourchette suffit.",
        deadline: "Ex: ASAP, dans 2 semaines, fin du mois.",
        message:
          "À inclure: votre activité en une ligne, le besoin concret, ce que vous avez déjà (site, outils, code), et tout autre contexte utile.",
      },
      placeholders: {
        name: "Marie Dupont",
        email: "marie@entreprise.com",
        company: "Acme SARL",
        deadline: "ASAP / 2 semaines / fin du mois",
      },
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
      faq: "FAQ",
      contact: "Contact",
    },
    alternance: {
      label: "Apprenticeship 2026",
      message:
        "Seeking a full-stack developer apprenticeship (alternance) — starting September 2026 in France.",
      cta: "Hire me as an apprentice",
      ariaLabel: "Apprenticeship search",
    },
    studentBadge: {
      text:
        "Engineering student at ESIEA — Seeking a full-stack developer apprenticeship starting September 2026 (Paris / Île-de-France area).",
    },
    hero: {
      eyebrow: "AI and full-stack freelancer based in Paris",
      title: "I help SMBs turn repetitive workflows into reliable web tools.",
      subtitle:
        "AI automations, chatbots and full-stack apps that cut manual work and delivery time — not just a demo that breaks on the first real case.",
      primaryCta: "Discuss your need",
      secondaryCta: "See the projects",
      availability:
        "Projects shipped to production for French SMBs — Paris or remote",
      avatarAlt: "Badreddine GitHub profile photo",
      signalTitle: "Project signal",
      signalItems: [
        "Fast audit of the existing workflow",
        "Usable AI or web prototype",
        "Delivery with security, tests and deployment",
      ],
    },
    proof: [
      "3 client sites in production",
      "Full-stack React/Node apps",
      "AI automations and chatbots",
      "Sites and e-commerce",
      "French · English",
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
            "Connect an LLM to a real workflow: email triage, lead qualification, 24/7 support, repeatable document generation.",
          bullets: [
            "Quantified use case before any code, so you don't pay for a demo",
            "Human validation when a mistake is expensive",
            "Simple interface for your operations team, not for developers",
          ],
        },
        {
          icon: "code",
          title: "Custom web applications",
          description:
            "Internal or customer-facing tools when a generic SaaS does not fit your business need.",
          bullets: [
            "Dashboards, customer portals and internal management tools",
            "REST APIs and integrations with the tools you already use",
            "Architecture designed to grow after v1, without a rewrite",
          ],
        },
        {
          icon: "store",
          title: "Business sites and e-commerce",
          description:
            "Showcase and e-commerce sites that turn a visitor into a lead or an order, without bloat.",
          bullets: [
            "Clear, fast, mobile-first pages from v1",
            "Low-friction contact or purchase flow",
            "Technical SEO and baseline performance ready on launch day",
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
          category: "Personal project — desktop AI agent",
          summary:
            "Idea that hit me one night: what if an AI agent ran my PC by voice, Tony Stark style — an assistant that understands, plans, and acts on my behalf? First real venture into agentic architecture and into a stack I didn't know (Python, Tauri, Rust).",
          stack: ["Python", "React", "Tauri", "Policy engine"],
          bullets: [
            "Current state: simple voice commands (launch an app, open a browser), basic action execution (app.launch, browser.read, browser.fetch), plan generation from context. 4-subagent architecture — one dedicated to security, one to planning.",
            "Stack: Tauri/React frontend, Python runtime, local bridge. Policy engine and risk tiers so no sensitive action runs without explicit approval.",
            "Deliberate choice: until the security layer is proven, the agent does not have full control of the machine. Next iteration: complex tasks and controlled scope expansion. What it proves: a complete agentic AI product — not a chat wrapper.",
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
          category: "Full-stack internship — e-commerce",
          summary:
            "First professional internship at UMOD (e-commerce, energy transition). Arrived to learn how a commerce business actually works — left with three things in production: an AI chatbot, a public-aid calculator, and a complete site rebuild.",
          stack: ["React", "Node.js", "JavaScript", "OpenAI API"],
          bullets: [
            "Self-initiated: proposed and built an OpenAI chatbot in 3 days — lead qualification, automatic appointment booking, Q&A on services. Shipped to production on umod.fr.",
            "Then a public-aid calculator (frontend + backend), then the full site rebuild — one month, my first complete marketing site. WordPress hosting constraint solved with an iframe wrapper pointing to a Netlify build, to ship without breaking their existing infra.",
            "What I'd do differently today: direct Vercel deployment with DNS in the client's name, less scattered project structure. What stands: three tools in production at a real e-commerce, built from a blank page.",
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
          category: "Presence site — construction client",
          summary:
            "Showcase site shipped for Cogelas, designed to present the business clearly, modernly, and on a fast launch path.",
          stack: ["HTML", "CSS", "Vercel"],
          bullets: [
            "Built: structured public pages, responsive layout, Vercel deployment.",
            "Tech surface: HTML and CSS, Vercel hosting, demo publicly accessible online.",
            "For you: a presence site shipped fast, ready to go live with no ongoing freelance dependency.",
          ],
          links: [
            { label: "Site", href: "https://cogelas.fr" },
            {
              label: "GitHub",
              href: "https://github.com/badr-fullstack-dev/Cogelas-Website",
            },
          ],
        },
        {
          title: "Haltea Website",
          category: "Presence site — events client",
          summary:
            "Showcase site for Haltea, published in the GitHub portfolio as proof of business-focused web work.",
          stack: ["HTML", "CSS"],
          bullets: [
            "Built: simple page structure focused on readability and presenting the business.",
            "Tech surface: plain HTML and CSS, no framework, code publicly accessible.",
            "For you: a 'simple, shipped, no bloat' use case for very small businesses that need a clear web presence.",
          ],
          links: [
            { label: "Site", href: "https://halteaevents.fr" },
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
            "E-commerce platform built with separated frontend and backend to demonstrate product work across layers: catalog, cart, checkout.",
          stack: ["React", "Node.js", "API", "Vercel"],
          bullets: [
            "Built: catalog, cart and checkout flow on the frontend; API and business logic on the backend.",
            "Tech surface: React and Node.js, two separate repos, frontend demo deployed on Vercel.",
            "Demonstration: e-commerce project with a clean front/back split — catalog, cart, checkout. Architecture reference.",
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
        "Audit and scope the v1",
        "Fast prototype validated with you",
        "Build, hardening and deployment",
      ],
    },
    about: {
      eyebrow: "Profile",
      title: "A full-stack developer using AI as a product lever.",
      body: [
        "I'm based in Paris, and I build websites, web apps, AI tools and automations. My lane: full-stack execution with practical prompt engineering.",
        "What interests me isn't the impressive demo you ship once. It's the tool that's still useful three months in, when a real user shows up with an edge case.",
        "I work in French and English, and I prefer engagements where a fast prototype can become a reliable tool.",
      ],
      techTitle: "Working stack",
      tech: sharedTech,
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What SMBs ask before getting started.",
      intro:
        "Short, honest answers to the points that usually block a freelance decision.",
      items: [
        {
          question: "How does a first project start?",
          answer:
            "First conversation by email or phone to scope the need (30 to 45 minutes). If the project makes sense, I propose a costed v1 with clear scope, deliverables, and timeline before any development begins.",
        },
        {
          question: "Can you work on an existing website or codebase?",
          answer:
            "Yes. Most SMB engagements start from an existing base: partial redesign, AI integrated into a workflow that already runs, added APIs, or fixing a project shipped by a previous provider.",
        },
        {
          question: "How are AI mistakes and risky automations handled?",
          answer:
            "No sensitive action (customer-facing email, payment, data modification) runs without human validation or an audit log. AI workflows are tested on real cases before going live, not on an ideal demo.",
        },
        {
          question:
            "Who owns the code, accounts, and data after delivery?",
          answer:
            "You do. Code ships to your repositories, accounts (hosting, database, third-party APIs) are created in your name, and access is fully transferred at the end of the engagement.",
        },
        {
          question: "Can the project start small with a prototype?",
          answer:
            "Yes, and it's recommended. A short prototype (1 to 2 weeks) validates the real value of an AI workflow or feature before investing in a full v1.",
        },
        {
          question: "What happens after launch?",
          answer:
            "Included support window to stabilize production, plus an optional evolution and maintenance contract (fixes, targeted additions, monitoring). You are not locked in: everything is documented so another team could take over.",
        },
        {
          question: "Which languages can we work in?",
          answer:
            "French and English, spoken and written. Technical deliverables (documentation, README, commits) default to English unless requested otherwise.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's describe the workflow to automate.",
      intro:
        "In a few lines, share what your business does, the concrete need, the timeline, and an indicative budget. Reply within 2 working days by email.",
      directTitle: "Direct channels",
      directIntro:
        "The form is wired to Resend in production. If server email is not configured yet, direct contact channels stay visible.",
      formTitle: "Quick brief",
      fallback:
        "If the form is not configured yet, email contact@badreddine.dev directly.",
    },
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      budget: "Indicative budget",
      deadline: "Desired timeline",
      projectType: "Project type",
      message: "Message",
      submit: "Send the brief",
      sending: "Sending...",
      success:
        "Brief received. You will get an email reply within 2 working days — please check your spam folder if nothing arrives.",
      error:
        "The message could not be sent. Please use the direct email below.",
      privacy:
        "No tracking, no resale. Form data is used only to answer your request.",
      idleHint: "Reply within 2 working days by email.",
      helpers: {
        email: "Address used for the reply.",
        company: "Optional — helps me understand your activity.",
        budget: "Optional. A range is enough.",
        deadline: "e.g. ASAP, in 2 weeks, end of month.",
        message:
          "Include: what your business does in one line, the concrete need, what you already have (site, tools, code), and any other useful context.",
      },
      placeholders: {
        name: "Marie Dupont",
        email: "marie@company.com",
        company: "Acme Ltd",
        deadline: "ASAP / 2 weeks / end of month",
      },
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

export const recruitersContent: Record<Locale, RecruitersContent> = {
  fr: {
    locale: "fr",
    altLocale: "en",
    altLocaleLabel: "EN",
    route: "/recruteurs",
    altRoute: "/en/recruiters",
    hero: {
      eyebrow: "Pour les recruteurs",
      title:
        "Étudiant ingénieur ESIEA en recherche d'alternance full-stack — rentrée septembre 2026.",
      subtitle:
        "Builder de produits IA full-stack. Trois missions client en production (e-commerce, BTP, événementiel) et un projet d'agent IA desktop personnel. Je cherche une équipe technique ambitieuse pour contribuer concrètement sur des produits.",
      keyFacts: [
        { label: "Contrat", value: "Apprentissage" },
        { label: "Rentrée", value: "Septembre 2026" },
        { label: "Rythme", value: "2 semaines entreprise / 2 semaines école" },
        { label: "Durée", value: "Cycle 3 ans (2026 → 2029)" },
        { label: "Localisation", value: "Paris + Île-de-France" },
      ],
      primaryCta: {
        label: "Télécharger mon CV",
        href: "/cv-badreddine-el-aouba.pdf",
      },
      secondaryCta: { label: "Voir mes projets", href: "/#work" },
    },
    profile: {
      eyebrow: "Profil",
      title: "Étudiant ingénieur ESIEA, 2e année — cycle ingénieur (Bac+5).",
      body: [
        "Je suis en 2e année du cycle ingénieur de l'ESIEA (campus Ivry-sur-Seine), en formation initiale jusqu'à septembre 2026. À partir de la rentrée 2026, je passe en alternance pour les trois années restantes.",
        "Hors école, je construis depuis deux ans des produits web et des outils IA — du chatbot OpenAI à l'agent desktop avec policy engine. Trois sites sont en production pour des clients réels.",
      ],
    },
    positioning: {
      eyebrow: "Ce que je cherche",
      title:
        "Une équipe qui construit des produits IA full-stack — pas un wrapper de plus.",
      body: [
        "Je veux contribuer concrètement à un produit, pas faire du support tickets pendant trois ans. Mon créneau: combiner exécution full-stack (React/Node) et intégration LLM/agentique sur du code en production.",
        "Les environnements qui m'attirent: startups en croissance, équipes IA dans des structures plus grandes, scale-ups produit. Stack ouverte — j'ai appris React, Python et Tauri en autodidacte sur des projets perso.",
      ],
    },
    proof: {
      eyebrow: "Preuves",
      title: "Ce que j'ai déjà livré seul.",
      intro:
        "Trois sites client en production et un agent IA desktop avec architecture multi-sous-agents. Détails complets sur la page d'accueil.",
      items: [
        {
          title: "UMOD — stage full-stack (juin-juillet 2025)",
          description:
            "Chatbot OpenAI, calculateur d'aides publiques, refonte complète du site. Trois livrables en production.",
        },
        {
          title: "Jarvis Desktop AI Assistant",
          description:
            "Agent IA local pour Windows, voix + plan + exécution. 4 sous-agents avec policy engine. Stack: Python, Tauri, React.",
        },
        {
          title: "Cogelas + Haltea (freelance)",
          description:
            "Refonte complète de deux sites vitrines client (BTP, événementiel). Migration Vercel + Resend + DNS au nom du client.",
        },
      ],
      seeMore: { label: "Détails des projets →", href: "/#work" },
    },
    stack: {
      eyebrow: "Stack technique",
      title: "Ce que je manipule au quotidien.",
      groups: [
        {
          label: "Front-end",
          items: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
          ],
        },
        {
          label: "Back-end",
          items: ["Node.js", "Express", "API REST", "Python"],
        },
        {
          label: "Bases de données",
          items: ["PostgreSQL", "MongoDB", "MySQL"],
        },
        {
          label: "IA & agentique",
          items: [
            "OpenAI API",
            "Claude",
            "Policy engines",
            "Prompt engineering",
            "Architecture multi-agent",
          ],
        },
        {
          label: "Langages",
          items: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
        },
        {
          label: "Outils & déploiement",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Cursor",
            "Vercel",
            "Render",
            "Resend",
            "Postman",
            "Stripe API",
          ],
        },
        {
          label: "Desktop & systèmes",
          items: ["Tauri", "Linux", "Windows"],
        },
      ],
    },
    languages: {
      eyebrow: "Langues",
      title: "Trois langues à l'oral comme à l'écrit.",
      items: [
        { label: "Français", level: "Langue maternelle" },
        { label: "Arabe", level: "Langue maternelle" },
        { label: "Anglais", level: "Courant — TOEIC 800" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Pour discuter d'un poste.",
      intro:
        "CV à télécharger ci-dessous, ou contactez-moi directement. Réponse sous 48 h ouvrées.",
      cvLabel: "Télécharger mon CV (PDF)",
      cvHref: "/cv-badreddine-el-aouba.pdf",
      schoolEmailLabel: "Email école (ESIEA)",
      schoolEmail: "elaouba@et.esiea.fr",
      personalEmailLabel: "Email personnel",
      personalEmail: "contact@badreddine.dev",
      phoneLabel: "Téléphone",
      phone: "+33 6 78 39 80 91",
      linkedinLabel: "LinkedIn",
      linkedinHref:
        "https://www.linkedin.com/in/badreddine-el-aouba-952b84352/",
      githubLabel: "GitHub",
      githubHref: "https://github.com/badr-fullstack-dev",
    },
  },
  en: {
    locale: "en",
    altLocale: "fr",
    altLocaleLabel: "FR",
    route: "/en/recruiters",
    altRoute: "/recruteurs",
    hero: {
      eyebrow: "For recruiters",
      title:
        "ESIEA engineering student seeking a full-stack apprenticeship — September 2026 start.",
      subtitle:
        "AI-product builder, full-stack. Three client sites in production (e-commerce, construction, events) and a personal desktop AI agent project. Looking for an ambitious technical team where I can contribute meaningfully to real products.",
      keyFacts: [
        { label: "Contract", value: "Apprenticeship (apprentissage)" },
        { label: "Start", value: "September 2026" },
        { label: "Rhythm", value: "2 weeks at company / 2 weeks at school" },
        { label: "Duration", value: "3-year cycle (2026 → 2029)" },
        { label: "Location", value: "Paris + Île-de-France" },
      ],
      primaryCta: {
        label: "Download my CV",
        href: "/cv-badreddine-el-aouba.pdf",
      },
      secondaryCta: { label: "See my projects", href: "/en/#work" },
    },
    profile: {
      eyebrow: "Profile",
      title:
        "ESIEA engineering student, year 2 of 5 (engineering cycle, Bac+5).",
      body: [
        "I'm in year 2 of the ESIEA engineering cycle (Ivry-sur-Seine campus), in initial coursework until September 2026. From the September 2026 intake, I switch to apprenticeship for the remaining three years.",
        "Outside school, I've been building web products and AI tools for two years — from an OpenAI chatbot to a desktop agent with a policy engine. Three sites are in production for real clients.",
      ],
    },
    positioning: {
      eyebrow: "What I'm looking for",
      title:
        "A team building real AI-product full-stack — not yet another wrapper.",
      body: [
        "I want to contribute meaningfully to a product, not push support tickets for three years. My lane: combining full-stack execution (React/Node) with LLM/agentic integration on production code.",
        "Environments that interest me: growth-stage startups, AI teams inside larger structures, product scale-ups. Stack-open — I've taught myself React, Python, and Tauri through personal projects.",
      ],
    },
    proof: {
      eyebrow: "Proof",
      title: "What I've already shipped solo.",
      intro:
        "Three client sites in production and a multi-subagent desktop AI agent. Full details on the homepage.",
      items: [
        {
          title: "UMOD — full-stack internship (June-July 2025)",
          description:
            "OpenAI chatbot, public-aid calculator, complete site rebuild. Three deliverables in production.",
        },
        {
          title: "Jarvis Desktop AI Assistant",
          description:
            "Local AI agent for Windows: voice + plan + execution. 4 subagents with a policy engine. Stack: Python, Tauri, React.",
        },
        {
          title: "Cogelas + Haltea (freelance)",
          description:
            "Full redesigns of two client showcase sites (construction, events). Migrated to Vercel + Resend + DNS under client name.",
        },
      ],
      seeMore: { label: "Project details →", href: "/en/#work" },
    },
    stack: {
      eyebrow: "Technical stack",
      title: "What I work with day to day.",
      groups: [
        {
          label: "Front-end",
          items: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
          ],
        },
        {
          label: "Back-end",
          items: ["Node.js", "Express", "REST APIs", "Python"],
        },
        {
          label: "Databases",
          items: ["PostgreSQL", "MongoDB", "MySQL"],
        },
        {
          label: "AI & agentic",
          items: [
            "OpenAI API",
            "Claude",
            "Policy engines",
            "Prompt engineering",
            "Multi-agent architecture",
          ],
        },
        {
          label: "Languages",
          items: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
        },
        {
          label: "Tools & deployment",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Cursor",
            "Vercel",
            "Render",
            "Resend",
            "Postman",
            "Stripe API",
          ],
        },
        {
          label: "Desktop & systems",
          items: ["Tauri", "Linux", "Windows"],
        },
      ],
    },
    languages: {
      eyebrow: "Languages",
      title: "Three languages, spoken and written.",
      items: [
        { label: "French", level: "Native" },
        { label: "Arabic", level: "Native" },
        { label: "English", level: "Fluent — TOEIC 800" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "To discuss a position.",
      intro:
        "CV available for download below, or contact me directly. Reply within 2 working days.",
      cvLabel: "Download my CV (PDF)",
      cvHref: "/cv-badreddine-el-aouba.pdf",
      schoolEmailLabel: "School email (ESIEA)",
      schoolEmail: "elaouba@et.esiea.fr",
      personalEmailLabel: "Personal email",
      personalEmail: "contact@badreddine.dev",
      phoneLabel: "Phone",
      phone: "+33 6 78 39 80 91",
      linkedinLabel: "LinkedIn",
      linkedinHref:
        "https://www.linkedin.com/in/badreddine-el-aouba-952b84352/",
      githubLabel: "GitHub",
      githubHref: "https://github.com/badr-fullstack-dev",
    },
  },
};
