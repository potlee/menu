import React from "react";
import "./App.css";
import logo from "./logo.png";
import tv from "./prince.jpg";

import { smallPlates } from "./data";
import { Items } from "./Items";

const TV: React.FC = () => {
  document.querySelector("html")!.style.fontSize = "51px";
  return (
    <div className="tv">
      <div style={{ flexBasis: 0, flexGrow: 1, padding: "1rem" }}>
        <div>
          <img className="logo" src={logo} alt="" />
          <h5>224 W 35th st, New York · 646-476-4124 · 11AM to 9PM</h5>
        </div>
        <div>
          <h1>Small Plates</h1>
          <Items items={smallPlates} />
        </div>
        <div>
          <h1>Drinks</h1>
          <div className="drinks">
            <span>
              <h2>Mango Lassi, $5</h2>
              <h4> contains dairy</h4>
            </span>
            <span>
              <h2>Chhaas, $4</h2>
              <h4> contains dairy</h4>
            </span>
            <span>
              <h2>Iced Oatmilk Chai, $4</h2>
            </span>
            <span>
              <h2>Baaflo, $4</h2>
            </span>
            <h2>La Croix, $2</h2>
          </div>
        </div>
      </div>
      <img src={tv} alt="" style={{ height: "100%" }} />
    </div>
  );
};

export default TV;
