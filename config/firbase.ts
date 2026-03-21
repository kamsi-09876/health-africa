// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQAbkbODEaP5XwKI9pQWcwrj1RF2g28tk",
  authDomain: "health-africa-715af.firebaseapp.com",
  projectId: "health-africa-715af",
  storageBucket: "health-africa-715af.firebasestorage.app",
  messagingSenderId: "957440473980",
  appId: "1:957440473980:web:3ca02b1b9e63a8c0c982f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db } 
