import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAENIahNBcARUw2vkEDUiGPtbAfsptifl8",
  authDomain: "nextfire-f2c25.firebaseapp.com",
  projectId: "nextfire-f2c25",
  storageBucket: "nextfire-f2c25.appspot.com",
  messagingSenderId: "42580601842",
  appId: "1:42580601842:web:c57749b96faf775b11996b",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firestore.storage();
