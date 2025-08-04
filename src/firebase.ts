import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyADz0RBEjIIbubOvDr5Ghl4awPjkAfYdls",
  authDomain: "adminblog-97f9d.firebaseapp.com",
  projectId: "adminblog-97f9d",
  storageBucket: "adminblog-97f9d.firebasestorage.app",
  messagingSenderId: "895589759436",
  appId: "1:895589759436:web:ce88c88a63e63c6e028569",
  measurementId: "G-MDKRB3VB3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;