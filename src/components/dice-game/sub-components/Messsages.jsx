import React from "react";

const Messages = ({ message}) => {
 
  return (
    <div className="messages">
      <div className="message-height">{message}</div>
    </div>
  );
};

export default Messages;
