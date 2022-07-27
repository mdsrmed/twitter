// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-4b33c.firebaseapp.com",
  projectId: "twitter-clone-4b33c",
  storageBucket: "twitter-clone-4b33c.appspot.com",
  messagingSenderId: "54942839300",
  appId: "1:54942839300:web:3017d32ed643c62d1c3b51"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();
export { app,db,storage };