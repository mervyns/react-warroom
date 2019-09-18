import React from "react";
import { HomePage } from "./containers/ContainerProvider";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default hot(module)(App);
