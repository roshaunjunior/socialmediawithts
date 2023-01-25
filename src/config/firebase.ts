// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9gxz73DkouMgNCphEUUUFmT_Ya0X6REY",
  authDomain: "social-media-ts.firebaseapp.com",
  projectId: "social-media-ts",
  storageBucket: "social-media-ts.appspot.com",
  messagingSenderId: "528296313690",
  appId: "1:528296313690:web:d00cdb6138c6eaf5596963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;
export const provider = new GoogleAuthProvider() ;
export const db = getFirestore(app) ;