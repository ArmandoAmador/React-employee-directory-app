import React from 'react';
import EmployeeApi from './../api/employeeApi';
import EmployeeList from './employees/employeeList';
var EmployeeListActions = require('./../flux/actions/EmployeeListActions');
var EmployeeListStore = require('./../flux/stores/EmployeeListStore');
var ListenerMixin = require('alt/mixins/ListenerMixin');

var HomePage = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return EmployeeListStore.getState();
  },

  componentWillMount: function() {
    this.listenTo(EmployeeListStore, this._onChange);
  },

  componentDidMount: function() {
    if (!this.state.employeeList.length) {
      EmployeeListActions.requestEmployeeList();
    }
  },

  _onChange: function() {
    this.setState(EmployeeListStore.getState());
  },

  render: function() {
    var employeeList = null;

    if (this.state.loadingEmployeeList) {
      employeeList = (
        <div>Loading</div>
      );
    } else {
      employeeList = (
        <div>
          <h1>People</h1>
          <EmployeeList employees={this.state.employeeList} />
        </div>
      );
    }
    return (
      <div>
        {employeeList}
      </div>
    );
  }
});

export default HomePage;
