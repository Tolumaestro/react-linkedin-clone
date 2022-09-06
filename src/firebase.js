import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgTiN_WQq4KqJVvOPPVopvYYOZf0BcOak",
  authDomain: "linkedin-clone-214d7.firebaseapp.com",
  projectId: "linkedin-clone-214d7",
  storageBucket: "linkedin-clone-214d7.appspot.com",
  messagingSenderId: "762320567121",
  appId: "1:762320567121:web:f9c63471d6a191ff4cf170",
  measurementId: "G-36855QQ26J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
