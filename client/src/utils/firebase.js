
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:  "ai-interveiw-936bd.firebaseapp.com",
  projectId: "ai-interveiw-936bd",
  storageBucket:  "ai-interveiw-936bd.firebasestorage.app",
  messagingSenderId:  "206407924587",
  appId:"1:206407924587:web:3302f262bbe048ae1eaa2e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}