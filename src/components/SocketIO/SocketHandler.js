import { io } from 'socket.io-client';

// Initialize the socket connection globally
let socket;

export const connectSocket = (roomId) => {
  socket = io("http://localhost:5000", {
    transports: ['websocket'],
    query: { roomId },
  });

  return new Promise((resolve, reject) => {
    socket.on("connect", () => {
      console.log(`Connected to room: ${roomId}`);
      resolve(socket);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
      reject(error);
    });

    socket.on("error", (error) => {
      console.error("Socket Error:", error);
      reject(error);
    });
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log("Disconnected from socket");
  } else {
    console.log("No active socket connection to disconnect.");
  }
};

export const sendMessage = (messageData) => {
  if (socket) {
    socket.emit("send_message", messageData);
  } else {
    console.error("Socket is not connected.");
  }
};

export const receiveMessage = (callback) => {
  if (socket) {
    socket.on("receive_message", callback);
  } else {
    console.error("Socket is not connected.");
  }
};

export const removeMessageListener = (callback) => {
  if (socket) {
    socket.off("receive_message", callback);
    console.log("Message listener removed.");
  } else {
    console.error("Socket is not connected.");
  }
};
