import { createContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyAZg-DaDq-EcgJSKezZbun5ffr3dOdEymw",
  authDomain: "eloom-e079f.firebaseapp.com",
  projectId: "eloom-e079f",
  storageBucket: "eloom-e079f.appspot.com",
  messagingSenderId: "884448076828",
  appId: "1:884448076828:web:ec3204c2ea13b24484ebd9",
  measurementId: "G-XY79G942BV",
};

export const app = initializeApp(firebaseConfig);
