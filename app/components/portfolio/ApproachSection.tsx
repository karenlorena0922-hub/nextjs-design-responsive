import type { PortfolioContent } from "../../content";
import { SectionIndex } from "./SectionIndex";

export function ApproachSection({ content }: { content: PortfolioContent["approach"] }) {
  return <section className="approach-section" id="approach" aria-labelledby="approach-title"><div className="page-shell"><div className="approach-topline"><SectionIndex label={content.index} /><span>{content.secondaryLabel}</span></div><div className="approach-header"><h2 id="approach-title">{content.title.before}<br /><em>{content.title.emphasis}</em></h2><p>{content.description}</p></div><div className="approach-list">{content.items.map((item) => <div className="approach-item" key={item.number}><span className="approach-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="approach-cross" aria-hidden="true">+</span></div>)}</div></div></section>;
}
