import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVUN1dt53yWrqIhI-ocKStZ0TtejI9pUM",
  authDomain: "fb-clone-4ab52.firebaseapp.com",
  projectId: "fb-clone-4ab52",
  storageBucket: "fb-clone-4ab52.appspot.com",
  messagingSenderId: "298078032318",
  appId: "1:298078032318:web:ac3858a8a1d73337cb69ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);