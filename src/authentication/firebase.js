import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgPN4RdaDOtVIbJ0NxfzbbBcLh9EO9BUY",
  authDomain: "signup-f934e.firebaseapp.com",
  projectId: "signup-f934e",
  storageBucket: "signup-f934e.appspot.com",
  messagingSenderId: "231569997454",
  appId: "1:231569997454:web:206a6365c0112e07f513df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
}