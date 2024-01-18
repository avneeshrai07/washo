import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';



function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNavLinks(false);
      }
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const HomeButtonClicked = () =>{
    navigate('/washo');
  }
  const CartButtonClicked = () =>{
    navigate('/washo/cart');
  }
  const SigninButtonClicked = () =>{
    navigate('/washo/signin');
  }
  const SignupButtonClicked = () =>{
    navigate('/washo/signup');
  }
  const ContactButtonClicked = () =>{
    navigate('/washo/contact');
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <a href="/washo">WashO:)</a>
      </div>
      <ul className={`nav-links ${showNavLinks ? 'show' : ''}`}>
        <button onClick={HomeButtonClicked}>Home</button>
        <button onClick={CartButtonClicked}>Cart</button>
        <button onClick={SigninButtonClicked}>Signin</button>
        <button onClick={SignupButtonClicked}>Signup</button>
        <button onClick={ContactButtonClicked}>Contact</button>
      </ul>
      <button id="toggleNavButton" onClick={toggleNavLinks}>
      {showNavLinks ? <BiX size={30}/> : <BiMenu size={30} />}
      </button>
    </div>
  );
}

export default Navbar;
