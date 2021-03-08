import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7d3piCYwLXTLM2d7WvXkJSkZwMYc2HNE",
  databaseURL: "https://kanban-adf5f.firebaseio.com",
  authDomain: "kanban-adf5f.firebaseapp.com",
  projectId: "kanban-adf5f",
  storageBucket: "kanban-adf5f.appspot.com",
  messagingSenderId: "864856306077",
  appId: "1:864856306077:web:30982febf9c7ff5ce73f74",
  measurementId: "G-VK8NFN7PNR",
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
