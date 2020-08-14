import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { WelcomePage } from './components/WelcomePage/welcome-page';

import 'normalize.css';
import 'assets/styles/global.css';

export const App: React.FC = () => <WelcomePage />;

const rootElement = document.querySelector('#zentime-app');
ReactDOM.render(<App />, rootElement);
