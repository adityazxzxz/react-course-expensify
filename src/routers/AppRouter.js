import React from 'react';
import {Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import {createBrowserHistory } from 'history';
import Header from '../component/Header';
import ExspenseDashboardPage from '../component/ExspenseDashboardPage';
import AddExspensePage from '../component/AddExspensePage';
import EditExspensePage from '../component/EditExspensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import LoginPage from '../component/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExspenseDashboardPage}/>
            <PrivateRoute path="/create" component={AddExspensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExspensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)

export default AppRouter;