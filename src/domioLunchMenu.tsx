import React from "react";
import "./App.css";
import logo from "./logo.png";
import { smallPlates, drinks, domioMenu } from "./data";
import { Items } from "./Items";
import BYB from "./BYB";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="other">
        <div>
          <img className="logo" src={logo} alt="" />
          <h5>224 W 35th st, New York · 646-476-4214 · 11AM to 9PM</h5>
        </div>
        <div className="r hr" />
        <h1>Domio Lunch Menu 1/24</h1>
        <div>
          <Items items={domioMenu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
