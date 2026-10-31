import type { PortfolioContent } from "../../content";
import { CaseStudyCard } from "./CaseStudyCard";

export function WorkSection({ content }: { content: Pick<PortfolioContent, "work" | "caseStudies"> }) {
  return <section className="work-section" aria-label={content.work.caseStudyLabel}><div className="page-shell">{content.caseStudies.map((study) => <CaseStudyCard key={study.number} study={study} labels={content.work} />)}</div></section>;
}
