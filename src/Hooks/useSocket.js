import { useState, useEffect } from "react";
import { connectSocket, disconnectSocket, sendMessage, receiveMessage } from "../components/SocketIO/SocketHandler";
import { useUser } from "../Auth/Context/UserContext";
const useSocket = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  // const {currentUser} = useUser();
  // const roomId = currentUser.uid;

  useEffect(() => {
    if (roomId) {
      connectSocket(roomId)
        .then((socketInstance) => {
          setConnected(true);
        })
        .catch((error) => {
          console.error("Socket connection failed:", error);
          setConnected(false);
        });

      return () => {
        disconnectSocket();
        setConnected(false);
      };
    }
  }, [roomId]);

  const sendMessageToRoom = (messageData) => {
    if (connected) {
      sendMessage(messageData);
    }
  };

  const onMessageReceived = (callback) => {
    if (connected) {
      receiveMessage(callback);  // Pass callback to handle incoming messages
    }
  };

  return {
    messages,
    connected,
    sendMessageToRoom,
    onMessageReceived,
  };
};

export default useSocket;
