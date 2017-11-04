import React, { Component } from 'react';
import Button from 'components/Button/button';
import WelcomeHeader from 'components/WelcomeHeader/welcome-header'
import './style.css';
import github from 'assets/images/github.png';

class WelcomePage extends Component {

  onEntryClick() {
    alert('Service is not ready!');
  }

  render() {
    return (
      <div className="container welcome-page">
        <WelcomeHeader />
        <div className="welcome-page-jumbotron">
          <h1 className="welcome-page-title">Welcome to Zen Time!</h1>
          <p className="welcome-page-subtitle">The service for accounting of your time.</p>
          <Button title="Start"
                  href="#"
                  className="btn-entry"
                  onClick={() => this.onEntryClick()}
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
}

export default WelcomePage;
