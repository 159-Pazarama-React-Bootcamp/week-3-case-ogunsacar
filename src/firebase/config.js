import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyANOBeT8HnrS8J3e2Oh___UbUeKh4PovH8",
    authDomain: "figmaproject-c448c.firebaseapp.com",
    projectId: "figmaproject-c448c",
    storageBucket: "figmaproject-c448c.appspot.com",
    messagingSenderId: "819073156430",
    appId: "1:819073156430:web:77a9938ee8d7a2ad5f4a1f"
  };

//init app
initializeApp(firebaseConfig)

//db

const db = getFirestore()

const auth = getAuth()

export {db, auth}