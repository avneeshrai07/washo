import { useState, useEffect, useRef } from "react";
import { connectSocket, disconnectSocket, sendMessage, receiveMessage, removeMessageListener } from "../components/SocketIO/SocketHandler";

const useSocket = (roomId) => {
  const [connected, setConnected] = useState(false);
  const messageListenerRef = useRef(null); // To store the active listener reference

  useEffect(() => {
    if (roomId) {
      connectSocket(roomId)
        .then(() => setConnected(true))
        .catch((error) => {
          console.error("Socket connection failed:", error);
          setConnected(false);
        });

      return () => {
        disconnectSocket();
        setConnected(false);
        if (messageListenerRef.current) {
          removeMessageListener(messageListenerRef.current);
          messageListenerRef.current = null;
        }
      };
    }
  }, [roomId]);

  const sendMessageToRoom = (messageData) => {
    if (connected) {
      sendMessage(messageData);
    } else {
      console.error("Socket is not connected.");
    }
  };

  const onMessageReceived = (callback) => {
    if (connected) {
      if (messageListenerRef.current) {
        removeMessageListener(messageListenerRef.current);
      }
      messageListenerRef.current = callback;
      receiveMessage(callback);
    }
  };

  return {
    connected,
    sendMessageToRoom,
    onMessageReceived,
  };
};

export default useSocket;
