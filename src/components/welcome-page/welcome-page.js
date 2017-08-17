import React, { Component } from 'react';
import './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page-title">
        <p>Welcome to Zen Time!</p>
        <a href="https://github.com/sklyanchuk/zentime"
           className="btn btn-about">About</a>
      </div>
    )
  }
}

export default WelcomePage;