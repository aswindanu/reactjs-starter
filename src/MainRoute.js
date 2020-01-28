import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Flagr from "./pages/Flagr";
import PatNolPat from "./pages/404";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/flagr" component={Flagr}></Route>

      <Route component={PatNolPat} />
    </Switch>
  );
};

export default MainRoute;
