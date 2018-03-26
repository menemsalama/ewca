import React from "react";

export const MainArea = ({ children }) => {
  if (children !== null) {
    return (
      <div className="Main-area">
        {children}
      </div>
    )
  }

  return (
    <div className="Main-area">
      <div className="Main-view">
        <img src="https://web.whatsapp.com/img/c98cc75f2aa905314d74375a975d2cf2.jpg"/>
        <h1>Keep your phone connected</h1>
        <p>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
      </div>
    </div>
  )
};
