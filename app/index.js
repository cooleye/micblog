import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import App from './pages/App';
import './index.css';

import Home from './pages/Home/Home';
import Mine from './pages/Mine/Mine';
import Messa from './pages/Messa/Messa';
import Find from './pages/Find/Find';


var router = 
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home} />
      <Route path="/message" component={Messa} />
      <Route path="/find" component={Find} />
      <Route path="/mine" component={Mine} />
    </Route>
  </Router>


ReactDOM.render( router , document.getElementById('root'));
