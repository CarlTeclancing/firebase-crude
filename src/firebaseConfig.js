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
    apiKey: "AIzaSyBm8djMSeaJQrQ1uZDTTVU-8HMN5MF2CmA",
    authDomain: "learning-769c0.firebaseapp.com",
    projectId: "learning-769c0",
    databaseURl: "https://learning-769c0-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "learning-769c0.firebasestorage.app",
    messagingSenderId: "286257368962",
    appId: "1:286257368962:web:b1435307d1acecacfb099b",
    measurementId: "G-JGVKP3RC47"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app)