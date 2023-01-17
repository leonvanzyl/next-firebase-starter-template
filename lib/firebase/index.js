// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbcCTk0x5_Z0Se0bz8vyB-x4ArDrM7xO0",
  authDomain: "sabusinessfinder-88ce7.firebaseapp.com",
  projectId: "sabusinessfinder-88ce7",
  storageBucket: "sabusinessfinder-88ce7.appspot.com",
  messagingSenderId: "191178676740",
  appId: "1:191178676740:web:84c851b0b34c6d81bfb351",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
