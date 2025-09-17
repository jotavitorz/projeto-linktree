
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAS6fUT1dWdpWkuFXbS5DlH7P0vjx4N3AI",
  authDomain: "reactlinks-45c59.firebaseapp.com",
  projectId: "reactlinks-45c59",
  storageBucket: "reactlinks-45c59.firebasestorage.app",
  messagingSenderId: "942714268317",
  appId: "1:942714268317:web:4172773ad6239315e24274"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
