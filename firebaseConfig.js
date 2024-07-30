import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOYKRnw0K6HTD-_coxmxypsPp9X7l_g3s",
  authDomain: "notesapps-3c2db.firebaseapp.com",
  projectId: "notesapps-3c2db",
  storageBucket: "notesapps-3c2db.appspot.com",
  messagingSenderId: "209891331726",
  appId: "1:209891331726:web:0a35bbef5ff337c51e03df"
};

const app = initializeApp(firebaseConfig);

export default app;