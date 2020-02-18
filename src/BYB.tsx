import React from "react";
import "./App.css";
import { proteins, sides, toppings, bases } from "./data";
import { Items } from "./Items";

const BYB = ({ hideDescription = false }) => {
  return (
    <div className="byb">
      <h1>Build Your Bowl, $11</h1>
      <div>
        <span>
          <h2>1. Base</h2>
          <h4> choose one or half and half </h4>
        </span>
        <Items items={bases} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <span>
          <h2>2. protein</h2>
          {/* <h4> choose one. extra protein, +$2</h4> */}
        </span>
        <Items items={proteins} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <span>
          <h2>3. side</h2>
          {/* <h4> choose one</h4> */}
        </span>
        <Items items={sides} twoCols hideDescription={hideDescription} />
      </div>
      <div>
        <span>
          <h2>4. toppings{"  "}</h2>
          <h4>ask for everything!</h4>
        </span>
        <Items items={toppings} twoCols hideDescription={hideDescription} />
      </div>
    </div>
  );
};

export default BYB;
