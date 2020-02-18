import React from "react";
import "./App.css";
import logo from "./logo.png";
import { smallPlates, drinks, tacos } from "./data";
import { Items } from "./Items";
import BYB from "./BYB";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div>
        <img className="logo" src={logo} alt="" />
        <h5>
          amboeats.com · 24 W 35th st, New York · 646-476-4214 · 11AM to 9PM
        </h5>
      </div>
      <div className="r hr" />
      <div>
        <h1>Our Specialties</h1>
        <Items items={smallPlates} twoCols />
      </div>
      <div className="r hr" />
      <div>
        <h1>Tacos</h1>
        <Items items={tacos} twoCols />
      </div>
      <div className="r hr" />
      <BYB />
      <div className="r hr" />
      <div>
        <h1>Drinks</h1>
        <div className="drinks">
          <Items items={drinks} twoCols />
        </div>
      </div>
    </div>
  );
};

export default Menu;
