// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc38NmIL6lUbdlmAMsjKdemk1pU-Km5is",
  authDomain: "householdtypescript-56a2b.firebaseapp.com",
  projectId: "householdtypescript-56a2b",
  storageBucket: "householdtypescript-56a2b.firebasestorage.app",
  messagingSenderId: "458247626236",
  appId: "1:458247626236:web:059447f8703ac9e20f2679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };