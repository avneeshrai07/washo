import React from 'react';
import './MessageUI.css'; // Import CSS for message styling

const MessageUI = ({ msg }) => {
  const isUserMessage = msg.sender_type === 'User';

  // Format the timestamp into a readable time (e.g., "10:30 AM")
  const formattedTime = new Date(msg.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`message-item ${isUserMessage ? 'user-message' : 'admin-message'}`}
    >
      <div className="message-content">
        <strong>{msg.name}</strong>
        <p>{msg.message}</p>
        <span className="message-time">{formattedTime}</span>
      </div>
    </div>
  );
};

export default MessageUI;
