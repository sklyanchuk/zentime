import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome-page/welcome-page';
import normalize from 'normalize.css';

class App extends Component {
  render() {
    return (
      <WelcomePage />
    )
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);