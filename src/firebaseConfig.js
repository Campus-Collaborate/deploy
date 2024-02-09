import {getAuth,OAuthProvider,signInWithPopup} from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAepdbFSVBos9DaJTPmDJdOCqWHDNMeg50",
  authDomain: "kriti-24.firebaseapp.com",
  databaseURL: "https://kriti-24-default-rtdb.firebaseio.com",
  projectId: "kriti-24",
  storageBucket: "kriti-24.appspot.com",
  messagingSenderId: "41663100538",
  appId: "1:41663100538:web:b25662046196bea9416dc3",
  measurementId: "G-H0FR09LCYQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;