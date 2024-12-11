import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './signup.css';
import { useUser } from '../../Auth/Context/UserContext';
import GetToken from '../../Auth/JWT/GetToken';

const Signup = (event) => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const { signUp } = useUser();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if(password === confirmPassword){
      await signUp(email, password, username);
      const token = await GetToken(useUser);
      console.log("token: ",token);
      navigate('/washo');
      }
      else{
        console.log("Password did not match");
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
          <h1>Welcome :)</h1>
          <h3>Continue your journey with us</h3>
        </div>
        <div className='Signup_form'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              required
              onChange={(event) => {setUsername(event.target.value)}}
            />
            <input
              type='email'
              name='email'
              placeholder='email address'
              onChange = {(event) => {setEmail(event.target.value)}}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange = {(event) => {setPassword(event.target.value)}}
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange = {(event) => {setConfirmPassword(event.target.value)}}
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
