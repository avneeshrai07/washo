import React, { useState, useEffect } from "react";
import './chat.css';
import io from "socket.io-client";

// Replace with your backend Socket.io server URL
const SOCKET_SERVER_URL = "http://localhost:4000";

const Chat = ({ roomId }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initialize Socket.io connection
    const newSocket = io(SOCKET_SERVER_URL, { query: { roomId } });
    setSocket(newSocket);

    // Listen for incoming messages
    newSocket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on component unmount
    return () => newSocket.disconnect();
  }, [roomId]);

  const sendMessage = () => {
    if (message.trim()) {
      const messageData = { roomId, message, sender: "User" };
      socket.emit("send_message", messageData); // Send message to the server
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Chat Room: {roomId}</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "80%" }}
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
