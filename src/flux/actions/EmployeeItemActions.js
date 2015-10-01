import alt from '../alt';
import EmployeeApi from '../../api/employeeApi';

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

export default alt.createActions(EmployeeItemActions);
