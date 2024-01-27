// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-kms.firebaseapp.com",
  projectId: "mern-kms",
  storageBucket: "mern-kms.appspot.com",
  messagingSenderId: "546456542619",
  appId: "1:546456542619:web:0531f0b685497e170d953e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
