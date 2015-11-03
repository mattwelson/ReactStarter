/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Movie = React.createClass({
    render() {
        return (
        <h1>
            { this.props.params.id }
        </h1>
    );
    }
});

module.exports = Movie;
