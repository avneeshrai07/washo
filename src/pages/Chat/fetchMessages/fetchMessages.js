import axios from 'axios';
import cookies from 'js-cookie';

const fetchMessages = async (roomId) => {
  const token = cookies.get('token');
  if (!roomId) {
    console.error("Room ID is required to fetch messages.");
    return [];
  }

  if (!token) {
    console.error("Token is required to fetch messages. Login Again");
    return [];
  }

  try {
    console.log("token in the fetch message is ",token);
    console.log(`Fetching messages for roomId: ${roomId}`);
    const response = await axios.get(
      `http://localhost:5000/api/fetchMessages/${roomId}`,
      {
        withCredentials: true,  
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    console.log("Fetched messages:", response.data);
    return response.data; // Return the fetched messages
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return []; // Return an empty array in case of an error
  }
};

export default fetchMessages;
