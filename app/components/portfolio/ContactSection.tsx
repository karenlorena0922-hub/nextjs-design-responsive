import type { PortfolioContent } from "../../content";
import { ArrowIcon } from "./ArrowIcon";
import { SectionIndex } from "./SectionIndex";

export function ContactSection({ content }: { content: PortfolioContent["contact"] }) {
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-lines" aria-hidden="true" /><div className="page-shell contact-content"><SectionIndex label={content.index} /><h2 id="contact-title">{content.title.before}<br /><em>{content.title.emphasis}</em></h2><div className="contact-bottom"><p>{content.description}</p><a className="contact-action" href={"mailto:" + content.email + "?subject=" + encodeURIComponent(content.subject)}><span><small>{content.label}</small>{content.email}</span><ArrowIcon diagonal /></a></div></div></section>;
}
