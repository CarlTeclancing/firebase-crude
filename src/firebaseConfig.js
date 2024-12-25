// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref,set, push } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtFfRV6oOU8RJH6AqgIBtxF2vkXkYpzJE",
  authDomain: "authentication-36d13.firebaseapp.com",
  projectId: "authentication-36d13",
  databaseURl: "https://authentication-36d13-default-rtdb.firebaseio.com",
  storageBucket: "authentication-36d13.firebasestorage.app",
  messagingSenderId: "285847604697",
  appId: "1:285847604697:web:717aa893d1705cfdb81dc8",
  measurementId: "G-RGWJYP05F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app)