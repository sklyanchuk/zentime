import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome-page/welcome-page';

class App extends Component {
  render() {
    return (
      <WelcomePage />
    )
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);