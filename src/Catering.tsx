import React from "react";
import "./App.css";
import { domioMenu, extras } from "./data";
import { Items } from "./Items";

const Catering: React.FC = () => {
  return (
    <div>
      <div
        className="catering"
        style={{
          padding: "0.5rem 1.25rem"
        }}
      >
        <div>
          <div>
            <h1 style={{ letterSpacing: "1px" }}>Indian Bowl Buffet </h1>
            <h4>$12 per person. 15 person minimum.</h4>
            <h4>Includes bowls, forks, serving spoons, napkins.</h4>
          </div>
          <div>
            <Items items={domioMenu} />
          </div>
        </div>
        <div className="r" style={{ margin: "0.75rem 1.25rem" }} />
        <div style={{ flexBasis: "40%", flexShrink: 0 }}>
          <h1 style={{ marginBottom: "1rem" }}>Extras</h1>
          <Items items={extras} style={{ flexGrow: 1 }} />
        </div>
        {/* <img src={bowl} alt="" style={{ height: "100%" }} /> */}
      </div>
      <br />
      <div className="catering">
        <span>
          <h1 style={{ letterSpacing: "1px" }}>Indian Bowl Buffet </h1>
          <h4>$12 per person</h4>
        </span>
        <div>
          <Items items={domioMenu} />
        </div>
      </div>
    </div>
  );
};

export default Catering;
