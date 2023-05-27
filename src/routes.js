import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {isAuthenticated} from './services/auth';

import Dashboard from './pages/Dashboard';
import Draw from './pages/Draw';
import ListRecord from './pages/ListRecord';
import SignIn from './pages/SignIn';
import Print from './pages/Print';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ExportField from './pages/ExportField';
import Home from './pages/Home';
import HomeDraw from './pages/HomeDraw';
import {Graphics} from './pages/Graphics';
import GraphicsHome from './pages/GraphicsHome';
import {ListUser} from './pages/ListUser';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `/signin`,
            state: {from: props.location},
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/home" component={Dashboard} />
      <PrivateRoute path="/home-draw" component={HomeDraw} />
      <PrivateRoute path="/graphics" component={Graphics} />
      <PrivateRoute path="/home-graphics" component={GraphicsHome} />
      <PrivateRoute path="/list-users" component={ListUser} />
      <PrivateRoute path="/draw" component={Draw} />
      <PrivateRoute path="/listrecord" component={ListRecord} />
      <PrivateRoute path="/print" component={Print} />
      <PrivateRoute path="/export-fields" component={ExportField} />

      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/signin" component={SignIn} />
      <Route
        path="*"
        component={() => <h1>Page não encontrada</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
