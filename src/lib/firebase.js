// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Dq-i4oiQaRtjfBYtKvk2aS8iMgML-rM",
  authDomain: "react-frontend-hackathon.firebaseapp.com",
  projectId: "react-frontend-hackathon",
  storageBucket: "react-frontend-hackathon.appspot.com",
  messagingSenderId: "757751684160",
  appId: "1:757751684160:web:19681ac8dd1824b49b13a5",
  measurementId: "G-VJBHTETRLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);