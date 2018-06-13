import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from '../src/app/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
