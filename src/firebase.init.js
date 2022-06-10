// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGq_MnP6phS8l7g4Q1xIcGopCbBWc4rjo",
  authDomain: "genius-car-services-reca-39839.firebaseapp.com",
  projectId: "genius-car-services-reca-39839",
  storageBucket: "genius-car-services-reca-39839.appspot.com",
  messagingSenderId: "851029265632",
  appId: "1:851029265632:web:479e0b7c02a8d81c8ed485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;