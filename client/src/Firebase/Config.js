import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjwrDiS9ex9hshGbSiQelUCe4VUkEIxzQ",
  authDomain: "mariadda-abd52.firebaseapp.com",
  projectId: "mariadda-abd52",
  storageBucket: "mariadda-abd52.appspot.com",
  messagingSenderId: "466698213952",
  appId: "1:466698213952:web:d81e8aa219953e8a8e5da5",
  measurementId: "G-P4ZFDN912Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
