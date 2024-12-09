import { useState, useEffect } from 'react';
import axios from 'axios';
// import {useUser} from '../Auth/Context/UserContext';
const useFetchMessages = (roomId) => {
  const [receivedMessages, setReceivedMessages] = useState([]);
  useEffect(() => {
    if (!roomId) return; // Skip if roomId is not defined

    const fetchMessages = async () => {
      try {
        console.log('Fetching messages for roomId:', roomId);
        const response = await axios.get(`http://localhost:5000/fetchMessages/${roomId}`);
        console.log('Fetched messages:', response);
        setReceivedMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [roomId]); 

  return receivedMessages;
};

export default useFetchMessages;
