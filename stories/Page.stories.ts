import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    defaultUserName: 'Jane Doe',
    header: {
      logo: '◆',
      brandName: 'Acme',
      welcomePrefix: 'Welcome,',
      loginLabel: 'Log in',
      logoutLabel: 'Log out',
      signUpLabel: 'Sign up',
    },
    content: {
      heading: 'Pages in Storybook',
      intro: 'We recommend building UIs with a component-driven process.',
      body: 'Render pages with mock data so states can be reviewed without navigating through the app.',
      tips: ['Compose data from child component story args.', 'Mock services inside Storybook.'],
      tipLabel: 'Tip',
      tipText: 'Adjust the canvas width with the Viewports addon in the toolbar.',
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
