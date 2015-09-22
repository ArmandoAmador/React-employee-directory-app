var alt = require('../alt');
var employeeApi = require('../../api/employeeApi');

class EmployeeListActions {
  receiveEmployeeList(list) {
    this.dispatch(list);
  }

  requestEmployeeList() {
    var actionDispatcher = this;
    actionDispatcher.dispatch();

    var list = employeeApi.getAllEmployees();
    actionDispatcher.actions.receiveEmployeeList(list);
  }
}

module.exports = alt.createActions(EmployeeListActions);
