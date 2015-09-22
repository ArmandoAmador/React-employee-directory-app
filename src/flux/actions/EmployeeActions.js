var alt = require('../alt');
var employeeApi = require('../../api/employeeApi');

class EmployeeActions {
  updateEmployees(list) {
    this.dispatch(list);
  }

  fetchEmployees() {
    var actionDispatcher = this;
    actionDispatcher.dispatch();

    var list = employeeApi.getAllEmployees();
    actionDispatcher.actions.updateEmployees(list);
  }
}

module.exports = alt.createActions(EmployeeActions);
