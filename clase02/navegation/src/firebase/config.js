import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCAE-JoNw0YrOXRAKA_LJIZ0aF46UQDEuo",
  authDomain: "progra3-clase04.firebaseapp.com",
  projectId: "progra3-clase04",
  storageBucket: "progra3-clase04.firebasestorage.app",
  messagingSenderId: "718833980349",
  appId: "1:718833980349:web:7b84cea62fa3bc21b9b8d4"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()