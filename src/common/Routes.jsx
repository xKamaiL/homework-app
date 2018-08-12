import React from 'react';
import NonDiv from './NonDiv';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import Homework from '../homework';


const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/homework" component={Homework} />
    <Route path="/todo" exact />
  </Switch>
);

export default Routes;
