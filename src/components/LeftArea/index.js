import React from "react";
import InlineSVG from 'svg-inline-react';
import "./index.css";

import statusIcon from "./icons/status";
import messageIcon from "./icons/message";
import menuIcon from "./icons/menu";
import bellIcon from "./icons/bell";
import searchIcon from "./icons/search";

export const LeftArea = ({ children, searchUsers }) => {
  return (
    <div className="Left-area">
      <header>
        <div className="user-avatar">
          <img src="https://vignette.wikia.nocookie.net/ironthronerp/images/d/db/RamsayBolton.jpeg/revision/latest?cb=20150812201804" />
        </div>
        <div className="icons-bar">
          <span>
            <InlineSVG src={menuIcon} />
          </span>
          <span>
            <InlineSVG src={messageIcon} />
          </span>
          <span>
            <InlineSVG src={statusIcon} />
          </span>
        </div>
      </header>

      <div className="notifications-popup">
        <div className="icon">
          <InlineSVG src={bellIcon} />
        </div>
        <div className="content">
          <strong>
            Get Notified of New Messages
          </strong>
          <small>
            <a>
              Turn on desktop notifications
            </a>
          </small>
        </div>
      </div>

      <div className="search-input-container">
        <span>
          <InlineSVG src={searchIcon} />
        </span>
        <input placeholder="search or start new chat" onKeyUp={searchUsers}/>
      </div>

      <div className="contacts-list-conatiner">
        {children}
      </div>
    </div>
  )
};
