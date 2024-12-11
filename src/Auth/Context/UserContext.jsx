import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import {
  signUp,
  logIn,
  logOut,
  resetPassword,
  signInWithGoogle,
} from "../Firebase/FirebaseFunctions";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("Auth state is changed");
      if (user) {
        setUid(user.uid); // Set UID when the user is logged in
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);



  const value = {
    uid,
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    signInWithGoogle,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
