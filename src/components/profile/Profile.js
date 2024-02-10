import React, { useState } from 'react'
import './Profile.css'
import Image from './Image'
import Panel from './Panel'
import Panel2 from './Panel2'
import Edit from './Edit'
const Profile = () => {
    const [tags, setTags] = useState([]);
    const [backimage,setBackimage]=useState("./back.jpg")
    const [profimage,setProfimage]=useState("./profpic.jpg")
    const [panel,setPanel]=useState(true)
    const [texts,setTexts] = useState(["Story","Experience"])
    const [edit,setEdit]=useState(false)
    const [links,setLinks]=useState(["skrsumit250@gmail.com","https://www.linkedin.com/in/piyush-dhar-patel-46a272262/","https://www.instagram.com/benedictcumberbatch_221b/?hl=en"])
    const handleClick = () => {
        setPanel(!(panel));
      };
      
  return (
    <div class="overflow-hidden">

        <div class="top">
            <div class="img1"><Image
            imag={backimage}
            imagprop="relative h-[50vh] w-[100%] "
            /></div>
            <div class="img2"><Image
            imag={profimage}
            imagprop="ml-[3vw] mt-[-6vh] rounded-[200px] z-1"
            /></div>
            
        </div>

        <div class="text">
            <p class=" font-manrope text-4xl font-semibold">Shubhang Shirolawala</p>  
            <p class="font manrope text-2xl"> Web Developer at SWC</p>
            <p class="font manrope text-2xl"> Vadodara,Gujarat</p>
        </div>

        <div class="ml-[29vw] md:ml-[31.3vw] lg:ml-[33.3vw] gap-2 grid grid-cols-3 w-[34vw] text-center ">
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">1000</div>
            <div class="invisible md:visible label">Followers</div>
          
        </div>
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">1000</div>
            <div class="invisible md:visible label">Following</div>
        </div>
        <div class="justify-center p-10 ">
            <div class=" font-bold text-xl ">50</div>
            <p class="invisible md:visible label">Collaborations</p>
        </div>
    </div>
    <button class="btn bg-[#B0BDFF] ml-[33vw] md:ml-[38.5vw] lg:ml-[43.8vw] h-12 w-56 font-semibold rounded-3xl" onClick={()=>{setEdit(true)}}> Edit Your Profile</button>
    {!edit&&<div>
    <div class="ml-[25vw] md:ml-[34vw] lg:ml-[40vw] grid grid-cols-2 w-60 text-center gap-14 ">
    <div class="justify-center p-10 ">
            <button class={`btn font-semibold text-xl p-3 w-24 hover:bg-gray-300 rounded-3xl ${panel ? 'bg-slate-300':'bg-white'}`} onClick={handleClick}>Work</button>
        </div>
        <div class="justify-center p-10 ">
            <button class={`btn font-semibold text-xl p-3 w-24 rounded-3xl hover:bg-slate-300 ${panel ? 'bg-white':'bg-slate-300'} `} onClick={handleClick}>About</button>
        </div>  

    </div>
    
    {panel&&<Panel
    prop="grid ml-[10vw] md:grid-cols-2 lg:grid-cols-4 gap-3 w-[80vw] "
    />}
    {(!panel)&&<Panel2
    links={links}
    texts={texts}
    tags={tags}
    
    />}
    </div>}
    {edit && <Edit
    tags={tags}
    setTags={setTags}
    texts={texts}
    setTexts={setTexts}
    setEdit={setEdit}
    links={links}
    setLinks={setLinks}
    />}
    </div>
    
  )
}

export default Profile
