
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-8eBu78rG823t-ryxFdpQWZ06vC8t5Ag",
  authDomain: "linktree-55ddf.firebaseapp.com",
  projectId: "linktree-55ddf",
  storageBucket: "linktree-55ddf.firebasestorage.app",
  messagingSenderId: "236977521092",
  appId: "1:236977521092:web:b26f49a72ea019f2ac6491"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
