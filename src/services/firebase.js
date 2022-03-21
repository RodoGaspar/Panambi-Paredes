// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChlA7gqtmRvAhnEF2MKZVAAXUGGBGLbLg",
  authDomain: "panambi-ecommerce.firebaseapp.com",
  projectId: "panambi-ecommerce",
  storageBucket: "panambi-ecommerce.appspot.com",
  messagingSenderId: "347619887305",
  appId: "1:347619887305:web:1a6c5bbf41e08ac61ee518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);