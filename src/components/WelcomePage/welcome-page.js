import React from 'react';
import {Button} from '../Button/button';
import {WelcomeHeader} from '../WelcomeHeader/welcome-header'
import './style.css';
import github from 'assets/images/github.png';

export function WelcomePage() {

  const onEntryClick = () =>
    alert('Service is not ready!');

  return (
    <div className="container welcome-page">
      <WelcomeHeader />
      <div className="welcome-page-jumbotron">
        <h1 className="welcome-page-title">Welcome to Zen Time!</h1>
        <p className="welcome-page-subtitle">The service for accounting of your time.</p>
        <Button title="Start"
                href="#"
                className="btn-entry"
                onClick={onEntryClick}
        />
      </div>
      <a href="https://github.com/sklyanchuk/zentime"
         target="_blank"
         className="github-link">
        <img src={github}
             alt="Our project on GitHub"
             width="50" height="50"/>
      </a>
    </div>
  );
}
