import React from "react";
import "./App.css";
import logo from "./logo.png";
import { smallPlates, drinks } from "./data";
import { Items } from "./Items";
import BYB from "./BYB";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <BYB />
      <div className="r" />
      <div className="other">
        <div>
          <img className="logo" src={logo} alt="" />
          <h5>224 W 35th st, New York · 646-476-4214 · 11AM to 9PM</h5>
        </div>
        <div>
          <h1>Small Plates</h1>
          <Items items={smallPlates} />
        </div>
        <div>
          <h1>Drinks</h1>
          <div className="drinks">
            <Items items={drinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
