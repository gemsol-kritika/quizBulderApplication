// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsccx5FMaDqb6JzGQGgKy7EctGHPL4QaU",
  authDomain: "quizapp-371a2.firebaseapp.com",
  projectId: "quizapp-371a2",
  storageBucket: "quizapp-371a2.appspot.com",
  messagingSenderId: "438370257931",
  appId: "1:438370257931:web:8a1d444842ea8150178b0e",
  measurementId: "G-2XYYTPBD3J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
