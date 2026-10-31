import type { PortfolioContent } from "../../content";
import { SectionIndex } from "./SectionIndex";

export function AboutSection({ content }: { content: PortfolioContent["about"] }) {
  return <section className="about-section" id="about" aria-labelledby="about-title"><div className="page-shell about-grid"><div className="about-aside"><SectionIndex label={content.index} /><div className="about-symbol" aria-hidden="true"><span>{content.symbol}</span><i /><i /><i /></div></div><div className="about-content"><h2 id="about-title">{content.title.before.split("\n").map((line) => <span key={line}>{line}<br /></span>)}{content.title.after}<span>{content.title.period}</span></h2><p className="about-lead">{content.lead}</p><p>{content.description}</p><div className="about-traits">{content.traits.map((trait) => <span key={trait}>{trait}</span>)}</div></div></div></section>;
}
