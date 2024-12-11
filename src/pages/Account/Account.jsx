import React from "react";
import "./Account.css";
import { useUser } from "../../Auth/Context/UserContext";
import Navbar from "../../components/Navbar/Navbar";
const Account = () => {
  const {currentUser,resetPassword,logOut} = useUser();
  console.log('userDetails in accounts', currentUser);
  const handleLogout = () => {
    logOut();
  };

  const handlePasswordChange = () => {
    resetPassword(currentUser.email);
  };

  return (
    <div className="Account page">
    <Navbar></Navbar>
    <div className="account-container">
      <h1>Account Details</h1>
      <div className="account-details">
        <p><strong>Username:</strong> {currentUser.displayName}</p>
        <p><strong>User ID:</strong> {currentUser.uid}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
      </div>

      <div className="account-actions">
        <button className="reset-password" onClick={handlePasswordChange}>Reset Password</button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Account;
