import React from 'react';
import NonDiv from './NonDiv';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Routes from './Routes';
import './styles/index.css';
const App = () => (
  <div className="container main-app">
    <Routes />
  </div>
);
export default hot(module)(App);
