import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "./FirebaseConfig";
  
  const signUp = async (email, password, displayName) => {
    try {
      // Create user using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Update the user's display name in Firebase
      if (displayName) {
        await updateProfile(user, { displayName });
      }

      return user;
    } catch (error) {
      console.error('Error during sign-up:', error.message);
      throw error; // Re-throw error for further handling
    }
  };
  
  
  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error during log in:", error.message);
      throw error; // Re-throw error for further handling
    }
  };
  
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during log out:", error.message);
      throw error; // Re-throw error for further handling
    }
  };
  
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error during password reset:", error.message);
      throw error; // Re-throw error for further handling
    }
  };
  
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      throw error; // Re-throw error for further handling
    }
  };
  
  // Export all functions
  export {
    signUp,
    logIn,
    logOut,
    resetPassword,
    signInWithGoogle,
  };
  