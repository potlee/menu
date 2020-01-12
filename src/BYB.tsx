import React from "react";
import "./App.css";
import { proteins, sides, toppings, bases } from "./data";
import { Items } from "./Items";

const BYB = ({ hideDescription = false }) => {
  return (
    <div className="byb">
      <h1>Build Your Bowl, $11</h1>
      <div>
        <h1>Base</h1>
        <Items items={bases} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <h1>protein</h1>
        <Items items={proteins} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <h1>side</h1>
        <Items items={sides} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <span>
          <h1>toppings{"  "}</h1>
          <h4>ask for everything!</h4>
        </span>
        <Items items={toppings} twoCols hideDescription={hideDescription} />
      </div>
    </div>
  );
};

export default BYB;
