import React from "react";
import "./index.css";

export const LeftArea = ({ children }) => {
  console.log("children ", children);
  return (
    <div className="Left-area">
      <header>
        avatar
      </header>

      <div className="notifications-popup">
        <strong> Get Notified of New Messages </strong>
        <small> <a>Turn on desktop notifications</a> </small>
      </div>

      <div className="search-input-container">
        <p>search or start new chat</p>
      </div>

      <div className="contacts-list-conatiner">
        {children}
      </div>
    </div>
  )
};
