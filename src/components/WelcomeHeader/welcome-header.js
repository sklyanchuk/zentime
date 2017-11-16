import React from 'react';
import './style.css';
import logo from 'assets/images/logo-2.png';

export function WelcomeHeader() {
  return (
    <div className="welcome-header container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Zen Time Logo" width="80" height="80"/>
        </a>
      </div>
      <nav className="welcome-menu">
          <a href="#" className="welcome-link">About</a>
          <a href="#" className="welcome-link">Features</a>
          <a href="#" className="welcome-link welcome-login">Log in</a>
          <a href="#" className="welcome-link welcome-sign-up">Sign up</a>
      </nav>
    </div>
  );
}
