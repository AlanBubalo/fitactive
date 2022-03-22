import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
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
/*
// FULL BODY
db.collection("workout")
  .doc("FullBody")
  .set({
    beginner: ["Sit-Ups", "Push-Ups", "Plank"],
    intermediate: [
      "Sphinx stretch",
      "Sit-Ups",
      "Push-Ups",
      "Plank",
      "Walk-Outs",
    ],
    advanced: [
      "Sphinx stretch",
      "Sit-Ups",
      "Push-Ups",
      "Plank",
      "Walk-Outs",
      "Squat Thrust",
      "Chest-to-floor Burpee",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

// ABS
db.collection("workout")
  .doc("Abs")
  .set({
    beginner: ["Sit-Ups", "Mountain Climbers", "Plank"],
    intermediate: [
      "Sit-Ups",
      "Mountain Climbers",
      "Plank",
      "Criss Cross Crunchers",
      "Scissor Skier",
    ],
    advanced: [
      "Sit-Ups",
      "Mountain Climbers",
      "Plank",
      "Criss Cross Crunchers",
      "Scissor Skier",
      "Bird-dog",
      "Flutter Kicks",
      "Walking Plank",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

// ARMS
db.collection("workout")
  .doc("Arms")
  .set({
    beginner: ["Push-Ups", "Plank", "Triceps Dip"],
    intermediate: [
      "Push-Ups",
      "Plank",
      "Triceps Dip",
      "Arm Circles",
      "Concentration Curl",
    ],
    advanced: [
      "Push-Ups",
      "Plank",
      "Triceps Dip",
      "Arm Circles",
      "Concentration Curl",
      "Handstand Press-Up",
      "Biceps Curls",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

//CHEST
db.collection("workout")
  .doc("Chest")
  .set({
    beginner: ["Press-Ups", "Push-Ups", "Plank"],
    intermediate: [
      "Press-Ups",
      "Push-Ups",
      "Plank",
      "Diamond Push-Ups",
      "Svend Press",
    ],
    advanced: [
      "Press-Ups",
      "Push-Ups",
      "Plank",
      "Diamond Push-Ups",
      "Svend Press",
      "Push-Ups in a Circle",
      "Clap Press-Up",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

//LEGS
db.collection("workout")
  .doc("Legs")
  .set({
    beginner: ["Squats", "Glute Bridge", "Calf Raise"],
    intermediate: [
      "Squats",
      "Glute Bridge",
      "Calf Raise",
      "Jumping Jack",
      "Split Squat",
    ],
    advanced: [
      "Squats",
      "Glute Bridge",
      "Calf Raise",
      "Jumping Jack",
      "Split Squat",
      "Romanian Deadlift",
      "Box Jump",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

// BACK
db.collection("workout")
  .doc("Back")
  .set({
    beginner: ["Plank", "Bird-dog", "Superman"],
    intermediate: [
      "Plank",
      "Bird-dog",
      "Superman",
      "Toe Touch",
      "Dolphin Kick",
    ],
    advanced: [
      "Plank",
      "Bird-dog",
      "Superman",
      "Toe Touch",
      "Dolphin Kick",
      "Single Arm Dumbbell Rows",
      "Renegade Row",
    ],
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });
*/
export { firebase, db };
