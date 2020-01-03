import React from "react";
import "./App.css";
import logo from "./logo.png";
import tv from "./prince.jpg";

import { smallPlates, drinks } from "./data";
import { Items } from "./Items";

const TV: React.FC = () => {
  document.querySelector("html")!.style.fontSize = "65px";
  return (
    <div className="tv">
      <div style={{ flexBasis: 0, flexGrow: 1, padding: "1rem" }}>
        <div>
          <img className="logo" src={logo} alt="" />
          <h5>224 W 35th st, New York · 646-476-4124 · 11AM to 9PM</h5>
        </div>
        <div>
          <Items items={smallPlates} hideDescription />
        </div>
        <div>
          <h1>Drinks</h1>
          <Items items={drinks} />
        </div>
      </div>
      <img src={tv} alt="" style={{ height: "100%" }} />
    </div>
  );
};

export default TV;
