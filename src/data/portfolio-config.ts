export type PersonaKey = "designer" | "developer" | "agency";

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Branding"
  | "UI/UX"
  | "SaaS"
  | "Dashboard"
  | "Ecommerce";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  summary: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory | ProjectCategory[];
  description: string;
  techStack: string[];
  tags: string[];
  thumbnail: string;
  gallery: string[];
  links: ProjectLink[];
  results: string[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  featured?: boolean;
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  content: string[];
}

export interface CaseStudy {
  title: string;
  slug: string;
  summary: string;
  role: string;
  duration: string;
  outcomes: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
}

export interface PersonaContent {
  label: string;
  role: string;
  tagline: string;
  availability: string;
  shortBio: string;
  longBio: string[];
  location: string;
  email: string;
  phone: string;
  website: string;
  heroCtas: NavItem[];
  nav: NavItem[];
  socialLinks: SocialLink[];
  stats: Stat[];
  trustedBy: string[];
  skills: string[];
  tools: string[];
  services: Service[];
  testimonials: Testimonial[];
  timeline: TimelineEntry[];
  projects: Project[];
  articles: Article[];
  caseStudies: CaseStudy[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  accentStyle: "aurora" | "ember" | "ocean";
  heroVariant: "split" | "stacked";
  cardStyle: "glass" | "solid";
  resumeFile: string;
}

const sharedProjects: Project[] = [
  {
    title: "Pulseboard Analytics",
    slug: "pulseboard-analytics",
    category: "Dashboard",
    description: "A modular analytics platform that turned complex operational data into fast, decision-ready reporting.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Framer Motion"],
    tags: ["Analytics", "B2B SaaS", "Data Viz"],
    thumbnail: "/images/projects/financio-product-support-and-enhancements-main.svg",
    gallery: ["/images/projects/pulseboard.svg", "/images/projects/pulseboard-detail.svg"],
    links: [
      { label: "Live Preview", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com" }
    ],
    results: ["41% faster report generation", "22% increase in weekly active usage", "Design system adopted across 3 teams"],
    overview: "Pulseboard unified fragmented data views into a single high-trust analytics workspace for operations teams.",
    challenge: "The team needed a dashboard that felt enterprise-ready without overwhelming users with dense reporting modules.",
    solution: "We paired a card-based information architecture with progressive disclosure, reusable chart blocks, and contextual filtering.",
    impact: ["Reduced decision latency for managers", "Improved dashboard adoption", "Created a cleaner path for future product modules"],
    featured: true
  },
  {
    title: "Cartwise Commerce",
    slug: "cartwise-commerce",
    category: "Ecommerce",
    description: "A conversion-focused ecommerce redesign with premium merchandising blocks and a faster checkout funnel.",
    techStack: ["Next.js", "React", "Stripe", "Sanity", "Vercel"],
    tags: ["Ecommerce", "Checkout", "Performance"],
    thumbnail: "/images/projects/financio-product-support-and-enhancements-features.svg",
    gallery: ["/images/projects/cartwise.svg", "/images/projects/cartwise-detail.svg"],
    links: [
      { label: "Case Study", href: "/case-studies/cartwise-growth-system" }
    ],
    results: ["18% lift in conversion", "31% faster page load", "Higher average order value"],
    overview: "Cartwise was designed to make product discovery feel premium while reducing friction in the funnel.",
    challenge: "The original storefront felt generic and underperformed on mobile, especially during seasonal campaigns.",
    solution: "We redesigned the storefront around storytelling, intent-based filters, and trust-building checkout cues.",
    impact: ["Improved mobile retention", "Raised purchase confidence", "Created a stronger premium brand signal"],
    featured: true
  },
  {
    title: "Northstar Mobile",
    slug: "northstar-mobile",
    category: "Mobile App",
    description: "A wellness and habit platform with a calm visual system, guided onboarding, and progress-led UX.",
    techStack: ["React Native", "TypeScript", "Supabase", "Figma"],
    tags: ["Mobile", "Consumer", "Wellness"],
    thumbnail: "/images/projects/financio-product-support-and-enhancements-data.svg",
    gallery: ["/images/projects/northstar.svg", "/images/projects/northstar-detail.svg"],
    links: [
      { label: "App Store Concept", href: "https://example.com" }
    ],
    results: ["4.8/5 prototype test rating", "34% onboarding completion lift", "Higher day-7 retention"],
    overview: "Northstar combined motion, microcopy, and habit psychology into a soft but accountable user journey.",
    challenge: "Users loved the concept but churned during onboarding because the app felt too abstract early on.",
    solution: "We tightened onboarding, surfaced progress loops faster, and clarified the value proposition with small guided wins.",
    impact: ["More completed onboarding", "Stronger emotional resonance", "Improved subscription intent"],
    featured: true
  },
  {
    title: "Luma Brand System",
    slug: "luma-brand-system",
    category: "Branding",
    description: "A flexible identity system for a fast-growing studio balancing premium restraint with digital warmth.",
    techStack: ["Figma", "Adobe Illustrator", "Notion"],
    tags: ["Brand", "Identity", "Systems"],
    thumbnail: "/images/projects/luma.svg",
    gallery: ["/images/projects/luma.svg"],
    links: [{ label: "Brand Deck", href: "https://example.com" }],
    results: ["Cohesive brand rollout", "Faster campaign production", "Improved brand recall"],
    overview: "Luma needed a design system that could scale from proposals to launch campaigns without feeling corporate.",
    challenge: "The brand was inconsistent across channels and lacked a visual center of gravity.",
    solution: "We created a restrained but expressive identity anchored by typography, spacing, and tonal flexibility.",
    impact: ["Sharper positioning", "Reusable asset system", "Faster creative production"]
  },
  {
    title: "Orbit SaaS Site",
    slug: "orbit-saas-site",
    category: "SaaS",
    description: "A polished marketing site built to convert technical buyers through product clarity and trust signals.",
    techStack: ["Next.js", "Tailwind CSS", "Motion", "CMS"],
    tags: ["Marketing Site", "SaaS", "Conversion"],
    thumbnail: "/images/projects/orbit.svg",
    gallery: ["/images/projects/orbit.svg"],
    links: [{ label: "Launch Page", href: "https://example.com" }],
    results: ["Higher demo requests", "Clearer positioning", "Shorter sales cycle support"],
    overview: "Orbit needed a marketing site that felt mature enough for enterprise while still approachable for product teams.",
    challenge: "The old site buried the product story and lacked clear proof of value.",
    solution: "We focused on message hierarchy, narrative product visuals, and strategic social proof placement.",
    impact: ["Stronger first impression", "Improved CTA engagement", "Better sales enablement"]
  }
];

const sharedArticles: Article[] = [
  {
    title: "How to Design Portfolios That Actually Convert",
    slug: "how-to-design-portfolios-that-convert",
    excerpt: "A practical framework for balancing visual polish, trust, and conversion signals in a personal portfolio.",
    category: "Strategy",
    readTime: "6 min read",
    publishedAt: "2026-02-12",
    content: [
      "A premium portfolio is not just about visual style. It needs clarity, confidence, and a strong narrative about the outcomes you create.",
      "The strongest portfolios guide visitors through proof, positioning, and a low-friction next step. Design supports that journey rather than distracting from it."
    ]
  },
  {
    title: "Shipping Better Product Pages with Systems Thinking",
    slug: "shipping-better-product-pages-with-systems-thinking",
    excerpt: "Why reusable content blocks and clear information architecture help teams move faster without compromising taste.",
    category: "Process",
    readTime: "4 min read",
    publishedAt: "2026-01-26",
    content: [
      "High-quality pages are rarely accidents. They come from systems that make good decisions easier to repeat.",
      "When your layout, motion, and content structure are modular, your team can maintain consistency while still making each page feel intentional."
    ]
  }
];

const sharedCaseStudies: CaseStudy[] = [
  {
    title: "Cartwise Growth System",
    slug: "cartwise-growth-system",
    summary: "A conversion-focused redesign that paired merchandising clarity with premium visual storytelling.",
    role: "Strategy, UI/UX, Frontend",
    duration: "10 weeks",
    outcomes: ["18% conversion lift", "31% faster mobile load", "Higher AOV from richer cross-sell design"],
    sections: [
      {
        title: "Discovery",
        body: "We reviewed funnel drop-offs, heatmaps, and merchandising behavior to understand where product confidence was breaking down."
      },
      {
        title: "Design Direction",
        body: "The new system leaned into warm editorial layouts, stronger product framing, and simplified purchase decisions."
      },
      {
        title: "Outcome",
        body: "The final experience felt more premium and more usable, especially on mobile where most revenue originated."
      }
    ]
  }
];

const developerProjects: Project[] = [
  {
    title: "Financio",
    slug: "financio",
    category: "Web App",
    description: "Contributed to Financio through bug fixing, feature enhancements, and data patching for a live production product at ABSS.",
    techStack: ["Angular", "MySQL", "Debugging", "Laravel", "PHP"],
    tags: ["Bug Fixing", "Enhancements", "Data Patching"],
    thumbnail: "/images/projects/financio-product-support-and-enhancements-main.svg",
    gallery: ["/images/projects/financio-product-support-and-enhancements-main.svg", "/images/projects/financio-product-support-and-enhancements-features.svg", "/images/projects/financio-product-support-and-enhancements-data.svg"],
    links: [
      { label: "Resume", href: "/resume" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mirul-/" }
    ],
    results: [
      "Resolved reported issues across existing product flows",
      "Delivered iterative enhancements within an active production codebase",
      "Supported data correction and patching for operational continuity"
    ],
    overview:
      "At ABSS, I work on Financio as part of the ongoing engineering effort to keep the product stable, reliable, and easier to support.",
    challenge:
      "Supporting a live business product means balancing bug fixing, feature work, and data-sensitive changes without disrupting existing users or workflows.",
    solution:
      "I investigate reported issues, implement safe fixes, ship practical enhancements, and support data patching tasks with care for existing business rules and production behavior.",
    impact: [
      "Improved product reliability and day-to-day usability",
      "Kept delivery moving through targeted enhancements instead of large rewrites",
      "Helped maintain confidence in a production finance platform"
    ],
    featured: true
  },
  {
    title: "PigrimPro",
    slug: "pigrimpro",
    category: ["Web App", "Mobile App"],
    description: "Built and optimized a Laravel-based web system with MySQL for company operations and data management.",
    techStack: ["Laravel", "MySQL", "REST APIs", "Backend Development", "Frontend Integration", "Mobile Development - Android", "Stripe Integration", "PHP"],
    tags: ["Laravel", "Operations", "Web Development"],
    thumbnail: "/images/projects/pigrimpro-workforce-system.svg",
    gallery: ["/images/projects/pigrimpro-workforce-system.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Improved query performance and reduced redundancy through schema normalization",
      "Built RESTful APIs for backend and frontend communication",
      "Helped support high-volume transactions with lower latency"
    ],
    overview:
      "At Theta Edge Berhad, I worked on PigrimPro as a Laravel and MySQL web platform supporting operational workflows and company data management.",
    challenge:
      "The system needed solid data handling, reliable API communication, and backend efficiency that could support ongoing business usage.",
    solution:
      "I developed and optimized the platform, improved the database structure, built RESTful APIs, and collaborated with other developers to keep the system stable and user-friendly.",
    impact: [
      "Improved reliability through testing and debugging",
      "Reduced latency in important backend workflows",
      "Delivered a stronger foundation for day-to-day operations"
    ],
    featured: true
  },
  {
    title: "SakuPay",
    slug: "sakupay",
    category: "Mobile App",
    description: "Maintained and updated an existing iOS app in Swift while improving compatibility, performance, and UI responsiveness.",
    techStack: ["Swift", "iOS", "Mobile Maintenance", "Debugging"],
    tags: ["iOS", "Maintenance", "Performance"],
    thumbnail: "/images/projects/sakupay-ios-maintenance.svg",
    gallery: ["/images/projects/sakupay-ios-maintenance.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Improved app compatibility with newer iOS versions and devices",
      "Resolved bugs and performance issues in an existing codebase",
      "Contributed features and code documentation for future updates"
    ],
    overview:
      "I supported SakuPay as an iOS maintenance effort, working in Swift to keep the app stable, responsive, and easier to maintain over time.",
    challenge:
      "Working on an existing mobile app meant balancing bug fixing, OS compatibility, UI performance, and partially deployed feature work.",
    solution:
      "I updated the application for newer platforms, fixed issues, improved responsiveness, and documented code to support maintainability and future enhancement work.",
    impact: [
      "Stronger stability on real devices",
      "Better maintainability for future developers",
      "Practical improvement of an actively maintained app"
    ]
  },
  {
    title: "POSLite",
    slug: "poslite",
    category: ["Mobile App", "Web App"],
    description: "Built features for a Flutter and Android payment terminal solution with authentication, payments, and real-time synchronization.",
    techStack: ["Flutter", "Android Java", "Payment SDK", "UI Development", "API Integration", "Laravel", "PHP", "Postman"],
    tags: ["Flutter", "Android", "Payments"],
    thumbnail: "/images/projects/poslite-payment-terminal.svg",
    gallery: ["/images/projects/poslite-payment-terminal.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Integrated APIs for authentication, payments, and real-time sync",
      "Built Flutter widgets with cleaner, more intuitive UI",
      "Contributed Android terminal flow design and SDK integration"
    ],
    overview:
      "POSLite combined Flutter mobile development with Android payment terminal work, including UI design, transaction flows, and API integration.",
    challenge:
      "Payment products require stable transaction handling, secure SDK integration, and reliable communication between mobile and terminal environments.",
    solution:
      "I worked across Flutter and Android layers, handled UI implementation, supported transaction flow design, and resolved API and data flow issues with backend developers.",
    impact: [
      "Improved usability across terminal and mobile flows",
      "Strengthened real-world testing and validation",
      "Built hands-on experience in payment integrations and security-focused workflows"
    ],
    featured: true
  },
  {
    title: "TrackerHero",
    slug: "trackerhero",
    category: "Dashboard",
    description: "Supported backend delivery, code review, testing, and issue identification during an internship at TrackerHero.",
    techStack: ["Backend Support", "Testing", "Laravel", "PHP", "Postman"],
    tags: ["Internship", "Backend", "QA"],
    thumbnail: "/images/projects/trackerhero-backend-internship.svg",
    gallery: ["/images/projects/trackerhero-backend-internship.svg"],
    links: [{ label: "Resume", href: "/resume" }],
    results: [
      "Supported developers with technical and quality-focused tasks",
      "Helped keep projects aligned with client needs and feedback",
      "Assisted testing from both user and admin perspectives before release"
    ],
    overview:
      "During my internship at TrackerHero, I contributed to backend-related delivery support while learning how product quality, testing, and communication come together in a live team environment.",
    challenge:
      "The role involved balancing hands-on technical assistance with communication, testing, and progress tracking across active workstreams.",
    solution:
      "I supported technical reviews, validated application behavior, identified issues before release, and helped keep project progress aligned with client expectations.",
    impact: [
      "Strengthened my foundation in backend teamwork",
      "Improved my understanding of release quality checks",
      "Built early experience in client-aware engineering delivery"
    ]
  }
];

export const portfolioConfig = {
  siteName: "Amirul Iman Portfolio",
  siteDescription:
    "Portfolio website for Amirul Iman, a full stack web software engineer building and maintaining web products.",
  activePersona: "developer" as PersonaKey,
  theme: {
    defaultMode: "system" as const,
    enableThemeToggle: true,
    radius: "1.5rem",
    accents: {
      aurora: "from-cyan-400/30 via-sky-500/20 to-indigo-500/30",
      ember: "from-amber-300/30 via-orange-400/20 to-rose-500/30",
      ocean: "from-emerald-300/25 via-teal-400/15 to-cyan-500/25"
    }
  },
  seo: {
    title: "Amirul Iman | Full Stack Web Software Engineer",
    description:
      "Full stack web software engineer currently building, fixing, and enhancing Financio at Asian Business Software Solutions (ABSS).",
    keywords: [
      "Amirul Iman",
      "full stack web software engineer",
      "ABSS",
      "Financio",
      "web developer"
    ]
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" }
  ],
  homepage: {
    showTestimonialsCarousel: true,
    showFaq: true,
    featuredProjectsCount: 5
  },
  personas: {
    designer: {
      label: "Avery Lane",
      role: "Senior Product Designer",
      tagline: "Designing clear product experiences that move metrics and feel unmistakably premium.",
      availability: "Open for select product design engagements",
      shortBio:
        "UI/UX designer focused on SaaS, marketplaces, and end-to-end product systems for ambitious digital teams.",
      longBio: [
        "I partner with founders and product teams to shape interfaces that feel elegant, intuitive, and commercially effective.",
        "My work blends visual systems, UX strategy, prototyping, and growth thinking so products can launch with confidence and scale with consistency."
      ],
      location: "Singapore",
      email: "avery@portfolionova.dev",
      phone: "+65 8123 4567",
      website: "https://portfolionova.dev",
      heroCtas: [
        { label: "View Projects", href: "/projects" },
        { label: "Book a Call", href: "/contact" }
      ],
      nav: [],
      socialLinks: [
        { label: "Dribbble", href: "https://dribbble.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Behance", href: "https://behance.net" }
      ],
      stats: [
        { value: "28+", label: "Products designed" },
        { value: "4", label: "Design awards" },
        { value: "92%", label: "Client retention" }
      ],
      trustedBy: ["Northstar", "Orbit", "FrameLab", "Studioflow", "NovaOS"],
      skills: ["Product Strategy", "UX Research", "Interface Design", "Design Systems", "Prototyping", "Usability Testing"],
      tools: ["Figma", "Framer", "FigJam", "Notion", "Adobe CC", "Maze"],
      services: [
        {
          title: "Product Design",
          description: "End-to-end product design for SaaS, mobile apps, and internal tools.",
          deliverables: ["UX flows", "Wireframes", "UI design", "Interaction prototypes"]
        },
        {
          title: "Design Systems",
          description: "Scalable systems that keep teams aligned across product surfaces.",
          deliverables: ["Token setup", "Component libraries", "Documentation", "Governance"]
        },
        {
          title: "UX Audits",
          description: "High-signal audits to uncover friction, improve conversion, and sharpen usability.",
          deliverables: ["Heuristic review", "Prioritized issues", "Quick-win recommendations"]
        }
      ],
      testimonials: [
        {
          name: "Lena Ford",
          role: "VP Product",
          company: "Northstar",
          quote: "Avery brought structure, calm, and exceptional taste to a messy product challenge. The new flows converted immediately better."
        },
        {
          name: "Joel Tran",
          role: "Founder",
          company: "Studioflow",
          quote: "We finally had a design partner who understood both brand perception and product complexity."
        }
      ],
      timeline: [
        {
          period: "2023 - Present",
          title: "Lead Product Designer",
          organization: "Freelance",
          summary: "Leading product strategy and design execution for venture-backed software teams."
        },
        {
          period: "2020 - 2023",
          title: "Senior UI/UX Designer",
          organization: "NovaOS",
          summary: "Built the first cross-platform design system and redesigned the analytics suite."
        }
      ],
      projects: sharedProjects,
      articles: sharedArticles,
      caseStudies: sharedCaseStudies,
      faq: [
        {
          question: "What types of teams do you work with?",
          answer: "Mostly SaaS startups, scale-ups, and product teams that need senior design support without adding full-time headcount."
        },
        {
          question: "Can you work with engineers directly?",
          answer: "Yes. My process includes handoff-ready specs, component thinking, and async collaboration with product and engineering."
        }
      ],
      accentStyle: "aurora",
      heroVariant: "split",
      cardStyle: "glass",
      resumeFile: "/resume/portfolio-nova-resume.txt"
    },
    developer: {
      label: "Amirul Iman",
      role: "Full Stack Web Software Engineer",
      tagline: "Full stack engineer with experience across web, mobile, APIs, and product maintenance, focused on reliable software and practical delivery.",
      availability: "Currently working at Asian Business Software Solutions (ABSS)",
      shortBio:
        "I am a Full Stack Web Software Engineer with experience supporting and enhancing live web and mobile products across business software environments.",
      longBio: [
        "I am a Full Stack Web Software Engineer with experience supporting and enhancing live web and mobile products across business software environments. Currently at Asian Business Software Solutions (ABSS), I work on Financio, where I handle bug fixing, feature enhancements, and data patching to improve system stability and support ongoing product operations.",
        "My background includes hands-on experience with Laravel systems, Flutter applications, iOS app maintenance, and Android payment terminal integrations at Theta Edge Berhad, as well as backend internship experience at TrackerHero. These roles have helped me build strong skills in debugging, maintaining existing codebases, testing production-ready features, and contributing effectively across different stages of the software lifecycle.",
        "I enjoy working on practical engineering problems, improving software reliability, and delivering solutions that support both users and business needs.",
        "Core focus: Full stack development, production bug fixing, feature enhancement, system maintenance, and cross-platform product support."
      ],
      location: "Malaysia",
      email: "amirul.iman698@gmail.com",
      phone: "Available on request",
      website: "https://github.com/iamirul2000",
      heroCtas: [
        { label: "Explore Work", href: "/projects" },
        { label: "Download Resume", href: "/resume" }
      ],
      nav: [],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/iamirul2000" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mirul-/" },
        { label: "Email", href: "mailto:amirul.iman698@gmail.com" }
      ],
      stats: [
        { value: "3+", label: "Years of experience" },
        { value: "4", label: "Major product environments" },
        { value: "Oct 2025", label: "Started at ABSS" }
      ],
      trustedBy: ["Asian Business Software Solutions", "Financio", "Theta Edge Berhad", "PigrimPro", "SakuPay", "POSLite", "TrackerHero"],
      skills: ["Laravel", "REST APIs", "MySQL", "Bug Fixing", "Feature Enhancements", "Data Patching", "iOS Maintenance", "Flutter", "Android Payment Integration", "Troubleshooting", "Testing", "Production Support"],
      tools: ["Laravel", "MySQL", "REST APIs", "Swift", "Flutter", "Android Java", "SQL", "Git"],
      services: [
        {
          title: "Bug Fixing",
          description: "Investigate issues in existing systems, identify root causes, and deliver safe production-ready fixes.",
          deliverables: ["Issue investigation", "Root cause analysis", "Targeted fixes", "Regression-aware updates"]
        },
        {
          title: "Feature Enhancements",
          description: "Improve existing product flows with practical enhancements that fit current business logic and user needs.",
          deliverables: ["Enhancement delivery", "Workflow improvements", "UI updates", "Existing system integration"]
        },
        {
          title: "Data Patching Support",
          description: "Handle production-sensitive data patching tasks carefully to restore accuracy and support business operations.",
          deliverables: ["Data correction", "Patch analysis", "Production support", "Issue follow-through"]
        }
      ],
      testimonials: [],
      timeline: [
        {
          period: "Oct 2025 - Present",
          title: "Full Stack Web Software Engineer",
          organization: "Asian Business Software Solutions (ABSS)",
          summary: "Working on Financio with a focus on bug fixing, feature enhancements, and data patching for a live production product."
        },
        {
          period: "Sept 2023 - Oct 2025",
          title: "Full Stack Developer",
          organization: "Theta Edge Berhad, Petaling Jaya",
          summary: "Worked across PigrimPro, SakuPay, and POSLite, building Laravel and MySQL web systems, maintaining iOS apps in Swift, developing Flutter interfaces, integrating Android payment terminal flows, and resolving API and data flow issues."
        },
        {
          period: "March 2023 - June 2023",
          title: "Back End Developer Intern",
          organization: "TrackerHero, Cyberjaya",
          summary: "Supported developers through technical assistance, code reviews, testing, issue identification, and client-facing progress communication while helping validate application quality before release."
        }
      ],
      projects: developerProjects,
      articles: [],
      caseStudies: [],
      faq: [
        {
          question: "What are you currently working on?",
          answer: "I am currently working on Financio at ABSS as a full stack web software engineer, mainly handling bug fixes, feature enhancements, and data patching."
        },
        {
          question: "What kind of engineering work do you do most often?",
          answer: "Most of my current work is in maintaining and improving existing products, from investigating issues and shipping fixes to enhancing features, supporting data changes, and working across web, mobile, and API integrations."
        },
        {
          question: "What experience did you have before ABSS?",
          answer: "Before ABSS, I worked at Theta Edge Berhad on Laravel web systems, iOS maintenance, Flutter apps, and Android payment terminal integrations, and earlier completed a backend internship at TrackerHero in Cyberjaya."
        }
      ],
      accentStyle: "ocean",
      heroVariant: "split",
      cardStyle: "glass",
      resumeFile: "/resume/amirul-iman-resume.pdf"
    },
    agency: {
      label: "Northline Studio",
      role: "Digital Product Studio",
      tagline: "Helping ambitious brands launch sharper products, stronger identities, and cleaner growth systems.",
      availability: "Booking Q2 brand and product engagements",
      shortBio:
        "A boutique studio blending strategy, design, and development to launch modern brands and high-performing digital experiences.",
      longBio: [
        "We work with founders, in-house teams, and funded startups to create premium digital touchpoints that feel credible from day one.",
        "From brand systems and websites to SaaS products and conversion-focused landing pages, our work is built to look elevated and perform in the real world."
      ],
      location: "Remote / Global",
      email: "hello@portfolionova.dev",
      phone: "+1 415 555 0199",
      website: "https://portfolionova.dev",
      heroCtas: [
        { label: "See Services", href: "/services" },
        { label: "Start a Project", href: "/contact" }
      ],
      nav: [],
      socialLinks: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Behance", href: "https://behance.net" }
      ],
      stats: [
        { value: "56+", label: "Client launches" },
        { value: "$18M+", label: "Funding supported" },
        { value: "11 days", label: "Avg. concept turnaround" }
      ],
      trustedBy: ["Astra", "Fieldwork", "ModeHaus", "Ledgerly", "Signal Labs"],
      skills: ["Brand Strategy", "UI/UX", "Web Design", "Development", "Conversion Design", "Creative Direction"],
      tools: ["Figma", "Next.js", "Webflow", "Notion", "Adobe CC", "Framer"],
      services: [
        {
          title: "Brand & Identity",
          description: "Strategic identities for startups, agencies, and modern digital products.",
          deliverables: ["Brand strategy", "Visual systems", "Messaging direction", "Launch assets"]
        },
        {
          title: "Web & Product Design",
          description: "Premium interfaces and websites that balance elegance with conversion.",
          deliverables: ["Site design", "Product UX", "Component systems", "Prototypes"]
        },
        {
          title: "Launch Development",
          description: "High-quality implementation for websites, campaigns, and startup MVPs.",
          deliverables: ["Frontend builds", "CMS setup", "Deployment", "Optimization"]
        }
      ],
      testimonials: [
        {
          name: "Priya Nair",
          role: "CMO",
          company: "Astra",
          quote: "Northline made us look like a category leader before we even launched. The work felt strategic, not just aesthetic."
        },
        {
          name: "Jordan Pike",
          role: "Founder",
          company: "Fieldwork",
          quote: "The team moved quickly, gave excellent direction, and delivered a site our sales team now proudly shares."
        }
      ],
      timeline: [
        {
          period: "2021 - Present",
          title: "Founding Studio",
          organization: "Northline",
          summary: "Launching premium digital products and identities for founders and in-house teams."
        },
        {
          period: "2018 - 2021",
          title: "Creative & Product Consulting",
          organization: "Independent",
          summary: "Led multidisciplinary delivery across brand, web, and product projects."
        }
      ],
      projects: sharedProjects,
      articles: sharedArticles,
      caseStudies: sharedCaseStudies,
      faq: [
        {
          question: "Do you take on smaller projects?",
          answer: "Yes, especially focused design sprints, launch pages, and UX audits for teams that need high leverage quickly."
        },
        {
          question: "Can you work as an embedded partner?",
          answer: "Yes. We frequently plug into internal product, growth, and brand teams for a defined sprint or launch cycle."
        }
      ],
      accentStyle: "ember",
      heroVariant: "stacked",
      cardStyle: "solid",
      resumeFile: "/resume/portfolio-nova-resume.txt"
    }
  }
} as const;

export function getActivePersona() {
  return portfolioConfig.personas[portfolioConfig.activePersona];
}

export function getAllProjects() {
  return getActivePersona().projects;
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return getActivePersona().articles.find((article) => article.slug === slug);
}

export function getCaseStudyBySlug(slug: string) {
  return getActivePersona().caseStudies.find((study) => study.slug === slug);
}
