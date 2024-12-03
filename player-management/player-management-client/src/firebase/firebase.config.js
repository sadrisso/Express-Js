// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEb9d-G7wdTeM5tHKUWH6noCFZggjLei8",
  authDomain: "player-management-f8777.firebaseapp.com",
  projectId: "player-management-f8777",
  storageBucket: "player-management-f8777.firebasestorage.app",
  messagingSenderId: "314308566149",
  appId: "1:314308566149:web:9094f45586012fb0cd1dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);