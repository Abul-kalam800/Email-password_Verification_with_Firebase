 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1fUxl7mAbIjrMY925qQzi9dFExx-StA",
  authDomain: "explore-email-password-a-a0932.firebaseapp.com",
  projectId: "explore-email-password-a-a0932",
  storageBucket: "explore-email-password-a-a0932.firebasestorage.app",
  messagingSenderId: "923010343721",
  appId: "1:923010343721:web:c28d053a4f18edc8cecd38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
