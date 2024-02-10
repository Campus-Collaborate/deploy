
import './Profile.css'
import Image from './Image'
import Panel from './Panel'
import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import 'firebase/database';
import {auth,db} from "../../firebaseConfig";
import { getDatabase, ref, child, get } from 'firebase/database';
const UserProfile = ({uid}) => {
    const [userName, setUserName] = useState(null);
    const [userEmail,setUserEmail] = useState(null);
    const [backimage,setBackimage]=useState("./back.jpg")
    const [profimage,setProfimage]=useState("./profpic.jpg")

  useEffect(() => {
    // Function to fetch user name based on UID
    const fetchUserName = async () => {
      const db = getDatabase();
      const userRef = ref(db, `users/${uid}/displayName`); // Reference to the user's displayName in the database
      const userRef2 = ref(db, `users/${uid}/email`);
      try {
        const snapshot = await get(userRef);
        const snapshot2 = await get(userRef2);
        if (snapshot.exists()&&snapshot2.exists()) {
          setUserName(snapshot.val());
          setUserEmail(snapshot2.val());
        } else {
          console.log("No such user found");
        }
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchUserName(); // Call the function to fetch user name
  }, [uid]); // useEffect will run whenever the UID changes

  return (
    <>
    <div class="overflow-hidden">

        <div class="top">
            <div class="img1"><Image
            imag={backimage}
            imagprop="relative h-[50vh] w-[100%] "
            /></div>
            <div class="img2"><Image
            imag={profimage}
            imagprop="ml-[2vw] mt-[-3vw] rounded-[200px] z-10"
            /></div>
            
        </div>

        <div class="text">
            <p class=" font-manrope text-4xl font-semibold" >{userName}</p>  
            <p class="font manrope text-2xl">{userEmail}</p>
            {/* <p class="font manrope text-2xl"> Vadodara,Gujarat</p> */}
        </div>

        <div class="ml-[33.3vw] grid grid-cols-3 w-[34vw] text-center ">
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">1000</div>
            <div class="label">Followers</div>
          
        </div>
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">1000</div>
            <div class="label">Following</div>
        </div>
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">50</div>
            <p class="label">Collaborations</p>
        </div>
    </div>
    <button class="btn bg-[#B0BDFF] ml-[42.5vw] h-12 w-56 font-semibold rounded-3xl"> Edit Your Profile</button>
    <div class="ml-[40vw] grid grid-cols-2 w-60 text-center gap-14 ">
    <div class="justify-center p-10 ">
            <button class="btn font-semibold text-xl p-3 w-24 hover:bg-gray-300 rounded-3xl">Work</button>
        </div>
        <div class="justify-center p-10 ">
            <button class="btn font-semibold text-xl p-3 w-24 rounded-3xl hover:bg-slate-300">About</button>
        </div>  

    </div>
    <Panel/>
    </div>
    </>
  )
}

export default UserProfile
