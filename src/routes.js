import React from 'react';
import { IndexRoute, Route} from 'react-router'

var routes = (
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/homePage')} />
    <Route path="/profile/:id" component={require('./components/employees/viewEmployeePage')} />
    <Route path="/profile/:id/edit" component={require('./components/employees/editEmployeePage')} />
    <Route path="*" component={require('./components/notFoundPage')} />
  </Route>
);

export default routes;
