import React from "react";
import { Switch, Route } from "react-router";
import Error from "./screens/Error";
import UnderConstruction from "./screens/UnderConstruction";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={UnderConstruction} />
      <Route component={Error} />
    </Switch>
  );
}

export default Routes;
