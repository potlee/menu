import React from "react";
import "./App.css";
import { proteins, sides, toppings, bases } from "./data";
import { Items } from "./Items";

const BYB: React.FC = () => {
  return (
    <div
      style={{
        flexBasis: 0,
        flexGrow: 5,
        justifyContent: "space-between"
      }}
    >
      <h1>Build Your Bowl, $11</h1>
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
          <h1>toppings{"  "}</h1>
          <h4>ask for everything!</h4>
        </span>
        <Items items={toppings} twoCols />
      </div>
    </div>
  );
};

export default BYB;
