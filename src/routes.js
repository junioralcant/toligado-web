import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Draw from "./pages/Draw";
import ListRecord from "./pages/ListRecord";
import ListRecordAnalisis from "./pages/ListRecordAnalisis";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/record" component={Record} />
      <Route path="/draw" component={Draw} />
      <Route path="/listrecord" component={ListRecord} />
      <Route path="/listrecordanalisis" component={ListRecordAnalisis} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
