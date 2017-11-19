import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'assets/styles/global.css';
import {WelcomePage} from './components/WelcomePage/welcome-page';

export const App: React.SFC = () => (
  <WelcomePage />
);

const rootElement = document.querySelector('#zentime-app');
ReactDOM.render(<App />, rootElement);
