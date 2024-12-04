
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1pw3skcddplHfG2CjDmoxy47oX0MvaFE",
  authDomain: "washo-avneesh.firebaseapp.com",
  projectId: "washo-avneesh",
  storageBucket: "washo-avneesh.firebasestorage.app",
  messagingSenderId: "723408205026",
  appId: "1:723408205026:web:3bd664d75526cb458f5abb",
  measurementId: "G-SPQ8TR4HL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};