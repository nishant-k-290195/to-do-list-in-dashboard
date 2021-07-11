import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBUDfuyfI-J52vFMEO__omc2x_vzI7USus",
  authDomain: "to-do-list-c6e14.firebaseapp.com",
  databaseURL: "https://to-do-list-c6e14-default-rtdb.firebaseio.com",
  projectId: "to-do-list-c6e14",
  storageBucket: "to-do-list-c6e14.appspot.com",
  messagingSenderId: "358152894808",
  appId: "1:358152894808:web:20c5439300099457798d2d",
  measurementId: "G-T9D2HTCMKX"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref('users');
