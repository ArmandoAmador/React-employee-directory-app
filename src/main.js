"use strict";

var React = require('react');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="hello">Hello World</h1>
      </div>
    );
  }
});

React.render(<Hello />, document.getElementById('app'));
