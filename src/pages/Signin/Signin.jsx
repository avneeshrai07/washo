import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './signin.css';
import { useUser } from '../../Auth/Context/UserContext';
import GetToken from '../../Auth/JWT/GetToken';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {logIn,uid,currentUser} = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email,password);
      const token = await GetToken(currentUser);
      console.log("token: "+token);
      navigate('/washo');
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
              type='email'
              name='email address'
              placeholder='email address'
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(event)=> setPassword(event.target.value)}
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
