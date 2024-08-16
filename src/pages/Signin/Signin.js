import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user login data to the server
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // You can handle the response as needed, e.g., store the token in local storage
        navigate('/washo');
      } else {
        console.error('Failed to login');
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='Signin'>
      <Navbar />
      <div className='Signin_card'>
        <div className='Signin_text'>
          <h1>Welcome Back!</h1>
          <h3>Continue your journey with us</h3>
        </div>
        <div className='Signin_form'>
          <form onSubmit={handleSubmit}>
            <input
              type='number'
              name='phoneNumber'
              placeholder='Phone number'
              onChange={handleChange}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              required
            />
            <button className='Signin_btn' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
