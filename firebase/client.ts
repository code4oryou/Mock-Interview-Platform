// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcxCx7xRyJryYl-5N7om0NjS1c1vXHy-c",
    authDomain: "mocklyai-57921.firebaseapp.com",
    projectId: "mocklyai-57921",
    storageBucket: "mocklyai-57921.firebasestorage.app",
    messagingSenderId: "553392237093",
    appId: "1:553392237093:web:cec17c1edfb128acddadcc",
    measurementId: "G-SP0MKG6G3L"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);