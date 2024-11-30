// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIDmHM-CPJ_zY7A7n3_SbJs_eQJllSTCQ",
  authDomain: "student-management-9e79b.firebaseapp.com",
  projectId: "student-management-9e79b",
  storageBucket: "student-management-9e79b.firebasestorage.app",
  messagingSenderId: "615836112253",
  appId: "1:615836112253:web:a9d5200ad7069a0987e814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);