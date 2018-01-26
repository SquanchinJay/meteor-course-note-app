import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../ui/history.js'

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/dashboard/:id' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    history.push('/dashboard')
  } else if(!isAuthenticated && isAuthenticatedPage) {
    history.push('/')
  }
}