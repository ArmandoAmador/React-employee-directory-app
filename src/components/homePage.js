import React from 'react';
import EmployeeApi from './../api/employeeApi';
import EmployeeList from './employees/employeeList';
import EmployeeActions from './../flux/actions/EmployeeActions';
import EmployeeStore from './../flux/stores/EmployeeStore';
import ListenerMixin from 'alt/mixins/ListenerMixin';

var HomePage = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return EmployeeStore.getState();
  },

  componentWillMount: function() {
    this.listenTo(EmployeeStore, this.onChange);
  },

  componentDidMount: function() {
    EmployeeStore.listen(this.onChange);
    EmployeeActions.fetchEmployees();
  },

  componentWillUnmount: function() {
    EmployeeStore.unlisten(this.onChange);
  },

  onChange: function() {
    this.setState(EmployeeStore.getState());
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
