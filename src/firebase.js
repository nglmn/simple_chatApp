// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaWNYX_IXkgmqVOzgig3AcgO1g8fVujWI",
    authDomain: "chat-app-3f7a2.firebaseapp.com",
    projectId: "chat-app-3f7a2",
    storageBucket: "chat-app-3f7a2.appspot.com",
    messagingSenderId: "584696488272",
    appId: "1:584696488272:web:c2395b957e716e9b48cc55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);