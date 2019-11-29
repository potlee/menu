import React from "react";
import "./App.css";
// import logo from "./logo.png";
import tv from "./tv.png";
// import gif from "./gif1.m4v";

import BYB from "./BYB";

const TV: React.FC = () => {
  // document.querySelector("html")!.style.fontSize = "51px";
  return (
    <div className="tv">
      <div style={{ padding: "1rem" }}>
        <BYB />
      </div>
      <img src={tv} alt="" style={{ height: "100%" }} />
      {/* <video autoPlay loop controls style={{ height: "50%" }} src={gif} /> */}
    </div>
  );
};

export default TV;
