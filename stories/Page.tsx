import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export interface PageContent {
  heading: string;
  intro: React.ReactNode;
  body: React.ReactNode;
  tips: string[];
  tipLabel: string;
  tipText: React.ReactNode;
}

export interface PageProps {
  content: PageContent;
  header: React.ComponentProps<typeof Header>;
  defaultUserName: string;
}

export const Page: React.FC<PageProps> = ({ content, header, defaultUserName }) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        {...header}
        user={user}
        onLogin={() => setUser({ name: defaultUserName })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: defaultUserName })}
      />

      <section className="storybook-page">
        <h2>{content.heading}</h2>
        <p>{content.intro}</p>
        <p>{content.body}</p>
        <ul>{content.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
        <p>{content.tipText}</p>
        <div className="tip-wrapper">
          {content.tipLabel} {content.tipText}
        </div>
      </section>
    </article>
  );
};
