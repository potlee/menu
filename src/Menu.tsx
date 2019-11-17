import React from "react";
import "./App.css";
import logo from "./logo.png";
import { proteins, sides, toppings, bases, smallPlates } from "./data";
import { Items } from "./Items";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div style={{ flexBasis: 0, flexGrow: 5 }}>
        <h1 className="big">Build Your Bowl, $11</h1>
        <div>
          <h1>Base</h1>
          <Items items={bases} twoCols />
        </div>
        <div>
          <h1>protein</h1>
          <Items items={proteins} twoCols />
        </div>
        <div className="sides">
          <h1>sides</h1>
          <Items items={sides} twoCols />
        </div>
        <div>
          <span>
            <h1>toppings{"  "}</h1>
            <h4>ask for everything!</h4>
          </span>
          <Items items={toppings} twoCols />
        </div>
      </div>
      <div className="vr" />
      <div style={{ flexBasis: 0, flexGrow: 2.75 }}>
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
    </div>
  );
};

export default Menu;
