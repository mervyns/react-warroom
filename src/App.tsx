import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage
} from './containers/ContainerProvider';
import {hot} from 'react-hot-loader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React War Room
      </header>
      <Switch>
      <Route
            exact
            path="/"
            component={HomePage}
          />
      </Switch>
    </div>
  );  
}

export default hot(module)(App);
