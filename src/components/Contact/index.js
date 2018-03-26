import React from "react";
import './index.css';

export const Contact = ({ first_name, last_name, avatar, openChat, idx }) => {
  return (
    <div className="Contact-container" onClick={openChat} id={idx}>
      <div className="Contact-img">
        <img src={avatar} />
      </div>

      <div className="Contact-data">
        {first_name + " " + last_name}
      </div>

      <div className="Contact-date">
        Wednesday
      </div>
    </div>
  )
}
