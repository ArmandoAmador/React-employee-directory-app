"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="app" className="navbar-link">Home</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
