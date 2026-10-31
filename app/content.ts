export type CaseStudy = {
  number: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  context: string;
  decision: string;
  response: string;
  test: string;
};

export type ApproachItem = {
  number: string;
  title: string;
  description: string;
};

export type PortfolioContent = {
  navigation: {
    brandMark: string;
    brandMarkDot: string;
    brandName: string;
    links: { label: string; href: string }[];
    contactLabel: string;
    contactHref: string;
    backToTopLabel: string;
  };
  hero: {
    eyebrow: string;
    title: { before: string; emphasis: string; after: string; period: string };
    description: string;
    exploreLabel: string;
    exploreHref: string;
    footerPrimary: string;
    footerSecondary: string;
  };
  work: {
    index: string;
    title: { before: string; emphasis: string };
    description: string;
    countLabel: string;
    caseStudyLabel: string;
    explorationLabel: string;
    details: {
      overline: string;
      title: { before: string; after: string };
      fields: { context: string; decision: string; response: string; test: string };
    };
    expandLabel: string;
    closeLabel: string;
  };
  approach: {
    index: string;
    secondaryLabel: string;
    title: { before: string; emphasis: string };
    description: string;
    items: ApproachItem[];
  };
  about: {
    index: string;
    title: { before: string; after: string; period: string };
    lead: string;
    description: string;
    traits: string[];
    symbol: string;
  };
  contact: {
    index: string;
    title: { before: string; emphasis: string };
    description: string;
    label: string;
    email: string;
    subject: string;
  };
  footer: { copyright: string; descriptor: string };
  caseStudies: CaseStudy[];
};

export const portfolioContent: PortfolioContent = {
  navigation: {
    brandMark: "KC",
    brandMarkDot: ".",
    brandName: "KAREN\nCALDERON",
    links: [
      { label: "Work", href: "#work" },
      { label: "Approach", href: "#approach" },
      { label: "About", href: "#about" },
    ],
    contactLabel: "Let's talk",
    contactHref: "#contact",
    backToTopLabel: "BACK TO TOP ↑",
  },
  hero: {
    eyebrow: "PRODUCT DESIGNER / PORTFOLIO 2026",
    title: { before: "Designing", emphasis: "clarity", after: "for\ncomplex worlds", period: "." },
    description: "I'm Karen Calderon. I bring structure, warmth, and a human point of view to ambitious digital products.",
    exploreLabel: "EXPLORE WORK",
    exploreHref: "#work",
    footerPrimary: "UX / UI · PRODUCT THINKING · SYSTEMS",
    footerSecondary: "SCROLL TO EXPLORE ↓",
  },
  work: {
    index: "01 / SELECTED WORK",
    title: { before: "Ideas made", emphasis: "understandable." },
    description: "Three concept studies about turning complex needs into considered experiences. Each one starts with a UX decision, then gives that decision a visual form.",
    countLabel: "( 03 PROJECTS )",
    caseStudyLabel: "CASE STUDY",
    explorationLabel: "CONCEPT EXPLORATION — 2026",
    details: {
      overline: "BEHIND THE INTERFACE",
      title: { before: "The thinking", after: "behind the pixels." },
      fields: {
        context: "01 / CONTEXT",
        decision: "02 / CORE UX DECISION",
        response: "03 / UI RESPONSE",
        test: "04 / WHAT I'D TEST",
      },
    },
    expandLabel: "Explore the UX decisions",
    closeLabel: "Close the UX decisions",
  },
  approach: {
    index: "02 / HOW I THINK",
    secondaryLabel: "AN APPROACH TO THE WORK",
    title: { before: "Good design makes", emphasis: "room to think." },
    description: "Clarity is built one decision at a time. These are the principles I bring to every problem, from the first question to the final interaction.",
    items: [
      { number: "01", title: "Find the real question.", description: "I start by mapping the people, constraints, and decisions behind a request. The best interface begins with a precise problem." },
      { number: "02", title: "Make the path visible.", description: "I shape information around what someone needs to understand now, what they can do next, and what can wait." },
      { number: "03", title: "Refine until it feels natural.", description: "I use prototypes, feedback, and careful visual craft to make complex systems feel coherent and humane." },
    ],
  },
  about: {
    index: "03 / ABOUT",
    title: { before: "The person\nbehind the process", after: "", period: "." },
    lead: "I'm Karen, a product designer drawn to the moment when a complicated problem becomes a clear path forward.",
    description: "I care about the small moments that make a product feel intuitive: a label that answers the right question, a layout that restores orientation, and feedback that builds trust. My work connects research, interaction, and visual systems into experiences people can use with confidence.",
    traits: ["CURIOUS BY DEFAULT", "PRECISE BY DESIGN", "HUMAN AT HEART"],
    symbol: "KC",
  },
  contact: {
    index: "04 / GET IN TOUCH",
    title: { before: "Let's make", emphasis: "something clearer." },
    description: "Have a complex challenge or an idea worth shaping? I'd love to hear about it.",
    label: "EMAIL KAREN",
    email: "karen.0922@gmail.com",
    subject: "Let's make something clearer",
  },
  footer: { copyright: "© 2026 KAREN CALDERON", descriptor: "PRODUCT DESIGN / CONCEPT PORTFOLIO" },
  caseStudies: [
    { number: "01", name: "Aperture", category: "Operational intelligence", summary: "A calmer command center for teams making decisions with live, fragmented information.", image: "/assets/case-atlas.png", imageAlt: "Dark spatial operations map with a blue route and floating insight cards", tags: ["UX strategy", "Information architecture", "UI design"], context: "In this concept brief, an operations team must move between maps, alerts, and status feeds to understand what changed. The interface needs to support fast orientation without hiding detail.", decision: "Lead with a concise now / next view. Group signals by urgency and relationship, then let people drill into a place, event, or source only when they need the full picture.", response: "A spatial canvas anchors the experience. A contextual side rail carries the active decision, while restrained color is reserved for changes that actually require attention.", test: "Can someone identify the most important change and its next action within the first few seconds, even when several alerts arrive together?" },
    { number: "02", name: "Current", category: "Personal finance", summary: "Helping people understand what their money can do next, not just what it did yesterday.", image: "/assets/case-forma.png", imageAlt: "Ivory financial planning dashboard with a blue growth chart", tags: ["Product thinking", "Interaction design", "Visual systems"], context: "Balances alone can feel abstract. In this concept brief, people need to see how upcoming commitments affect the choices they can make today.", decision: "Organize the home view around upcoming commitments and room to act. Every forecast should be inspectable, with a plain explanation of the assumptions behind it.", response: "Use a quiet hierarchy, clear time frames, and accessible chart labels. The interface treats uncertainty as useful information instead of presenting a false sense of precision.", test: "After viewing a projection, can someone explain why it changed and confidently adjust an assumption without feeling penalized?" },
    { number: "03", name: "Openline", category: "Public services", summary: "A more legible path through eligibility, documents, and multi-step applications.", image: "/assets/case-civic.png", imageAlt: "Mobile public-service flow in front of a neighborhood service dashboard", tags: ["Service design", "Accessible UX", "Design systems"], context: "A public service application can ask for significant time and personal information. People deserve to know the requirements before they begin and where they are in the process.", decision: "Show eligibility and document needs up front. Break the task into meaningful steps, with a persistent summary and clear ways to recover from an interruption.", response: "Plain-language prompts, generous target sizes, and unmistakable progress cues create an interface that works across devices and different levels of digital confidence.", test: "Can a first-time applicant predict the next step, pause safely, and return without repeating work or losing context?" },
  ],
};
