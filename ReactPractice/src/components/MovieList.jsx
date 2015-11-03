/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');

var MovieList = React.createClass({
    render() {
        console.log(this.props.data);
        var movieItems = $.map(this.props.data, function(item){
            var movie = item.movie;
            return (
                <Link to={'movie/' + movie.ids.trakt }>
                    { movie.title }    
                </Link>
            );
        });
        return (
          <div>
              { movieItems }
          </div>
        );
    }
});

module.exports = MovieList;