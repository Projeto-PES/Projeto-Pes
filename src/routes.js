import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";
import Main from "./pages/Main";
import Register from "./pages/Register";
import NewPass from "./pages/NewPass";
import RestorePass from "./pages/RestorePass";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/Main" component={Main} />
        <Route path="/Register" component={Register} />
        <Route path="/NewPass" component={NewPass} />
        <Route path="/RestorePass" component={RestorePass} />
      </Switch>
    </BrowserRouter>
  );
}
