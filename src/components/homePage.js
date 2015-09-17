'use strict';

var React = require('react');
var EmployeeApi = require('./../api/employeeApi');
var EmployeeList = require('./employees/employeeList');

var HomePage = React.createClass({
  getInitialState: function() {
    return {
      employees: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ employees: EmployeeApi.getAllEmployees() });
    }
  },

  render: function() {
    return (
      <div>
        <h1>People</h1>
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
});

module.exports = HomePage;
