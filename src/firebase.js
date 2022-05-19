import { initializeApp } from 'firebase/app';
import {getDocs, getFirestore} from 'firebase/firestore';
const firebaseApp=initializeApp({

    apiKey: "AIzaSyBqeQmeu4TyYxzPJE06hFN6xFpmmavFFPA",
  
    authDomain: "fir-alley.firebaseapp.com",
  
    projectId: "fir-alley",
  
    storageBucket: "fir-alley.appspot.com",
  
    messagingSenderId: "359987722714",
  
    appId: "1:359987722714:web:55ff3d4ee972acb71c28e3"
  
  }
  )
const db=getFirestore(firebaseApp);
console.log(db);
export {db}