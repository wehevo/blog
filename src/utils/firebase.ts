import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfPsphcGBBGmkNdUiJjMC3Suiy7kZqn2U",
  authDomain: "blog-45246.firebaseapp.com",
  projectId: "blog-45246",
  storageBucket: "blog-45246.appspot.com",
  messagingSenderId: "400560621366",
  appId: "1:400560621366:web:15e7c7ee9db37572225597",
  measurementId: "G-ZR7KZJETL7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };