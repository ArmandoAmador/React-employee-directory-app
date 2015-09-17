"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var EmployeeList = React.createClass({
  propTypes: {
    employees: React.PropTypes.array.isRequired
  },

  render: function() {
    var createEmployeeRow = function(employee) {
      return (
        <tr key={employee.id}>
          <td><img className="avatar-home" src={employee.avatar} /></td>
          <td><Link to="profile" params={{id: employee.id}}>{employee.first_name} {employee.last_name}</Link></td>
          <td>{employee.title}</td>
          <td>{employee.location}</td>
        </tr>
      );
    };
    return (
      <div>
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
            {this.props.employees.map(createEmployeeRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = EmployeeList;
