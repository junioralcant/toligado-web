import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Dashboard from './pages/Dashboard';
import Draw from './pages/Draw';
import ListRecord from './pages/ListRecord';
import ListRecordAnalisis from './pages/ListRecordAnalisis';
import SignIn from './pages/SignIn';
import ListRecordDisapproved from './pages/ListRecordDisapproved';
import Print from './pages/Print';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ExportField from './pages/ExportField';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `/signin`,
            state: { from: props.location },
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

      <PrivateRoute path="/draw" component={Draw} />
      <PrivateRoute path="/listrecord" component={ListRecord} />
      <PrivateRoute
        path="/listrecordanalisis"
        component={ListRecordAnalisis}
      />
      <PrivateRoute
        path="/listrecorddisapproved"
        component={ListRecordDisapproved}
      />
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
