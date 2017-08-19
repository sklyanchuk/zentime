import React, { Component } from 'react';
import Button from '../button/button.js'
import './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page-title">
        <p>Welcome to Zen Time!</p>
        <Button title="GitHub"
                href="https://github.com/sklyanchuk/zentime"
                className="btn btn-about"/>
        <Button title="Entry"
                href="#"
                className="btn btn-entry"/>
      </div>
    )
  }
}

export default WelcomePage;
