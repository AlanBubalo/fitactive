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

db.collection("workout")
  .doc("Full Body")
  .set({
    beginner: {
      warm_up: ["Squats", "Sit-Ups", "Push-Ups", "Pull-Ups", "Plank"],
      exercises: {
        legStretch: {
          name: "Leg Stretch",
          duration: 30,
        },
        jumpingJacks: {
          name: "Jumping Jacks",
          duration: 30,
        },
        JumpingJacks: 30,
        Mill: 30,
        Jogging: 30,
      },
    },
    intermediate: {
      warm_up: ["HipCircles", "ArmCircles", "JumpRope", "Walk-Outs", "Squats"],
      exercises: {
        legStretch: {
          name: "Leg Stretch",
          duration: 30,
        },
        jumping_jacks: 30,
        mill: 30,
        jogging: 30,
      },
    },
    advanced: {
      warm_up: ["Squats", "Sit-Ups", "Push-Ups", "Pull-Ups", "Plank"],
      exercises: {
        leg_stretch: 30,
        jumping_jacks: 30,
        mill: 30,
        jogging: 30,
      },
    },
  })
  .then((doc) => {
    console.log("Full workout done.");
  })
  .catch((error) => {
    console.error(error);
  });

export { firebase, db };
