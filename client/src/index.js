import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbars/Navbar';
import reportWebVitals from './reportWebVitals';
import './components/customScss/index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Views
import Home from './views/Home.js';
import Anime from './views/Anime.js';
import Document from './views/Document.js';
import Test from './views/Test.js';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/document" component={Document} />
          <Route path="/anime" component={Anime} />
          <Route path="/test" component={Test} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Route>
            <h1>Not match</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
