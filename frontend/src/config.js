import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTODOMAIN,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId

// apiKey: "AIzaSyA0X0z7XRpudUzXs-sWs9lXDXiC3rFMoyo",
// authDomain: "my-oauth-7206a.firebaseapp.com",
// projectId: "my-oauth-7206a",
// storageBucket: "my-oauth-7206a.appspot.com",
// messagingSenderId: "184859256249",
// appId: "1:184859256249:web:a405f33ac55cbade2dc268",
// measurementId: "G-6KY7X0KCWE"
};

// console.log(process.env.REACT_APP_API)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


