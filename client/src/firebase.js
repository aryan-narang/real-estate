// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-84d06.firebaseapp.com",
  projectId: "real-estate-84d06",
  storageBucket: "real-estate-84d06.appspot.com",
  messagingSenderId: "234207442327",
  appId: "1:234207442327:web:c45041bd49db5f9b99c0d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);