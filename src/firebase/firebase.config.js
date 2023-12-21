// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvyM9U3C2NEdolxoSGre_qnUYf0zlNzuQ",
  authDomain: "task-management-client-ce340.firebaseapp.com",
  projectId: "task-management-client-ce340",
  storageBucket: "task-management-client-ce340.appspot.com",
  messagingSenderId: "403063224341",
  appId: "1:403063224341:web:b2dc18d391961d0928761c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);