import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Thread2 from   "../components/Thread2"
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sobre" component={About}></Route>
      <Route exact path="/404" render={() => <div>Not found!</div>}></Route>      
      <Route path="/thread/:thread_slug" component={Thread2} />
      <Route path="*" render={() => <Redirect to="/404" />}></Route>      
    </Switch>
  </>
);

export default Routes;
