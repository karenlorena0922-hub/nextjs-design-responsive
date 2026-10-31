"use client";

import type { PortfolioContent } from "../../content";
import { HeroGraphic } from "./HeroGraphic";
import { IconLink } from "./IconLink";

export function HeroSection({ content }: { content: PortfolioContent["hero"] }) {
  return <section className="hero" aria-labelledby="hero-title" onPointerMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--pointer-x", event.clientX - bounds.left + "px"); event.currentTarget.style.setProperty("--pointer-y", event.clientY - bounds.top + "px"); }}><div className="hero-grid" /><HeroGraphic /><div className="hero-content page-shell"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</div><h1 id="hero-title">{content.title.before}<br /><em>{content.title.emphasis}</em> {content.title.after.split("\n").map((line) => <span key={line}><br />{line}</span>)}<span className="hero-period">{content.title.period}</span></h1><div className="hero-bottom"><p>{content.description}</p><IconLink href={content.exploreHref} label={content.exploreLabel} /></div></div><div className="hero-footer page-shell"><span>{content.footerPrimary}</span><span>{content.footerSecondary}</span></div></section>;
}
