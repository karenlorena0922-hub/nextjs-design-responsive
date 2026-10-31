import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';

import {
  AboutSection,
  ApproachSection,
  ArrowIcon,
  ContactSection,
  HeroGraphic,
  PortfolioHome,
  SiteFooter,
} from '../app/page';
import { portfolioContent } from '../app/content';

const meta = {
  title: 'Portfolio',
  component: PortfolioHome,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPortfolio: Story = {
  args: {
    content: portfolioContent,
  },
};

export const CustomContent: Story = {
  args: {
    content: {
      ...portfolioContent,
      hero: {
        ...portfolioContent.hero,
        eyebrow: 'CONTENT FROM PROPS',
        description: 'This story proves the portfolio renders supplied copy and image data.',
      },
      caseStudies: portfolioContent.caseStudies.slice(0, 1),
    },
  },
};

export const InteractiveStates: Story = {
  args: {
    content: portfolioContent,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: 'Open navigation' });
    await userEvent.click(menuButton);
    await expect(canvas.getByRole('button', { name: 'Close navigation' })).toBeInTheDocument();

    const expandButton = canvas.getByRole('button', { name: 'Explore the UX decisions' });
    await userEvent.click(expandButton);
    await expect(canvas.getByRole('button', { name: 'Close the UX decisions' })).toBeInTheDocument();
  },
};

export const ArrowIcons: Story = {
  args: { content: portfolioContent },
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 40, color: '#112025' }}>
      <ArrowIcon />
      <ArrowIcon diagonal />
    </div>
  ),
};

export const HeroGraphicOnly: Story = {
  args: { content: portfolioContent },
  render: () => (
    <div style={{ minHeight: 700, background: '#10242a', color: '#dce987' }}>
      <HeroGraphic />
    </div>
  ),
};

const approachMeta = {
  title: 'Portfolio/ApproachSection',
  component: ApproachSection,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ApproachSection>;

export const ApproachSectionStory: StoryObj<typeof approachMeta> = {
  args: { content: portfolioContent.approach },
};

const aboutMeta = {
  title: 'Portfolio/AboutSection',
  component: AboutSection,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AboutSection>;

export const AboutSectionStory: StoryObj<typeof aboutMeta> = {
  args: { content: portfolioContent.about },
};

const contactMeta = {
  title: 'Portfolio/ContactSection',
  component: ContactSection,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ContactSection>;

export const ContactSectionStory: StoryObj<typeof contactMeta> = {
  args: { content: portfolioContent.contact },
};

const footerMeta = {
  title: 'Portfolio/SiteFooter',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SiteFooter>;

export const SiteFooterStory: StoryObj<typeof footerMeta> = {
  args: { content: { navigation: portfolioContent.navigation, footer: portfolioContent.footer } },
};
