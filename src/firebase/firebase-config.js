import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const  firebaseConfig = {
    apiKey: "AIzaSyCysgRkFmmFEb3m76M1zy1ewTINKN5g9bI",
    authDomain: "react-app-cursos-7e1a9.firebaseapp.com",
    projectId: "react-app-cursos-7e1a9",
    storageBucket: "react-app-cursos-7e1a9.appspot.com",
    messagingSenderId: "33505096498",
    appId: "1:33505096498:web:7337b619342d97b49b5d2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {
      db,
      googleAuthProvider,
      firebase
  }