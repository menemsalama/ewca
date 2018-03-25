import React from "react";
import "./index.css";

export const BodyWrapper = ({ children }) => {
  return (
    <div className="App">
      <div className="App-header"> </div>
      <div className="Body-wrapper">
        {children}
      </div>
    </div>
  );
};
