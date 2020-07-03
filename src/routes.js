import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Draw from "./pages/Draw";
import ListRecord from "./pages/ListRecord";
import ListRecordAnalisis from "./pages/ListRecordAnalisis";
import SignIn from "./pages/SignIn";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: `/signin`, state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/record" component={Record} />
      <PrivateRoute path="/draw" component={Draw} />
      <PrivateRoute path="/listrecord" component={ListRecord} />
      <PrivateRoute path="/listrecordanalisis" component={ListRecordAnalisis} />
      <Route path="/signin" component={SignIn} />
      <Route path="*" component={() => <h1>Page não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
