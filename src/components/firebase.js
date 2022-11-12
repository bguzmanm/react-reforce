import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

initializeApp({
  apiKey: "AIzaSyBtC_dJXsezy11YSFBTGP4DKgVRfV8J8uE",
  authDomain: "mensajes-b60f1.firebaseapp.com",
  projectId: "mensajes-b60f1",
  storageBucket: "mensajes-b60f1.appspot.com",
  messagingSenderId: "955125387226",
  appId: "1:955125387226:web:d0d360a33ffa3bd3a07ae3"
});

export const db = getFirestore();