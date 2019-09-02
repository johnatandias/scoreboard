import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './theme.css';
import App from './App';
import { ThemeService, Themes } from 'services/theme';
import * as serviceWorker from 'serviceWorker';

ThemeService.apply(Themes.LIGHT);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
