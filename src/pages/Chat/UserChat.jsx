import React, { useState, useEffect } from 'react';
import useSocket from '../../Hooks/useSocket';
import { useUser } from '../../Auth/Context/UserContext';
import fetchMessages from '../Chat/fetchMessages/fetchMessages';
import MessageUI from './MessageUI/messageUI';
import './UserChat.css'; 

const UserChat = () => {
  const { currentUser } = useUser();
  const roomId = currentUser?.uid;
  const { sendMessageToRoom, onMessageReceived } = useSocket(roomId);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  // Fetch initial messages
  useEffect(() => {
    const getMessages = async () => {
      if (!roomId) return;
      try {
        const fetchedMessages = await fetchMessages(roomId);
        setAllMessages(fetchedMessages);
      } catch (error) {
        console.error("Failed to fetch initial messages:", error);
      }
    };
    getMessages();
  }, [roomId]);

  // Handle real-time messages from the socket
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log("New message received:", newMessage);
      setAllMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    onMessageReceived(handleNewMessage);

    // No need for cleanup as it's managed inside `useSocket`
  }, [onMessageReceived]);

  // Send message handler
  const handleSendMessage = () => {
    if (message.trim()) {
      const messageData = {
        roomId,
        sender_type: 'User',
        name: currentUser.displayName,
        message,
        timestamp: new Date().getTime(),
      };
      sendMessageToRoom(messageData);
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat Room for {currentUser?.displayName || "Guest"}</h2>
      </div>

      <div className="message-list">
        {allMessages.map((msg, index) => (
          <MessageUI key={index} msg={msg} />
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
    </div>
  );
};

export default UserChat;
