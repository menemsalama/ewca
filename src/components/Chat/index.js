import React from "react";
import InlineSVG from 'svg-inline-react';
import "./index.css";

import smileIcon from "./icons/smile";
import microphoneIcon from "./icons/microphone";

const TopBar = ({ first_name, last_name, avatar }) => {
  return (
    <div className="Top-bar">
      <div>
        <img src={avatar} />
      </div>
      <div>
        {first_name + " " + last_name}
      </div>

      <div>
        icons
      </div>
    </div>
  );
};

const ChatLog = ({children}) => {
  return (
    <div className="Chat-log">
      {children}
    </div>
  );
};

const BottomBar = ({onNewMessage}) => {
  return (
    <div className="Bottom-bar">
      <div>
        <InlineSVG src={smileIcon} />
      </div>
      <div>
        <input placeholder="Type a message" onKeyUp={onNewMessage}/>
      </div>
      <div>
        <InlineSVG src={microphoneIcon} />
      </div>
    </div>
  )
}

export const Chat = ({user, children, onNewMessage}) => {
  return (
    <div className="Chat-container">
      <TopBar {...user} />

      <ChatLog>
        {children}
      </ChatLog>

      <BottomBar onNewMessage={onNewMessage} />
    </div>
  )
};
