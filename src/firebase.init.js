// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAjomQYR1MaqbGrF0wilJWU-1sZhFo-hr8",
  authDomain: "awesome-photography-e3387.firebaseapp.com",
  projectId: "awesome-photography-e3387",
  storageBucket: "awesome-photography-e3387.appspot.com",
  messagingSenderId: "749562907101",
  appId: "1:749562907101:web:413e8b8f968fade5e04e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;