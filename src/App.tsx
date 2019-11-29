import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TV from "./TV";
import TV2 from "./TV2";
import Menu from "./Menu";
import logo from "./logo-white.png";
import prince from "./prince.jpg";
import bybWide from "./byb-wide.png";
import byb from "./byb.png";

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
        <Route path="/">
          <div
            style={{
              background: `url(${prince})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vw"
            }}
          >
            <div
              style={{
                flexDirection: "row",
                padding: "1rem",
                alignItems: "flex-start"
              }}
            >
              <img src={logo} alt="ambo" style={{ height: "3rem" }} />
              <div style={{ flexGrow: 1 }} />
              <a>
                <h2 style={{ color: "white" }}>order online</h2>
              </a>
            </div>
          </div>
          <div>
            <Menu />
            <img src={bybWide} style={{ width: "100vw" }} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
