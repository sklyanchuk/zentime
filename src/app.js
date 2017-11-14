import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from 'components/WelcomePage/welcome-page';
import 'normalize.css';
import 'assets/styles/global.css';

class App extends Component {
  render() {
    return (
      <WelcomePage />
    );
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
