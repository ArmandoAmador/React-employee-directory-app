"use strict";

var React = require('react');
var EmployeeApi = require('./../../api/employeeApi');
var EmployeeProfile = require('./employeeProfile');

var ViewEmployeePage = React.createClass({
  getInitialState: function() {
    return {
      employee: {}
    };
  },

  componentWillMount: function() {
    var employeeId = this.props.params.id;

    if (employeeId) {
      this.setState({employee: EmployeeApi.getEmployeeById(employeeId)});
    }
  },

  render: function() {
    return (
      <div>
        <EmployeeProfile employee={this.state.employee} />
      </div>
    );
  }
});

module.exports = ViewEmployeePage;
