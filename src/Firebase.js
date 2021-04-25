import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyCnU-0ZeB-tYmOqP1sRQXu89Glft-fPUbI",
    authDomain: "keep-8e910.firebaseapp.com",
    projectId: "keep-8e910",
    storageBucket: "keep-8e910.appspot.com",
    messagingSenderId: "1040381652881",
    appId: "1:1040381652881:web:3fb545a09bfc43c6e7f430",
    measurementId: "G-9RRPB1LPYT"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();