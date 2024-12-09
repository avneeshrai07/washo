import cookies from 'js-cookie';
const GetToken = async (currentUser) => {
  // Prepare the payload for the backend
  const userPayload = {
    user_Info: currentUser
  };

  try {
    console.log("GETTOKEN userPayload", userPayload);
    // Send the data to the backend to generate a JWT
    const response = await fetch('http://localhost:5000/TokenGenerate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to the backend.');
    }

    const result = await response.json();
    console.log('Token received from backend:', result.token);
    cookies.set('token', result.token);
    console.log('cookies token',cookies.get('token'));
    return result.token; // Return the token
  } catch (error) {
    console.error('Error in getToken:', error);
    throw error;
  }
};

export default GetToken;
