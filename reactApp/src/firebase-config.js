import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  
    authDomain: "web-app-dev-2-assign.firebaseapp.com",
  
    projectId: "web-app-dev-2-assign",
  
    storageBucket: "web-app-dev-2-assign.appspot.com",
  
    messagingSenderId: "166710716142",
  
    appId: "1:166710716142:web:cb457affd33f1da25b35ff",
  
    measurementId: "G-Z9L9104Y0F"
  
  };


  // Initialize Firebase

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

  