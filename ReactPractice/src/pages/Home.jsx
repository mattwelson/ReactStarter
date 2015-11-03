/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Link} = require('react-router');
var MovieList = require('../components/MovieList.jsx');
var Secret = require('../secret/secret.js');

var url = 'https://api-v2launch.trakt.tv/movies/trending?extended=full,images';

var HomePage = React.createClass({
    getInitialState: function(){
        return {data:[]};
    },
    componentDidMount:function(){
        $.ajax({
            url: url,
            headers: {
                'trakt-api-version': '2',
                'trakt-api-key': Secret.TraktURL
            },
            dataType: 'json',
            success: function(data){
                console.log('success',data);
                this.setState({data:data});
            }.bind(this)
        });
    },
    render() {
        return (
          <div className="container">
              <MovieList data={this.state.data} />
          </div>
        );
    }
});

module.exports = HomePage;
