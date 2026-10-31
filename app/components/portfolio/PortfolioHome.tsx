import type { PortfolioContent } from "../../content";
import { AboutSection } from "./AboutSection";
import { ApproachSection } from "./ApproachSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { IntroSection } from "./IntroSection";
import { ProgressBar } from "./ProgressBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WorkSection } from "./WorkSection";

export function PortfolioHome({ content }: { content: PortfolioContent }) {
  return <><ProgressBar /><SiteHeader navigation={content.navigation} /><main id="top"><HeroSection content={content.hero} /><IntroSection content={content.work} /><WorkSection content={{ work: content.work, caseStudies: content.caseStudies }} /><ApproachSection content={content.approach} /><AboutSection content={content.about} /><ContactSection content={content.contact} /></main><SiteFooter content={{ navigation: content.navigation, footer: content.footer }} /></>;
}
