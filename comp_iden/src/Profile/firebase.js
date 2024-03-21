import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt6FKWR0OkiMMk5WvDxHz8DdKeVsdF4GM",
  authDomain: "profile-3b7d4.firebaseapp.com",
  projectId: "profile-3b7d4",
  storageBucket: "profile-3b7d4.appspot.com",
  messagingSenderId: "861673798498",
  appId: "1:861673798498:web:428531f72cac1491220a3b",
  measurementId: "G-BZQT8T8ET9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
