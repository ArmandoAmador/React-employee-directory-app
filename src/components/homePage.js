'use strict';

var React = require('react');

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>People</h1>
        <table className="u-full-width homepage-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Office</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img className="avatar-home" src="https://s3.amazonaws.com/uifaces/faces/twitter/blueblau/128.jpg" /></td>
              <td><a>Jerry Meyerson Meyers</a></td>
              <td>Automation Engineer</td>
              <td>San Francisco</td>
            </tr>
            <tr>
              <td><img className="avatar-home" src="https://s3.amazonaws.com/uifaces/faces/twitter/blueblau/128.jpg" /></td>
              <td><a>Jean Carpenter</a></td>
              <td>Automation Engineer</td>
              <td>New York</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = HomePage;
