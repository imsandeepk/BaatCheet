// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPDbIbELgsiEXotWkTbt1utuklamgMf8",
  authDomain: "baat-cheet-377ba.firebaseapp.com",
  projectId: "baat-cheet-377ba",
  storageBucket: "baat-cheet-377ba.appspot.com",
  messagingSenderId: "585324805348",
  appId: "1:585324805348:web:8529a48c8756455be100f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {app}