import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { BiMenu, BiX } from "react-icons/bi";
import { useUser } from "../../Auth/Context/UserContext";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const { currentUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNavLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/washo">WashO:)</a>
      </div>
      <ul className={`nav-links ${showNavLinks ? "show" : ""}`}>
        <li>
          <button onClick={() => navigateTo("/washo")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/washo/cart")}>Cart</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/washo/contact")}>Contact</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/washo/order")}>Order</button>
        </li>
        {currentUser ? (
          <>
            <li key="account">
              <button onClick={() => navigateTo("/washo/account")}>
                {currentUser.displayName || "Account"}
              </button>
            </li>
            <li key="chat">
              <button onClick={() => navigateTo("/washo/chat")}>Chat</button>
            </li>
          </>
        ) : (
          <>
            <li key="signin">
              <button onClick={() => navigateTo("/washo/signin")}>Signin</button>
            </li>
            <li key="signup">
              <button onClick={() => navigateTo("/washo/signup")}>Signup</button>
            </li>
          </>
        )}
      </ul>
      <button id="toggleNavButton" onClick={toggleNavLinks}>
        {showNavLinks ? <BiX size={30} /> : <BiMenu size={30} />}
      </button>
    </div>
  );
}

export default Navbar;
