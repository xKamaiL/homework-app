import React from 'react';
import NonDiv from './NonDiv';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
const Routes = () => (
  <NonDiv>
    <Route path="/" component={Home} exact />
    <Route />
  </NonDiv>
);

export default Routes;
