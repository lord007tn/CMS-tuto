import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import DashboardCategories from '../components/Dashboard/DashboardCategories';
import PrivateRoute from './PrivateRoute';

const dashboardRoutes = () => {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/categories"
            component={DashboardCategories}
          />
        </Switch>
      </Router>
    );
}

export default dashboardRoutes
