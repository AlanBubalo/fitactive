import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFuXG-3y14T5Q0J48wjXX7bCOUXCPhlVk",
  authDomain: "fitactive-4f553.firebaseapp.com",
  projectId: "fitactive-4f553",
  storageBucket: "fitactive-4f553.appspot.com",
  messagingSenderId: "552432539270",
  appId: "1:552432539270:web:7a8a3eb4484f7dac35a307",
  measurementId: "G-6Y054FJ5D0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebase };
