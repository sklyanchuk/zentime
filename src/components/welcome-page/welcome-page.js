import React, { Component } from 'react';
import css from './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page-title">
        <p>Welcome to Zen Time!</p>
        <a className="btn btn-about">About</a>
      </div>
    )
  }
}

export default WelcomePage;