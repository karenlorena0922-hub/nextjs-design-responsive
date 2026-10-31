import { Button } from './Button';
import './header.css';
import type { ReactNode } from 'react';

type User = {
  name: string;
};

export interface HeaderProps {
  logo: ReactNode;
  brandName: string;
  welcomePrefix: string;
  loginLabel: string;
  logoutLabel: string;
  signUpLabel: string;
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ logo, brandName, welcomePrefix, loginLabel, logoutLabel, signUpLabel, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        {logo}
        <h1>{brandName}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              {welcomePrefix} <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label={logoutLabel} />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label={loginLabel} />
            <Button primary size="small" onClick={onCreateAccount} label={signUpLabel} />
          </>
        )}
      </div>
    </div>
  </header>
);
