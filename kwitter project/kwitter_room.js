
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRJaMaUBQL3LR5QB3TX5nE2_yC8dwCKU",
  authDomain: "kwitter-f57d6.firebaseapp.com",
  projectId: "kwitter-f57d6",
  storageBucket: "kwitter-f57d6.appspot.com",
  messagingSenderId: "161826220724",
  appId: "1:161826220724:web:0ab2282da5d6535ebb45e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
