import type { PortfolioContent } from "../../content";
import { SectionIndex } from "./SectionIndex";

export function IntroSection({ content }: { content: PortfolioContent["work"] }) {
  return <section className="intro-section" id="work" aria-labelledby="work-title"><div className="page-shell intro-grid"><SectionIndex label={content.index} /><div><h2 id="work-title">{content.title.before}<br /><span>{content.title.emphasis}</span></h2><div className="intro-foot"><p>{content.description}</p><span className="intro-count">{content.countLabel}</span></div></div></div></section>;
}
