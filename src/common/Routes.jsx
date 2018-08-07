import React from 'react';
import NonDiv from './NonDiv';
import { Route } from 'react-router-dom';
import Home from '../home';
const Routes = () => (
  <NonDiv>
    <Route path="/" component={Home} exact />
  </NonDiv>
);

export default Routes;
