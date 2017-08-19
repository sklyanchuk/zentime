import React, { Component } from 'react';
import Button from '../Button/button.js'
import './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page-title">
        <p>Welcome to Zen Time!</p>
        <Button title="GitHub"
                href="https://github.com/sklyanchuk/zentime"
                className="btn-about" />
        <Button title="Entry"
                href="#"
                className="btn-entry" />
      </div>
    );
  }
}

export default WelcomePage;
