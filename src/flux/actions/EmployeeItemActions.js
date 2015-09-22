var alt = require('../alt');
var EmployeeApi = require('../../api/employeeApi');

class EmployeeItemActions {

  receiveEmployeeItem(employeeItem) {
    this.dispatch(employeeItem);
  }

  receiveEmployeeItemError(error) {
    this.dispatch(error);
  }

  requestEmployeeItem(id) {
    var actionDispatcher = this;
    actionDispatcher.dispatch();

    var item = EmployeeApi.getEmployeeById(id);
    actionDispatcher.actions.receiveEmployeeItem(item);
  }
}

module.exports = alt.createActions(EmployeeItemActions);
