import React from 'react';
import { appLogo } from '../../Assets';

const Header = () => {
  return (
    <header className="news-app-header">
      <div className="news-app-header-logo">
        <img src={appLogo} alt="news app logo"></img>
      </div>
      <h1 className="news-app-header-app-name">ProNews Daily</h1>
    </header>
  );
};

export default Header;
