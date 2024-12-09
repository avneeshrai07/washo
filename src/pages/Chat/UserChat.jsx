import React, { useState, useEffect } from 'react';
import useSocket from '../../Hooks/useSocket';
import { useUser } from '../../Auth/Context/UserContext';
import useFetchMessages from '../../Hooks/useFetchMessages';
import axios from "axios";
import './UserChat.css'; // Importing the CSS file for styling

const UserChat = () => {
  const { currentUser } = useUser(); 
  const roomId = currentUser.uid;
  const { messages, typingUser, sendMessageToRoom, onMessageReceived } = useSocket(roomId);  // Pass roomId
  const [message, setMessage] = useState('');
  const [recivedMessage, setrecivedMessage] = useState([]);
  const receivedMessages = useFetchMessages(roomId);
  // const roomId = currentUser.uid; // Get current user details from context
  const handleSendMessage = () => {
    if (message.trim()) {
      
      // Prepare the message object with details like uid, sender_type, name, timestamp
      const messageData = {
        roomId: currentUser.uid,  // Unique ID of the user
        sender_type: 'User',   // Sender type (could be 'User' or 'Admin')
        name: currentUser.displayName, // User's name
        message,               // The actual message
        timestamp: new Date().getTime(), // Current timestamp when message is sent
      };
      sendMessageToRoom(messageData);  // Send the formatted message to the socket
      setMessage('');  // Clear the message input field
    }
  };
  useEffect(() => {
    const fetchMessages = async () => {
      try {
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [roomId]);

  // Listen for new messages from socket and update state
  useEffect(() => {
    onMessageReceived((newMessage) => {
      console.log("New message received:", newMessage);
      // Here you should update the message list or handle new messages
      setrecivedMessage((prevMessages) => [...prevMessages, newMessage]);
    });
  }, [onMessageReceived]);
  

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with {currentUser.name}</h2>
      </div>

      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.roomId} className={`message ${msg.sender_type === 'User' ? 'user-message' : 'admin-message'}`}>
            <strong>{msg.name}</strong>: {msg.message}
          </div>
        ))}
      </div>

      <div className="message-input-container">
        <textarea
          className="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>

      {typingUser && <div className="typing-indicator">{typingUser} is typing...</div>}
    </div>
  );
};

export default UserChat;
