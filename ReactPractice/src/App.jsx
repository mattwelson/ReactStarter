/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Router, Route, IndexRoute } = require('react-router');
var ReactDom = require('react-dom');
var App = require('./layouts/Default.jsx');
var Home = require('./pages/Home.jsx');
var Movie = require('./pages/Movie.jsx');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

ReactDom.render(
  <Router>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
      <Route path="movie" component={Home}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('reacthook')
);
