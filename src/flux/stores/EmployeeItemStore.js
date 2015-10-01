import alt from '../alt';
import EmployeeItemActions from '../actions/EmployeeItemActions';

class EmployeeItemStore {
  constructor() {
    this.bindActions(EmployeeItemActions);
    this.loadingEmployeeItem = false;
    this.employeeItem = {};
    this.employeeItemError = null;
  }

  onRequestEmployeeItem() {
    this.loadingEmployeeItem = true;
    this.employeeItemError = null;
  }

  onReceiveEmployeeItem(rawEmployeeItem) {
    this._init(rawEmployeeItem);
    this.loadingEmployeeItem = false;
  }

  onReceiveEmployeeItemError(error) {
    this.employeeItemError = error;
    this.loadingEmployeeItem = false;
  }

  _init(rawEmployeeItem) {
    this.employeeItem = rawEmployeeItem;
  }
}

export default alt.createStore(EmployeeItemStore, 'EmployeeItemStore');
