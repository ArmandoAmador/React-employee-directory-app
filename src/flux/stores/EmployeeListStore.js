var alt = require('../alt');
var EmployeeListActions = require('../actions/EmployeeListActions');

class EmployeeListStore {
  constructor() {
    this.bindActions(EmployeeListActions);

    this.loadingEmployeeList = false;
    this.employeeList = [];
  }

  onRequestEmployeeList() {
    this.loadingEmployeeList = true;
  }

  onReceiveEmployeeList(rawList) {
    this._init(rawList);
    this.loadingEmployeeList = false;
  }

  _init(rawList) {
    this.employeeList = rawList;
  }
}

module.exports = alt.createStore(EmployeeListStore);
