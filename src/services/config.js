import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "plantame-9b7c3.firebaseapp.com",
  projectId: "plantame-9b7c3",
  storageBucket: "plantame-9b7c3.appspot.com",
  messagingSenderId: "46416424872",
  appId: "1:46416424872:web:8373cbbcaca5f9567bb79d"
};

const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);