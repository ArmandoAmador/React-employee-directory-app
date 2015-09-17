"use strict";

//This file is mocking a web API by hitting hard coded data.
var employees = require('./employeeData').employees;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.

var generateUUID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

var _generateId = function () {
  return generateUUID();
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var EmployeeApi = {
  getAllEmployees: function() {
    return _clone(employees);
  },

  getEmployeeById: function(id) {
    var employee = _.find(employees, {id: id});
    return _clone(employee);
  },

  saveEmployee: function(employee) {
    //pretend an ajax call to web api is made here
    console.log('Pretend this just saved the employee to the DB via AJAX call...');

    if (employee.id) {
      var existingEmployeeIndex = _.indexOf(employees, _.find(employees, {id: employee.id}));
      employees.splice(existingEmployeeIndex, 1, employee);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new employees in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      employee.id = _generateId(employee);
      employees.push(employee);
    }

    return _clone(employee);
  },

  deleteEmployee: function(id) {
    console.log('Pretend this just deleted the employee from the DB via an AJAX call...');
    _.remove(employees, { id: id});
  }
};

module.exports = EmployeeApi;
