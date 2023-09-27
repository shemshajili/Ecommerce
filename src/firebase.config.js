import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAeWxmIQaTwpbIK7HjCaanMoWtp1T6hhLg",
  authDomain: "voguevie-99e04.firebaseapp.com",
  projectId: "voguevie-99e04",
  storageBucket: "voguevie-99e04.appspot.com",
  messagingSenderId: "208397965243",
  appId: "1:208397965243:web:59b002be53ac6472f6569e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app