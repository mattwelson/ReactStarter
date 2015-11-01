/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var Register = React.createClass({
    render() {
        return (
          <div className="container">
              <h2>Register</h2>
            <div className="row">
            </div>
              <form>
                  <div className="row">
                    <input type="email" name="email" defaultValue="email@example.com" />
                  </div>
                  <div className="row">
                    <input type="password" name="password" defaultValue="password" />
                  </div>
                  <div className="row">
                      <input type="submit" value="Login" className="button button-primary" />
                  </div>
                  <div className="row">
                      <Link to="" />
                  </div>
              </form>
          </div>
      );
    }
});

module.exports = Register;