import React, { useState } from "react";
import { useUser } from "../../../Auth/Context/UserContext";
const AdminDashboard = () => {
  const {uid} = useUser();
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://localhost:4000/messages/${uid}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Admin Dashboard</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={uid}
          
          placeholder="Enter User ID"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button
          onClick={fetchMessages}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Fetch Messages
        </button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          maxHeight: "400px",
          overflowY: "scroll",
        }}
      >
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{msg.sender}:</strong> {msg.message} <br />
              <small>{new Date(msg.timestamp).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No messages found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
