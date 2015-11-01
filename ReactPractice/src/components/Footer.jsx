/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var Footer = React.createClass({
    render() {
        return (
          <footer className="footer">
            <div className="container">
              <a href="https://twitter.com/MattWelson">@MattWelson</a>
            </div>
          </footer>
      );
    }
});

module.exports = Footer;
