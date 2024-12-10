import axios from 'axios';

const fetchMessages = async (roomId) => {
  if (!roomId) {
    console.error("Room ID is required to fetch messages.");
    return [];
  }

  try {
    console.log(`Fetching messages for roomId: ${roomId}`);
    const response = await axios.get(`http://localhost:5000/fetchMessages/${roomId}`);
    console.log("Fetched messages:", response.data);
    return response.data; // Return the fetched messages
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return []; // Return an empty array in case of an error
  }
};

export default fetchMessages;
