// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZTiYQ3tcrIBJBgMDQul9iJv9moo9tqhA",
  authDomain: "subscription-manager-9f636.firebaseapp.com",
  projectId: "subscription-manager-9f636",
  storageBucket: "subscription-manager-9f636.firebasestorage.app",
  messagingSenderId: "606393770002",
  appId: "1:606393770002:web:6775fb282a2ade3cedf8cb",
  measurementId: "G-12M88BWYNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics }