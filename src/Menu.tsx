import React from "react";
import "./App.css";
import logo from "./logo.png";
import { proteins, sides, toppings, bases, smallPlates } from "./data";
import { Items } from "./Items";
import BYB from "./BYB";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <BYB />
      <div className="vr" />
      <div style={{ flexBasis: 0, flexGrow: 2.75 }}>
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
    </div>
  );
};

export default Menu;
