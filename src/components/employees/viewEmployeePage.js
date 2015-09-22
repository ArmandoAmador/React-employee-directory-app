import React from 'react';
import EmployeeApi from './../../api/employeeApi';
import EmployeeProfile from './employeeProfile';
import EmployeeItemStore from './../../flux/stores/EmployeeItemStore';
import EmployeeItemActions from './../../flux/actions/EmployeeItemActions';
import ListenerMixin from 'alt/mixins/ListenerMixin';

var ViewEmployeePage = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return EmployeeItemStore.getState();
  },

  componentWillMount: function() {
    this.listenTo(EmployeeItemStore, this._onChange);
  },

  componentDidMount: function() {
    EmployeeItemActions.requestEmployeeItem(this.props.params.id);
  },

  _onChange() {
    this.setState(EmployeeItemStore.getState());
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params !== nextProps.params) {
      EmployeeItemActions.requestEmployeeItem(nextProps.params.id);
    }
  },

  render: function() {
    var elementToDisplay = null;

    if (this.state.loadingEmployeeItem) {
      elementToDisplay = (
        <div>Loading Item...</div>
      );
    } else {
      if (this.state.employeeItemError) {
        elementToDisplay = (
          <div>{this.state.employeeItemError}</div>
        );
      } else {
        elementToDisplay = (
          <EmployeeProfile employeeItem={this.state.employeeItem} />
        );
      }
    }

    return (
      <div>
        {elementToDisplay}
      </div>
    );

  }
});

export default ViewEmployeePage;
