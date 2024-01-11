import React, { useState, useEffect } from 'react';
import './navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';



function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNavLinks(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };


  return (
    <div className='navbar'>
      <div className="logo">
        <a href="/washo">WashO:)</a>
      </div>
      <ul className={`nav-links ${showNavLinks ? 'show' : ''}`}>
        <li><a href="/washo">Home</a></li>
        <li><a href="/washo/cart">Cart</a></li>
        <li><a href="/washo/signin">Signin</a></li>
        <li><a href="/washo/signup">Signup</a></li>
        <li><a href="/washo/contact">Contact</a></li>
      </ul>
      <button id="toggleNavButton" onClick={toggleNavLinks}>
      {showNavLinks ? <BiX size={30}/> : <BiMenu size={30} />}
      </button>
    </div>
  );
}

export default Navbar;
