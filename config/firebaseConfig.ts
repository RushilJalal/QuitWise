import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdG5XXwXOYLQ76c_oDEBFpooY2n7f0cC4",
  authDomain: "quitwise-f5754.firebaseapp.com",
  projectId: "quitwise-f5754",
  storageBucket: "quitwise-f5754.appspot.com",
  messagingSenderId: "402803108866",
  appId: "1:402803108866:web:eae668efe094748957cb1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
