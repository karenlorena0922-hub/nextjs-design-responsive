"use client";

import { useState } from "react";
import Image from "next/image";
import type { CaseStudy, PortfolioContent } from "../../content";

export function CaseStudyCard({ study, labels }: { study: CaseStudy; labels: PortfolioContent["work"] }) {
  const [open, setOpen] = useState(false);
  return <article className="case-study" id={"case-" + study.number}><div className="case-topline"><span>{labels.caseStudyLabel} / {study.number}</span><span>{labels.explorationLabel}</span></div><div className="case-stage"><Image src={study.image} alt={study.imageAlt} fill sizes="(max-width: 700px) 100vw, 88vw" className="case-image" /><div className="case-stage-shade" /><div className="case-stage-label"><span className="stage-label-line" />{study.category}</div><span className="case-stage-number">{study.number}</span></div><div className="case-main"><div className="case-title-wrap"><span className="case-category">{study.category}</span><h3>{study.name}<span className="case-title-star">✳</span></h3></div><div className="case-overview"><p>{study.summary}</p><div className="case-tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div><button className="case-expand" type="button" aria-expanded={open} aria-controls={"case-detail-" + study.number} onClick={() => setOpen(!open)}><span>{open ? labels.closeLabel : labels.expandLabel}</span><span className="case-expand-icon" aria-hidden="true">{open ? "−" : "+"}</span></button><div className="case-details" id={"case-detail-" + study.number} hidden={!open}><CaseStudyDetails study={study} labels={labels} /></div></article>;
}

export function CaseStudyDetails({ study, labels }: { study: CaseStudy; labels: PortfolioContent["work"] }) {
  const fields = labels.details.fields;
  return <><div className="case-detail-heading"><span className="detail-overline">{labels.details.overline} / {study.number}</span><h4>{labels.details.title.before}<br />{labels.details.title.after}</h4></div><div className="decision-grid"><div className="decision-item"><span>{fields.context}</span><p>{study.context}</p></div><div className="decision-item"><span>{fields.decision}</span><p>{study.decision}</p></div><div className="decision-item"><span>{fields.response}</span><p>{study.response}</p></div><div className="decision-item"><span>{fields.test}</span><p>{study.test}</p></div></div></>;
}
