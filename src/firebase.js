// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Au6cFEvotfL38SviwFNVDR01BtuD4FA",
  authDomain: "sorforaj-portfolio123.firebaseapp.com",
  projectId: "sorforaj-portfolio123",
  storageBucket: "sorforaj-portfolio123.appspot.com",
  messagingSenderId: "227720889283",
  appId: "1:227720889283:web:ee68e5d00ddc820b2ef376",
  measurementId: "G-8Q66QP9BC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);