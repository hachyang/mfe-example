import { Route, Switch } from "react-router-dom";

import DialogPage from "./pages/dialog-page";
import IndexPage from "./pages/index-page";
import React from "react";
import RoutingPage from "./pages/routing-page";
import UiLibraryPage from "./pages/ui-library-page";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <IndexPage />
    </Route>
    <Route path="/dialog" >
      <DialogPage />
    </Route>
    <Route path="/ui-library" component={UiLibraryPage} />
    <Route path="/myrouting" component={RoutingPage} />
  </Switch>
);

export default Routes;
