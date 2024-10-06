// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quitwise-f5754.firebaseapp.com",
  projectId: "quitwise-f5754",
  storageBucket: "quitwise-f5754.appspot.com",
  messagingSenderId: "402803108866",
  appId: "1:402803108866:android:2dbcb7b0d051943c57cb1b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
