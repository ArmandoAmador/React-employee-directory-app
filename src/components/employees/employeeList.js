import React from 'react';
import { Router, Link } from 'react-router';
import EmployeeApi from './../../api/employeeApi';

var EmployeeList = React.createClass({
  propTypes: {
    employees: React.PropTypes.array.isRequired
  },

  deleteEmployee: function(e) {
    e.preventDefault();
    EmployeeApi.deleteEmployee(e.target.dataset.id);
    e.target.parentNode.parentNode.remove();
  },

  render: function() {
    var createEmployeeRow = function(employee) {
      return (
        <tr key={employee.id}>
          <td><img className="avatar-home" src={employee.avatar} /></td>
          <td><Link to={`/profile/${employee.id}`}>{employee.first_name} {employee.last_name}</Link></td>
          <td>{employee.title}</td>
          <td>{employee.location}</td>
          <td>
            <button data-id={employee.id} onClick={this.deleteEmployee}>&times;</button>
          </td>
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
              <th>Actions</th>
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

export default EmployeeList;
