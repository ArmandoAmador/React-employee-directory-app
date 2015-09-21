"use strict";

var React = require('react');
var EmployeeApi = require('./../../api/employeeApi');
var EmployeeForm = require('./employeeForm');
var Router = require('react-router');
var validDate = require('../common/validDate');

var EditProfilePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      employee: {},
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var employeeId = this.props.params.id;

    if (employeeId) {
      this.setState({employee: EmployeeApi.getEmployeeById(employeeId)});
    }
  },

  setEmployeeState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.employee[field] = value;
    return this.setState({employee: this.state.employee});
  },

  employeeFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.employee.avatar.length === 0 ) {
      this.state.errors.avatar = "Url can't be blank";
      formIsValid = false;
    }

    if (this.state.employee.first_name.length === 0) {
      /*eslint-disable camelcase*/
      this.state.errors.first_name = "Name can't be blank";
      /*eslint-enable camelcase*/
      formIsValid = false;
    }

    if (this.state.employee.title.length === 0 ) {
      this.state.errors.title = "Title can't be blank";
      formIsValid = false;
    }

    if (!validDate(this.state.employee.start_date)) {
      /*eslint-disable camelcase*/
      this.state.errors.start_date = "Date is not in mm/dd/yyyy format";
      /*eslint-enable camelcase*/
      formIsValid = false;
    }

    if (this.state.employee.location.length === 0 ) {
      this.state.errors.location = "Location can't be blank";
      formIsValid = false;
    }

    if (this.state.employee.bio.length === 0 ) {
      this.state.errors.bio = "Bio can't be blank";
      formIsValid = false;
    }

    if (this.state.employee.email.length === 0 ) {
      this.state.errors.email = "Email can't be blank";
      formIsValid = false;
    }

    if (this.state.employee.phone.length === 0 ) {
      this.state.errors.phone = "Phone can't be blank";
      formIsValid = false;
    }


    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveEmployee: function(event) {
    event.preventDefault();
    if (!this.employeeFormIsValid()) {
      return;
    }

    EmployeeApi.saveEmployee(this.state.employee);
    this.setState({dirty: false});
    this.transitionTo('profile', {id: this.state.employee.id});
  },

  cancel: function(event) {
    event.preventDefault();

    if (!this.state.dirty && confirm('leave without editing?')) {
      return this.transitionTo('profile', {id: this.state.employee.id});
    }

    if (this.state.dirty && confirm('leave without saving?')) {
      return this.transitionTo('profile', {id: this.state.employee.id});
    }
  },

  render: function() {
    return (
      <div>
        <EmployeeForm
          employee={this.state.employee}
          onChange={this.setEmployeeState}
          onSave={this.saveEmployee}
          onCancel={this.cancel}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

module.exports = EditProfilePage;
