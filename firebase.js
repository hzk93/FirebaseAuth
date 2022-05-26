// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6xKafNguygjUrq2ODw8ZwuWlJhVzECA",
  authDomain: "fir-auth-333b1.firebaseapp.com",
  projectId: "fir-auth-333b1",
  storageBucket: "fir-auth-333b1.appspot.com",
  messagingSenderId: "240109612173",
  appId: "1:240109612173:web:d905d667d98a14539f46c4"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app
}

const auth = firebase.auth()

export { auth };