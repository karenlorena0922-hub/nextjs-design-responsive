"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CaseStudy = {
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

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    name: "Aperture",
    category: "Operational intelligence",
    summary: "A calmer command center for teams making decisions with live, fragmented information.",
    image: "/assets/case-atlas.png",
    imageAlt: "Dark spatial operations map with a blue route and floating insight cards",
    tags: ["UX strategy", "Information architecture", "UI design"],
    context: "In this concept brief, an operations team must move between maps, alerts, and status feeds to understand what changed. The interface needs to support fast orientation without hiding detail.",
    decision: "Lead with a concise now / next view. Group signals by urgency and relationship, then let people drill into a place, event, or source only when they need the full picture.",
    response: "A spatial canvas anchors the experience. A contextual side rail carries the active decision, while restrained color is reserved for changes that actually require attention.",
    test: "Can someone identify the most important change and its next action within the first few seconds, even when several alerts arrive together?",
  },
  {
    number: "02",
    name: "Current",
    category: "Personal finance",
    summary: "Helping people understand what their money can do next, not just what it did yesterday.",
    image: "/assets/case-forma.png",
    imageAlt: "Ivory financial planning dashboard with a blue growth chart",
    tags: ["Product thinking", "Interaction design", "Visual systems"],
    context: "Balances alone can feel abstract. In this concept brief, people need to see how upcoming commitments affect the choices they can make today.",
    decision: "Organize the home view around upcoming commitments and room to act. Every forecast should be inspectable, with a plain explanation of the assumptions behind it.",
    response: "Use a quiet hierarchy, clear time frames, and accessible chart labels. The interface treats uncertainty as useful information instead of presenting a false sense of precision.",
    test: "After viewing a projection, can someone explain why it changed and confidently adjust an assumption without feeling penalized?",
  },
  {
    number: "03",
    name: "Openline",
    category: "Public services",
    summary: "A more legible path through eligibility, documents, and multi-step applications.",
    image: "/assets/case-civic.png",
    imageAlt: "Mobile public-service flow in front of a neighborhood service dashboard",
    tags: ["Service design", "Accessible UX", "Design systems"],
    context: "A public service application can ask for significant time and personal information. People deserve to know the requirements before they begin and where they are in the process.",
    decision: "Show eligibility and document needs up front. Break the task into meaningful steps, with a persistent summary and clear ways to recover from an interruption.",
    response: "Plain-language prompts, generous target sizes, and unmistakable progress cues create an interface that works across devices and different levels of digital confidence.",
    test: "Can a first-time applicant predict the next step, pause safely, and return without repeating work or losing context?",
  },
];

const approach = [
  {
    number: "01",
    title: "Find the real question.",
    description: "I start by mapping the people, constraints, and decisions behind a request. The best interface begins with a precise problem.",
  },
  {
    number: "02",
    title: "Make the path visible.",
    description: "I shape information around what someone needs to understand now, what they can do next, and what can wait.",
  },
  {
    number: "03",
    title: "Refine until it feels natural.",
    description: "I use prototypes, feedback, and careful visual craft to make complex systems feel coherent and humane.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h17m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="graphic-coordinate graphic-coordinate-top">40° 43&apos; 55.3&quot; N</div>
      <div className="graphic-coordinate graphic-coordinate-bottom">SYSTEM / HUMAN / SIGNAL</div>
      <svg viewBox="0 0 700 700" fill="none" className="hero-graphic-svg">
        <circle cx="350" cy="350" r="306" stroke="currentColor" strokeOpacity=".18" />
        <circle cx="350" cy="350" r="246" stroke="currentColor" strokeOpacity=".22" />
        <circle cx="350" cy="350" r="174" stroke="currentColor" strokeOpacity=".28" />
        <circle cx="350" cy="350" r="92" stroke="currentColor" strokeOpacity=".36" />
        <circle cx="350" cy="350" r="334" stroke="currentColor" strokeOpacity=".12" strokeDasharray="2 10" />
        <path d="M0 350h700M350 0v700" stroke="currentColor" strokeOpacity=".14" />
        <path d="M114 114 586 586M586 114 114 586" stroke="currentColor" strokeOpacity=".09" />
        <g className="graphic-orbit">
          <path d="M350 44a306 306 0 0 1 306 306" stroke="currentColor" strokeOpacity=".68" strokeWidth="1.5" />
          <path d="M104 350a246 246 0 0 1 246-246" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.5" />
          <circle cx="350" cy="44" r="5" fill="currentColor" />
          <circle cx="104" cy="350" r="4" fill="currentColor" />
        </g>
        <path d="m350 220 55 76 93 17-67 65 11 96-92-45-92 45 11-96-67-65 93-17 55-76Z" stroke="currentColor" strokeOpacity=".74" strokeWidth="1.3" />
        <path d="M350 264v172M264 350h172" stroke="currentColor" strokeOpacity=".48" strokeWidth="1.3" />
        <circle cx="350" cy="350" r="25" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".7" />
        <circle cx="350" cy="350" r="3" fill="currentColor" />
        <path d="M635 350h43M22 350h43M350 22v43M350 635v43" stroke="currentColor" strokeOpacity=".55" />
      </svg>
      <div className="graphic-marker graphic-marker-one"><span /> 01 / SENSE</div>
      <div className="graphic-marker graphic-marker-two"><span /> 02 / SHAPE</div>
    </div>
  );
}

export default function Home() {
  const [openCase, setOpenCase] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contactEmail = "karen.0922@gmail.com";

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const closeOnResize = () => {
      if (!mobileQuery.matches) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    mobileQuery.addEventListener("change", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      mobileQuery.removeEventListener("change", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: scrollProgress + "%" }} />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Karen Calderon, back to top" onClick={closeMenu}>
          <span className="brand-mark">KC<span className="brand-mark-dot">.</span></span>
          <span className="brand-name">KAREN<br />CALDERON</span>
        </a>
        <nav id="mobile-navigation" className={"site-nav" + (menuOpen ? " site-nav-open" : "")} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowIcon diagonal /></a>
        </nav>
        <button
          className={"menu-toggle" + (menuOpen ? " menu-toggle-open" : "")}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section
          className="hero"
          aria-labelledby="hero-title"
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--pointer-x", event.clientX - bounds.left + "px");
            event.currentTarget.style.setProperty("--pointer-y", event.clientY - bounds.top + "px");
          }}
        >
          <div className="hero-grid" />
          <HeroGraphic />
          <div className="hero-content page-shell">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> PRODUCT DESIGNER / PORTFOLIO 2026</div>
            <h1 id="hero-title">Designing<br /><em>clarity</em> for<br />complex worlds<span className="hero-period">.</span></h1>
            <div className="hero-bottom">
              <p>I&apos;m Karen Calderon. I bring structure, warmth, and a human point of view to ambitious digital products.</p>
              <a className="circle-link" href="#work" aria-label="Explore selected work">
                <ArrowIcon diagonal />
                <span>EXPLORE WORK</span>
              </a>
            </div>
          </div>
          <div className="hero-footer page-shell">
            <span>UX / UI &nbsp;·&nbsp; PRODUCT THINKING &nbsp;·&nbsp; SYSTEMS</span>
            <span>SCROLL TO EXPLORE &nbsp; ↓</span>
          </div>
        </section>

        <section className="intro-section" id="work" aria-labelledby="work-title">
          <div className="page-shell intro-grid">
            <div className="section-index"><span className="index-dot" /> 01 / SELECTED WORK</div>
            <div>
              <h2 id="work-title">Ideas made<br /><span>understandable.</span></h2>
              <div className="intro-foot">
                <p>Three concept studies about turning complex needs into considered experiences. Each one starts with a UX decision, then gives that decision a visual form.</p>
                <span className="intro-count">( 03 PROJECTS )</span>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section" aria-label="Case studies">
          <div className="page-shell">
            {caseStudies.map((study, index) => (
              <article className="case-study" key={study.name} id={"case-" + study.number}>
                <div className="case-topline">
                  <span>CASE STUDY / {study.number}</span>
                  <span>CONCEPT EXPLORATION — 2026</span>
                </div>
                <div className="case-stage">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 88vw"
                    className="case-image"
                  />
                  <div className="case-stage-shade" />
                  <div className="case-stage-label"><span className="stage-label-line" />{study.category}</div>
                  <span className="case-stage-number">{study.number}</span>
                </div>
                <div className="case-main">
                  <div className="case-title-wrap">
                    <span className="case-category">{study.category}</span>
                    <h3>{study.name}<span className="case-title-star">✳</span></h3>
                  </div>
                  <div className="case-overview">
                    <p>{study.summary}</p>
                    <div className="case-tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
                <button
                  className="case-expand"
                  type="button"
                  aria-expanded={openCase === index}
                  aria-controls={"case-detail-" + index}
                  onClick={() => setOpenCase(openCase === index ? null : index)}
                >
                  <span>{openCase === index ? "Close the UX decisions" : "Explore the UX decisions"}</span>
                  <span className="case-expand-icon" aria-hidden="true">{openCase === index ? "−" : "+"}</span>
                </button>
                <div className="case-details" id={"case-detail-" + index} hidden={openCase !== index}>
                    <div className="case-detail-heading">
                      <span className="detail-overline">BEHIND THE INTERFACE / {study.number}</span>
                      <h4>The thinking<br />behind the pixels.</h4>
                    </div>
                    <div className="decision-grid">
                      <div className="decision-item"><span>01 / CONTEXT</span><p>{study.context}</p></div>
                      <div className="decision-item"><span>02 / CORE UX DECISION</span><p>{study.decision}</p></div>
                      <div className="decision-item"><span>03 / UI RESPONSE</span><p>{study.response}</p></div>
                      <div className="decision-item"><span>04 / WHAT I&apos;D TEST</span><p>{study.test}</p></div>
                    </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="page-shell">
            <div className="approach-topline">
              <span className="section-index"><span className="index-dot" /> 02 / HOW I THINK</span>
              <span>AN APPROACH TO THE WORK</span>
            </div>
            <div className="approach-header">
              <h2 id="approach-title">Good design makes<br /><em>room to think.</em></h2>
              <p>Clarity is built one decision at a time. These are the principles I bring to every problem, from the first question to the final interaction.</p>
            </div>
            <div className="approach-list">
              {approach.map((item) => (
                <div className="approach-item" key={item.number}>
                  <span className="approach-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="approach-cross" aria-hidden="true">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="page-shell about-grid">
            <div className="about-aside">
              <span className="section-index"><span className="index-dot" /> 03 / ABOUT</span>
              <div className="about-symbol" aria-hidden="true"><span>KC</span><i /><i /><i /></div>
            </div>
            <div className="about-content">
              <h2 id="about-title">The person<br />behind the process<span>.</span></h2>
              <p className="about-lead">I&apos;m Karen, a product designer drawn to the moment when a complicated problem becomes a clear path forward.</p>
              <p>I care about the small moments that make a product feel intuitive: a label that answers the right question, a layout that restores orientation, and feedback that builds trust. My work connects research, interaction, and visual systems into experiences people can use with confidence.</p>
              <div className="about-traits"><span>CURIOUS BY DEFAULT</span><span>PRECISE BY DESIGN</span><span>HUMAN AT HEART</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-lines" aria-hidden="true" />
          <div className="page-shell contact-content">
            <div className="section-index"><span className="index-dot" /> 04 / GET IN TOUCH</div>
            <h2 id="contact-title">Let&apos;s make<br />something <em>clearer.</em></h2>
            <div className="contact-bottom">
              <p>Have a complex challenge or an idea worth shaping? I&apos;d love to hear about it.</p>
              <a className="contact-action" href={"mailto:" + contactEmail + "?subject=Let's%20make%20something%20clearer"}>
                <span><small>EMAIL KAREN</small>{contactEmail}</span> <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <span>© 2026 KAREN CALDERON</span>
          <span>PRODUCT DESIGN / CONCEPT PORTFOLIO</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
