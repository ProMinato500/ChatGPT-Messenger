// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuGYOeHC_BKCdZIKowRYjHuO57C0Y5CS8",
  authDomain: "chatgpt-messenger-69292.firebaseapp.com",
  projectId: "chatgpt-messenger-69292",
  storageBucket: "chatgpt-messenger-69292.appspot.com",
  messagingSenderId: "591443918044",
  appId: "1:591443918044:web:559689c8975921ede08819",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
