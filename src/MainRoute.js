import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Data/Pages/Home";
import Flagr from "./Data/Pages/Flagr";
import PatNolPat from "./Data/Pages/404";

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
