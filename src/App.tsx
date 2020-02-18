import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TV2 from "./TV2";
import TV3 from "./TV3";
import Menu from "./Menu";
import logo from "./logo-white.png";
import prince from "./diamond.jpg";
import bybWide from "./byb-wide.png";
import byb from "./byb.png";
import Catering from "./Catering";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tv">
          <TV2 />
        </Route>
        <Route path="/tv2">
          <TV3 />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/catering">
          <Catering />
        </Route>
        <Route path="/">
          <div
            style={{
              background: `url(${prince})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vw",
              maxHeight: "70vh",
              backgroundPosition: "center"
            }}
          >
            <div
              style={{
                flexDirection: "row",
                padding: "1rem",
                alignItems: "flex-start"
              }}
            >
              <img src={logo} alt="ambo" style={{ height: "2.5rem" }} />
              <div style={{ flexGrow: 1 }} />
              <a href="https://trycaviar.app.link/zQvVVLIOlZ">
                <h1 style={{ color: "white" }}>order online</h1>
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
