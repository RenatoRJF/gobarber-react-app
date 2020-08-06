import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Dahsboard from '../pages/Dashboard';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/dashboard" component={Dahsboard} />
  </Switch>
);

export default Routes;
