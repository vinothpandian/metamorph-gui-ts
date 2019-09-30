import React from "react";
import { Switch, Route } from "react-router";
import Error from "./screens/Error";
import Home from "./screens/Home";

function Routes(): React.FunctionComponentElement<{}> {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  );
}

export default Routes;
