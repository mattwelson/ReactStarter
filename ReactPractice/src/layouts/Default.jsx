/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');
var Navbar = require('../components/Navbar.jsx');
var Footer = require('../components/Footer.jsx');

var DefaultLayout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <this.props.activeRouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = DefaultLayout;
