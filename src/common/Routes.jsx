import React from 'react';
import NonDiv from './NonDiv';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/homework" />
    <Route path="/todo" exact />
  </Switch>
);

export default Routes;
