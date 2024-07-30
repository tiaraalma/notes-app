// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoHk2C1PJvHlqcR4PzG0fFXJ3MhI02aBY",
  authDomain: "goran-notes.firebaseapp.com",
  projectId: "goran-notes",
  storageBucket: "goran-notes.appspot.com",
  messagingSenderId: "1048790374912",
  appId: "1:1048790374912:web:7374dd58c2f21b171916e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
