import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
console.log("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDFuXG-3y14T5Q0J48wjXX7bCOUXCPhlVk",
  authDomain: "fitactive-4f553.firebaseapp.com",
  projectId: "fitactive-4f553",
  storageBucket: "fitactive-4f553.appspot.com",
  messagingSenderId: "552432539270",
  appId: "1:552432539270:web:7a8a3eb4484f7dac35a307",
  measurementId: "G-6Y054FJ5D0",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };
