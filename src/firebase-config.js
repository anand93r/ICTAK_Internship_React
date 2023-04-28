
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAitt61UHaMywo2Ub1YBR180yd_bCTN2E8",
  authDomain: "ict-course-admin.firebaseapp.com",
  projectId: "ict-course-admin",
  storageBucket: "ict-course-admin.appspot.com",
  messagingSenderId: "1018558817370",
  appId: "1:1018558817370:web:0227cf06bc1e00d1c7e463"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

export default firebase.initializeApp(firebaseConfig)

// Initialize Cloud Storage and get a reference to the service
 export const storage = getStorage(app);


















