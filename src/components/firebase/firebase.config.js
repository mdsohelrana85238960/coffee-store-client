// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUL0f8rkAS8D6S4ofBdegdGU9uYUuAzeM",
  authDomain: "coffee-store-a978f.firebaseapp.com",
  projectId: "coffee-store-a978f",
  storageBucket: "coffee-store-a978f.appspot.com",
  messagingSenderId: "148878620146",
  appId: "1:148878620146:web:e9a5fa34cb47fb4231a76b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;