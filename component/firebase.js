import * as firebase from "firebase";
import { fireEvent } from "@testing-library/react";

let firebaseConfig = {
    apiKey: "AIzaSyB4RoCgZ3_Fxt9ztAhI2baLbb4L0FIAqfY",
    authDomain: "react-firebase-99705.firebaseapp.com",
    databaseURL: "https://react-firebase-99705.firebaseio.com",
    projectId: "react-firebase-99705",
    storageBucket: "react-firebase-99705.appspot.com",
    messagingSenderId: "614445616330",
    appId: "1:614445616330:web:58809d1d0add1ae5047833"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database= firebase.database().ref("/shyam");