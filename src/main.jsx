import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkI6MLVZfMmqG7L_UWFucrYZ2vY2xAqTs",
  authDomain: "weorder-3eabb.firebaseapp.com",
  projectId: "weorder-3eabb",
  storageBucket: "weorder-3eabb.appspot.com",
  messagingSenderId: "892062719895",
  appId: "1:892062719895:web:d2cedc3bf72005fef66ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(`Firebase initialized ${app}`, app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

