import alt from '../alt';
import EmployeeApi from '../../api/employeeApi'

class EmployeeActions {
  updateEmployees(list) {
    this.dispatch(list);
  }

  fetchEmployees() {
    var actionDispatcher = this;
    actionDispatcher.dispatch();

    var list = EmployeeApi.getAllEmployees();
    actionDispatcher.actions.updateEmployees(list);
  }
}

export default alt.createActions(EmployeeActions);
