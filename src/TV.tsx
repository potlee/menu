import React from "react";
import "./App.css";
import logo from "./logo.png";
import tv from "./tv.png";

import { proteins, sides, toppings, bases } from "./data";
import { Items } from "./Items";

const TV: React.FC = () => {
  document.querySelector("html")!.style.fontSize = "54px";
  return (
    <div className="tv">
      <div className="byob">
        <h1 className="big">Build Your Bowl, $11</h1>
        <div>
          <h1>Base</h1>
          <Items items={bases} twoCols />
        </div>
        <div>
          <h1>protein</h1>
          <Items items={proteins} twoCols />
        </div>
        <div>
          <h1>sides</h1>
          <Items items={sides} twoCols />
        </div>
        <div>
          <span>
            <h1>toppings </h1>
            <h4>ask for everything!</h4>
          </span>
          <Items items={toppings} twoCols />
        </div>
      </div>
      <img src={tv} alt="" style={{ height: "100%" }} />
    </div>
  );
};

export default TV;
