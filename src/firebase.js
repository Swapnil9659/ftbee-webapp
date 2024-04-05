// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyARfC4va90y345CtxuG_qLrSpQoIxEnsIs",
  authDomain: "ftbee-ed1ae.firebaseapp.com",
  projectId: "ftbee-ed1ae",
  storageBucket: "ftbee-ed1ae.appspot.com",
  messagingSenderId: "530604524307",
  appId: "1:530604524307:web:866a4320293ab0385090e6"
};

export const app =initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app