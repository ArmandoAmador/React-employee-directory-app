var alt = require('../alt');
var EmployeeActions = require('../actions/EmployeeActions');

class EmployeeStore {
  constructor() {
    this.employees = [];
    this.bindListeners({
      handleUpdateEmployees: EmployeeActions.UPDATE_EMPLOYEES,
      handleFetchEmployees: EmployeeActions.FETCH_EMPLOYEES
    });
  }

  handleUpdateEmployees(employees) {
    this.employees = employees;
  }

  handleFetchEmployees() {
    this.employees = [];
  }
}

module.exports = alt.createStore(EmployeeStore, 'EmployeeStore');
