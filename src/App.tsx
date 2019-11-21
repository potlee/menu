import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TV from "./TV";
import TV2 from "./TV2";
import Menu from "./Menu";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tv">
          <TV />
        </Route>
        <Route path="/tv2">
          <TV2 />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
