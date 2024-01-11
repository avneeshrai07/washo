import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    number: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user registration data to the server
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // You can handle the response as needed
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  return (
    <div className='Signup'>
      <Navbar />
      <div className='Signup_card'>
        <div className='Signup_text'>
          <h1>Welcome Back!</h1>
          <h3>Continue your journey with us</h3>
        </div>
        <div className='Signup_form'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              required
              onChange={handleChange}
            />
            <input
              type='number'
              name='number'
              placeholder='Phone number'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleChange}
            />
            <button className='Signup_btn' type='submit'>
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
