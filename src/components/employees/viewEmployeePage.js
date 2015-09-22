import React from 'react';
import EmployeeApi from './../../api/employeeApi';
import EmployeeProfile from './employeeProfile';

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

export default ViewEmployeePage;
