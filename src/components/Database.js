import firebase from 'firebase';
require("firebase/firestore");

const conf = {
    apiKey: "AIzaSyC0EcNFCIfy_R7sZQoAqvzdjyV-WMWf_QA",
    authDomain: "noreply@nomeworkz1.firebaseapp.com",
    databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
    projectId: "nomeworkz1",
    storageBucket: "fun-food-friends-eeec7.appspot.com",
    messagingSenderId: "609449515870"
}; 

firebase.initializeApp(conf);

var db = firebase.firestore();



export default db;