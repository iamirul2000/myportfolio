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

// Company Projects
const companyProjects: Project[] = [
  {
    title: "Financio",
    slug: "financio",
    category: "Web App",
    description: "Production support and enhancement work for Financio at ABSS, covering bug fixes, feature updates, and data patching in a live business software product.",
    techStack: ["Angular", "MySQL", "Debugging", "Laravel", "PHP"],
    tags: ["Bug Fixing", "Enhancements", "Data Patching"],
    thumbnail: "/images/projects/financio-product-support-and-enhancements-main.svg",
    gallery: ["/images/projects/financio-product-support-and-enhancements-main.svg", "/images/projects/financio-product-support-and-enhancements-features.svg", "/images/projects/financio-product-support-and-enhancements-data.svg"],
    links: [
      { label: "Resume", href: "/resume" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mirul-/" }
    ],
    results: [
      "Investigated and resolved issues across existing product flows",
      "Delivered targeted feature enhancements inside a live production codebase",
      "Handled data patching work with care for existing records and business rules"
    ],
    overview:
      "At ABSS, I work on Financio as part of the ongoing engineering effort behind a live product used for day-to-day business operations. My work spans bug fixing, feature enhancement, and data patching, with a strong focus on stability and safe delivery.",
    challenge:
      "Working on a live product means changes have to fit existing workflows, business rules, and production data. Even small fixes or enhancements need to be careful, practical, and low-risk.",
    solution:
      "I investigate reported issues, trace problems through the current codebase, implement safe fixes, support incremental enhancements, and handle data patching tasks with attention to existing behavior in production.",
    impact: [
      "Improved reliability across existing product flows",
      "Supported continuous delivery through focused, low-risk changes",
      "Helped maintain a stable production experience for business users"
    ],
    featured: true
  },
  {
    title: "PigrimPro",
    slug: "pigrimpro",
    category: ["Web App", "Mobile App"],
    description: "Laravel and MySQL-based workforce and operations system built around backend improvements, database design, and API development for internal business workflows.",
    techStack: ["Laravel", "MySQL", "REST APIs", "Backend Development", "Frontend Integration", "Mobile Development - Android", "Stripe Integration", "PHP"],
    tags: ["Laravel", "Operations", "Web Development"],
    thumbnail: "/images/projects/pigrimpro-workforce-system.svg",
    gallery: ["/images/projects/pigrimpro-workforce-system.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Improved schema quality and reduced redundancy through database normalization",
      "Built RESTful APIs to support frontend and backend communication",
      "Optimized backend behavior to better handle ongoing operational workloads"
    ],
    overview:
      "At Theta Edge Berhad, I worked on PigrimPro as a Laravel-based system used for company operations and data management. The work involved backend development, database improvements, API support, testing, and keeping the platform reliable for day-to-day use.",
    challenge:
      "The platform needed reliable data handling, cleaner database design, and backend performance that could support everyday business usage without creating unnecessary complexity.",
    solution:
      "I developed and optimized Laravel features, improved the MySQL schema, built RESTful APIs, and worked closely with other developers to keep the system stable, maintainable, and easier to extend.",
    impact: [
      "Improved reliability through debugging, testing, and optimization work",
      "Reduced inefficiencies in key backend and data workflows",
      "Strengthened the foundation for ongoing operational use"
    ],
    featured: true
  },
  {
    title: "SakuPay",
    slug: "sakupay",
    category: "Mobile App",
    description: "Maintenance and enhancement work on an existing Swift iOS application, focused on compatibility, performance, responsiveness, and long-term maintainability.",
    techStack: ["Swift", "iOS", "Mobile Maintenance", "Debugging"],
    tags: ["iOS", "Maintenance", "Performance"],
    thumbnail: "/images/projects/sakupay-ios-maintenance.svg",
    gallery: ["/images/projects/sakupay-ios-maintenance.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Updated the app for newer iOS versions and device support",
      "Resolved bugs and improved performance in an existing codebase",
      "Added documentation to support future maintenance and updates"
    ],
    overview:
      "SakuPay involved maintaining and improving an existing iOS application in Swift. The work centered on keeping the app stable on newer devices, fixing issues in an established codebase, and making it easier to maintain over time.",
    challenge:
      "Maintaining an existing mobile app meant balancing bug fixing, OS compatibility, UI responsiveness, and partially delivered feature work without introducing regressions.",
    solution:
      "I updated the application for newer iOS versions, fixed bugs, improved UI responsiveness, and documented parts of the codebase to support future maintenance and enhancement work.",
    impact: [
      "Improved stability and compatibility on supported devices",
      "Made the codebase easier to maintain for future updates",
      "Contributed practical improvements to an actively maintained app"
    ]
  },
  {
    title: "POSLite",
    slug: "poslite",
    category: ["Mobile App", "Web App"],
    description: "Cross-platform payment product spanning Flutter mobile interfaces and an Android terminal app, with API integration, transaction flow work, and real-time synchronization.",
    techStack: ["Flutter", "Android Java", "Payment SDK", "UI Development", "API Integration", "Laravel", "PHP", "Postman"],
    tags: ["Flutter", "Android", "Payments"],
    thumbnail: "/images/projects/poslite-payment-terminal.svg",
    gallery: ["/images/projects/poslite-payment-terminal.svg"],
    links: [{ label: "Contact", href: "/contact" }],
    results: [
      "Integrated APIs for authentication, payments, and real-time synchronization",
      "Built Flutter widgets with cleaner and more intuitive interaction flows",
      "Contributed terminal-side transaction logic and payment SDK integration"
    ],
    overview:
      "POSLite combined Flutter mobile development with Android payment terminal work in a payment-focused product. My work covered UI implementation, API integration, transaction flow support, and troubleshooting data flow issues across the system.",
    challenge:
      "Payment systems require stable transaction handling, reliable communication between devices, and careful integration with terminal hardware and gateway SDKs.",
    solution:
      "I worked across Flutter and Android layers, built UI components, supported transaction flow design, integrated payment-related SDK behavior, and collaborated with backend developers to resolve API and data flow issues.",
    impact: [
      "Improved usability across both terminal and mobile touchpoints",
      "Strengthened product stability through testing and issue resolution",
      "Built hands-on experience in payment integrations and transaction-focused workflows"
    ],
    featured: true
  },
  {
    title: "TrackerHero",
    slug: "trackerhero",
    category: "Dashboard",
    description: "Backend internship experience covering technical support, testing, issue validation, and client-aware delivery on active product work.",
    techStack: ["Backend Support", "Testing", "Laravel", "PHP", "Postman"],
    tags: ["Internship", "Backend", "QA"],
    thumbnail: "/images/projects/trackerhero-backend-internship.svg",
    gallery: ["/images/projects/trackerhero-backend-internship.svg"],
    links: [{ label: "Resume", href: "/resume" }],
    results: [
      "Supported developers with technical tasks and quality-focused checks",
      "Helped keep work aligned with client requirements and feedback",
      "Tested application flows from both user and admin perspectives before release"
    ],
    overview:
      "During my internship at TrackerHero, I supported backend-related work while learning how testing, issue validation, communication, and delivery all connect in a live product team.",
    challenge:
      "The role required balancing technical support with quality checks, progress tracking, and communication around active client-facing work.",
    solution:
      "I supported developers with technical assistance, helped validate application behavior, identified issues before release, and kept progress aligned with client needs and project requirements.",
    impact: [
      "Strengthened my foundation in backend team workflows",
      "Improved my understanding of testing and release-readiness work",
      "Built early experience in client-aware software delivery"
    ]
  }
];

// Personal Projects
const personalProjects: Project[] = [
  {
    title: "MoneyPlan Budget Planner",
    slug: "moneyplan-budget-planner",
    category: "Web App",
    description: "A personal finance and budget planning web application designed to help users track expenses, manage budgets, and achieve financial goals.",
    techStack: ["Web Development", "Budget Planning", "Personal Finance"],
    tags: ["Finance", "Budget", "Personal Project"],
    thumbnail: "/images/projects/budget-planner.png",
    gallery: ["/images/projects/budget-planner.png"],
    links: [
      { label: "Try Demo", href: "/demo/budget-planner" },
      { label: "Buy on Gumroad", href: "https://amiruliman83.gumroad.com/l/moneyplan-budget-planner" }
    ],
    results: [
      "Built a complete budget planning solution from concept to launch",
      "Published and available for purchase on Gumroad",
      "Designed for practical personal finance management"
    ],
    overview:
      "MoneyPlan Budget Planner is a personal project built to help users take control of their finances through intuitive budget tracking and expense management. The app focuses on making financial planning accessible and straightforward.",
    challenge:
      "Many budget apps are either too complex for everyday use or lack the features needed for effective financial planning. The goal was to create a balanced solution that's both powerful and easy to use.",
    solution:
      "I designed and built a web application that combines essential budgeting features with a clean, user-friendly interface. The app helps users track expenses, set budget goals, and monitor their financial progress.",
    impact: [
      "Created a practical tool for personal finance management",
      "Successfully launched as a commercial product",
      "Demonstrated end-to-end product development skills"
    ],
    featured: true
  },
  {
    title: "RestaurantStarter",
    slug: "restaurant-starter",
    category: ["Web App", "UI/UX"],
    description: "Restaurant website starter project focused on food-first presentation, direct ordering calls to action, and a warm cafe-style visual system.",
    techStack: ["Frontend Development", "Responsive Design", "Landing Page", "Vercel"],
    tags: ["Restaurant Template", "Landing Page", "Brand Experience"],
    thumbnail: "/images/projects/restaurant-starter-cover.svg",
    gallery: ["/images/projects/restaurant-starter-cafe-template.svg"],
    links: [{ label: "Live Site", href: "https://restaurantstarter.vercel.app/" }],
    results: [
      "Built a polished landing page with responsive sections and clear hierarchy",
      "Designed direct ordering paths around call and WhatsApp actions",
      "Used custom styling and layout work to give the site a stronger local brand feel"
    ],
    overview:
      "RestaurantStarter is a personal web project built as a modern cafe and restaurant landing page concept. The goal was to create a cleaner, more intentional alternative to generic food business templates while keeping the experience practical for real customer actions.",
    challenge:
      "Many small business food sites feel visually inconsistent or overly generic, which makes it harder to communicate brand personality and guide visitors toward direct actions.",
    solution:
      "I designed the layout around strong visual hierarchy, warm local styling, food-focused presentation, and direct CTAs like WhatsApp ordering and call actions.",
    impact: [
      "Created a stronger first impression than a typical template-style site",
      "Made direct-ordering actions easier to find",
      "Balanced visual design with practical usability on desktop and mobile"
    ]
  },
  {
    title: "WorkshopFlow",
    slug: "workshopflow",
    category: ["Web App", "Dashboard"],
    description: "Personal workshop operations app focused on customers, jobs, technicians, inventory, and billing in a cleaner admin workflow.",
    techStack: ["Web Application", "Admin Dashboard", "Operations Workflow", "Railway"],
    tags: ["Workshop Management", "Billing", "Inventory"],
    thumbnail: "/images/projects/workshopflow-operations-dashboard.png",
    gallery: ["/images/projects/workshopflow-operations-dashboard.png"],
    links: [{ label: "Try Demo", href: "/demo/workshopflow" }, { label: "Contact", href: "/contact" }],
    results: [
      "Organized core workshop operations into one admin-facing product flow",
      "Built a clearer product direction around jobs, technicians, inventory, and billing",
      "Developed a comprehensive admin workspace for workshop management"
    ],
    overview:
      "WorkshopFlow is a personal web application built around the day-to-day workflow of a repair workshop. From the current product direction, it brings together customer handling, job tracking, technician assignment, inventory, and billing inside one admin workspace.",
    challenge:
      "Operational workshop work often spans multiple related tasks, so the product needs to keep information structured and easy to move through without making admin work feel fragmented.",
    solution:
      "I shaped the experience around a straightforward admin flow, with clear entry points for jobs, billing, inventory, and related workshop operations so the system feels more focused and easier to use.",
    impact: [
      "Created a more coherent admin experience for workshop operations",
      "Made key operational areas easier to understand at a glance",
      "Added another practical product build to the portfolio beyond maintenance-heavy work"
    ],
    featured: true
  },
  {
    title: "Clinic Booking",
    slug: "clinic-booking",
    category: ["Web App", "Dashboard"],
    description: "A professional clinic booking and management system with patient appointments, doctor scheduling, service management, and admin dashboard for healthcare facilities.",
    techStack: ["Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS", "Docker"],
    tags: ["Healthcare", "Clinic Management", "Booking System", "Admin Dashboard"],
    thumbnail: "/images/projects/clinic-booking-dashboard.png",
    gallery: ["/images/projects/clinic-booking-dashboard.png"],
    links: [
      { label: "Try Demo", href: "/demo/clinic-booking" },
      { label: "Contact", href: "/contact" }
    ],
    results: [
      "Built a complete clinic management system from concept to deployment",
      "Designed healthcare-focused UI with medical aesthetic",
      "Implemented full-stack solution with Next.js frontend and Laravel backend"
    ],
    overview:
      "Clinic Booking is a comprehensive clinic booking web application built for neighborhood family clinics. The system includes public-facing pages for patients to book appointments and a complete admin dashboard for clinic staff to manage operations.",
    challenge:
      "Healthcare booking systems need to balance patient-friendly interfaces with powerful admin tools while maintaining trust, professionalism, and HIPAA-aware design principles.",
    solution:
      "I developed a full-stack application with Next.js 15 frontend and Laravel 11 backend, featuring patient appointment booking, doctor schedule management, service catalog, and a professional admin dashboard with real-time updates.",
    impact: [
      "Created a production-ready healthcare management system",
      "Demonstrated full-stack development capabilities",
      "Built a trustworthy, professional healthcare UI/UX"
    ],
    featured: true
  }
];

// Combine all developer projects
const developerProjects: Project[] = [...companyProjects, ...personalProjects];

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
    { label: "Demo", href: "/demo" },
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
      role: "Full Stack Software Engineer",
      tagline:
        "Currently working on Financio at ABSS, I support a live business product through bug fixing, feature enhancements, data patching, and day-to-day engineering work across existing systems.",
      availability: "Currently working at Asian Business Software Solutions (ABSS)",
      shortBio:
        "Backend-Leaning Full Stack Software Engineer with experience building, maintaining, and improving production web and mobile applications. Strongest in backend-heavy product work across Laravel, PHP, MySQL, REST APIs, Angular, Flutter, and live system support.",
      longBio: [
        "I am a Full Stack Web Software Engineer with hands-on experience building, enhancing, and maintaining production software across web and mobile products. At Asian Business Software Solutions, I work on Financio, where I handle bug fixing, feature enhancements, and data patching in a live product environment.",
        "Before ABSS, I worked at Theta Edge Berhad across Laravel web systems, REST APIs, MySQL-backed applications, iOS app maintenance in Swift, Flutter feature development, and Android payment terminal integration. I also gained early backend and release-support experience during my internship at TrackerHero.",
        "My strongest work is in debugging existing systems, improving reliability, refining backend behavior, and shipping changes that fit real product constraints.",
        "Core focus: Full stack development, backend-heavy product work, production bug fixing, feature enhancement, system maintenance, and cross-platform product support."
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
        { value: "3+", label: "Years Experience" },
        { value: "6+", label: "Production Systems" },
        { value: "40+", label: "Issues Resolved" },
        { value: "10+", label: "Features Delivered" }
      ],
      trustedBy: ["Asian Business Software Solutions", "Financio", "Theta Edge Berhad", "PigrimPro", "SakuPay", "POSLite", "TrackerHero"],
      skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Angular", "TypeScript", "JavaScript", "Flutter", "Swift", "Bug Fixing", "Testing", "Production Support"],
      tools: ["Laravel", "PHP", "Angular", "TypeScript", "JavaScript", "MySQL", "MariaDB", "MongoDB", "Swift", "Flutter", "Ionic", "Vue.js", "Git"],
      services: [
        {
          title: "Bug Fixing and Production Support",
          description: "Investigate issues in live systems, identify root causes, and deliver safe fixes that keep products stable in production.",
          deliverables: ["Issue investigation", "Root cause analysis", "Targeted fixes", "Regression-aware updates"]
        },
        {
          title: "Feature Enhancements",
          description: "Improve existing product flows with practical enhancements that fit current business logic, workflows, and user needs.",
          deliverables: ["Enhancement delivery", "Workflow improvements", "UI updates", "Existing system integration"]
        },
        {
          title: "Web App Maintenance",
          description: "Support and extend Laravel-based web systems with a focus on maintainability, database efficiency, and API-driven functionality.",
          deliverables: ["Laravel development", "MySQL improvements", "REST API support", "System optimization"]
        },
        {
          title: "Mobile App Support",
          description: "Maintain and improve existing mobile products across Flutter and iOS codebases, including compatibility and performance work.",
          deliverables: ["Flutter maintenance", "iOS updates", "Performance fixes", "UI responsiveness"]
        },
        {
          title: "Payment and Terminal Integration",
          description: "Contribute to payment-related product work across mobile apps, terminal flows, SDK integrations, and API communication.",
          deliverables: ["Payment flow support", "Android terminal work", "SDK integration", "API troubleshooting"]
        },
        {
          title: "Testing and Release Support",
          description: "Help validate software quality through debugging, scenario testing, issue identification, and pre-release support.",
          deliverables: ["Functional testing", "Issue validation", "Release readiness", "Cross-team support"]
        }
      ],
      testimonials: [
        {
          name: "Senior Developer",
          role: "Team Lead",
          company: "ABSS",
          quote: "Amirul consistently delivers reliable solutions and shows strong problem-solving skills when working on production systems. His attention to detail in bug fixing and feature enhancement has been valuable to the team."
        },
        {
          name: "Manager",
          role: "Engineering Manager",
          company: "Theta Edge Berhad",
          quote: "Working with Amirul on PigrimPro was a great experience. He demonstrated solid backend development skills and was always willing to collaborate with the team to solve complex technical challenges."
        },
        {
          name: "Team Colleague",
          role: "Full Stack Developer",
          company: "Theta Edge Berhad",
          quote: "Amirul is a dependable team member who brings practical solutions to the table. His work on the payment terminal integration showed his ability to handle complex systems and deliver quality results."
        }
      ],
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
      resumeFile: "/resume/amirul-resume-ats.pdf"
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
        { label: "Focus Areas", href: "/services" },
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

export function getCompanyProjects() {
  return companyProjects;
}

export function getPersonalProjects() {
  return personalProjects;
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
