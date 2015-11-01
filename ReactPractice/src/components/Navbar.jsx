/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var Navbar = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link className="" to="home">
            <h1>Fly More</h1>
          </Link>
        </div>
      </header>
    );
  }
});

module.exports = Navbar;
