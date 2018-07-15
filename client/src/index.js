import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();