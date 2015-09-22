import React from 'react';
import EmployeeApi from './../api/employeeApi';
import EmployeeList from './employees/employeeList';

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

export default HomePage;
