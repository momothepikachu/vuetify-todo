import firebase from "firebase/app";
import "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTg3itpnNWBimzE9aU27qBqKfrOZoNHCU",
  authDomain: "equation-ae448.firebaseapp.com",
  databaseURL: "https://equation-ae448.firebaseio.com",
  projectId: "equation-ae448",
  storageBucket: "equation-ae448.appspot.com",
  messagingSenderId: "668395629814",
  appId: "1:668395629814:web:0ef3d276e76b9426"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
