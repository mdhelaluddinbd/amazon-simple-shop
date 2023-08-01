// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY5kb8FIG_K1bVaY8JEmHVbqyO6y5cT3k",
  authDomain: "simple-shop-ccceb.firebaseapp.com",
  projectId: "simple-shop-ccceb",
  storageBucket: "simple-shop-ccceb.appspot.com",
  messagingSenderId: "805459114569",
  appId: "1:805459114569:web:2fbb4ece06199a82369d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;