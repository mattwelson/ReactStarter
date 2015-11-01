/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var HomePage = React.createClass({
    render() {
        return (
          <div className="container">
              <Link to="movie/123">Link!</Link>
              { this.props.children || ""}
          </div>
        );
    }
});

module.exports = HomePage;
