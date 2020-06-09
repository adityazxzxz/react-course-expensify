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

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <Route path="/dashboard" component={ExspenseDashboardPage}/>
            <Route path="/create" component={AddExspensePage}/>
            <Route path="/edit/:id" component={EditExspensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)

export default AppRouter;