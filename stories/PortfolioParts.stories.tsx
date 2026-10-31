import type { Meta } from '@storybook/nextjs-vite';

import {
  CaseStudyCard,
  CaseStudyDetails,
  HeroSection,
  IconLink,
  IntroSection,
  ProgressBar,
  SectionIndex,
  SiteHeader,
  WorkSection,
} from '../app/page';
import { portfolioContent } from '../app/content';

const meta = {
  title: 'Portfolio/Parts',
  component: SectionIndex,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionIndex>;

export default meta;

export const SectionIndexStory = { args: { label: portfolioContent.work.index } };

export const SiteHeaderStory = {
  render: () => <SiteHeader navigation={portfolioContent.navigation} />,
};

export const HeroSectionStory = {
  render: () => <HeroSection content={portfolioContent.hero} />,
};

export const IntroSectionStory = {
  render: () => <IntroSection content={portfolioContent.work} />,
};

export const WorkSectionStory = {
  render: () => <WorkSection content={{ work: portfolioContent.work, caseStudies: portfolioContent.caseStudies }} />,
};

export const CaseStudyCardStory = {
  render: () => <CaseStudyCard study={portfolioContent.caseStudies[0]} labels={portfolioContent.work} />,
};

export const CaseStudyDetailsStory = {
  render: () => <div className="case-details" style={{ display: 'block' }}><CaseStudyDetails study={portfolioContent.caseStudies[0]} labels={portfolioContent.work} /></div>,
};

export const IconLinkStory = {
  render: () => <div style={{ padding: 40, background: '#10242a', color: '#dce987' }}><IconLink href="#work" label={portfolioContent.hero.exploreLabel} /></div>,
};

export const ProgressBarStory = {
  render: () => <><ProgressBar /><div style={{ height: '180vh', padding: 40 }}>Scroll to preview progress.</div></>,
};
