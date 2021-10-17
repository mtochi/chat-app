import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDCfzH9wzYzjNanpsFy0QAH4B2gwDki7so",
    authDomain: "realtime-chat-app-c9ab1.firebaseapp.com",
    projectId: "realtime-chat-app-c9ab1",
    storageBucket: "realtime-chat-app-c9ab1.appspot.com",
    messagingSenderId: "214784393636",
    appId: "1:214784393636:web:8326f362a8157f89e0c131",
    measurementId: "G-8SE5J3FW3Z"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
export {firebase, auth, firestore};
