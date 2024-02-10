import React from "react";
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebaseConfig";
import { OAuthProvider, signInWithPopup } from "firebase/auth";
import './Login.css';
import SiteLogo from './images/websiteLogo.png';
import OutlookIcon from './images/outlookIcon.png';
import UserProfile from '../components/profile/Profile.js';

const Login = () => {
  const [user, setUser] = useState(null);
  const [email,setEmail]= useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const handleclick = async (e) => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: "consent",
      tenant: "850aa78d-94e1-4bc6-9cf3-8c11b530701c",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Microsoft Access Token. You can use it to access the Microsoft API.
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // The signed-in user info.
        setUser(result.user);
        setEmail(result.email);
        // Now that we have the user's information, let's store it in the Realtime Database
        const db = getDatabase();
        const usersRef = ref(db, 'users/' + user.uid); // Use the user's UID as the key for their data
        set(usersRef, {
          displayName: user.displayName,
          email: user.email,
          // Add any more user details you want to store
        })
        .then(() => {
          console.log("User information saved to database");
          console.log(user);
          setShowProfile(true);
        })
        .catch((error) => {
          console.error("Could not save user information to database", error);
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = OAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  }
  return (
    <>
    {user && <UserProfile uid={user.uid} />}
    <div style={{ position: "absolute", width: "100%",  display:user ? "none" : "flex"}}> 
      <div className="img">
        <img className="cc" src={SiteLogo} alt="cc Logo" />
      </div>
      <div className="wrapper">
        <h1>Create Account</h1>
        <div className="outlookLogin">
          <div className="outlook flex" style={{border: "0.25vh solid rgb(205, 201, 201)", padding: "1.5%", margin: "1vw"}}>
          <img className="Outlook-logo" src={OutlookIcon} alt="Outlook Logo" />
            <span className="Outlook-title" onClick={handleclick}>Continue with Outlook</span>
            </div>
          <div className="or">-OR-</div>
        </div>
        <form action="">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required></input>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email Address" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>

          <button type="submit">Create Account</button>

          <div className="login-link">
            <p>
              Already have an account ? <a href="#">Login</a>
            </p>
          </div>
        </form>

      </div>
    </div>
    </>
  );
};

export default Login;