// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7s3fJC2ArX0CmMXcqYdUxrI5y75itTs",
  authDomain: "drinks-store-34c50.firebaseapp.com",
  projectId: "drinks-store-34c50",
  storageBucket: "drinks-store-34c50.firebasestorage.app",
  messagingSenderId: "155578871667",
  appId: "1:155578871667:web:a0a4d0aa01f729c6f35f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);