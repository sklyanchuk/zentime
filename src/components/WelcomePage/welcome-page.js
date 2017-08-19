import React, { Component } from 'react';
import Button from '../Button/button';
import WelcomeHeader from '../WelcomeHeader/welcome-header'
import './style.css';

class WelcomePage extends Component {

  onEntryClick() {
    alert('Service is not ready!');
  }

  render() {
    return (
      <div>
        <WelcomeHeader />
        <div className="welcome-page-title">
          <p>Welcome to Zen Time!</p>
          <Button title="GitHub"
                  href="https://github.com/sklyanchuk/zentime"
                  target="_blank"
                  className="btn-about"
          />
          <Button title="Entry"
                  href="#"
                  className="btn-entry"
                  onClick={() => this.onEntryClick()}
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
