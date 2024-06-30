// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, EmailAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// .env !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firebaseConfig = {
  apiKey: "AIzaSyCedRXnSN2kGXxjU1tU3LFkbWr2q4HmV2o",
  authDomain: "asianstoreauthtest.firebaseapp.com",
  projectId: "asianstoreauthtest",
  storageBucket: "asianstoreauthtest.appspot.com",
  messagingSenderId: "316512294125",
  appId: "1:316512294125:web:7f2d01975504566dfce8e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const facebook = new FacebookAuthProvider();
export const google = new GoogleAuthProvider();
export const twitter = new TwitterAuthProvider();
export const emailAuth = new EmailAuthProvider();