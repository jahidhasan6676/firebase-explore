import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHiHGPallQIq7_8M7zExWsiohxzAQA8fs",
  authDomain: "fir-explore-two.firebaseapp.com",
  projectId: "fir-explore-two",
  storageBucket: "fir-explore-two.firebasestorage.app",
  messagingSenderId: "168913113996",
  appId: "1:168913113996:web:d765b3a793d033a35e3ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;