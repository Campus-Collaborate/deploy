import React from 'react'
import Image from './Image'
const Panel2 = ({texts,links,tags,}) => {
    const handlelinkClick = (link) => {
        if(link) {window.open(link, '_blank')};
      };  
    
  return (
    <div>
      <div class="grid grid-cols-3 grid-rows-2 gap-4 w-[70vw] ml-[15vw]">
  <div class="col-span-1 row-span-2 bg-[#C3A2FF] bg-opacity-25 p-7 rounded-3xl ">
    <h1 className="text-4xl font-semibold mb-4">Story</h1>
    {texts[0]}</div>
  <div class="col-span-1 row-span-1 bg-[#C3A2FF] bg-opacity-25 h-60 p-7 rounded-3xl">
  <h1 className="text-4xl font-semibold mb-4">Experiences</h1>
    {texts[1]}</div>
  <div className="flex flex-wrap gap-2 bg-[#C3A2FF] bg-opacity-25 rounded-3xl p-4 ">
  <h1 className="text-4xl mt-4 font-semibold mr-56 mb-0">Skills</h1>
      {tags.map((tag, index) => (
        <div className="bg-blue-500 rounded-full h-9">
        <div key={index} className=" text-white text-sm px-2 py-1 ">
          {tag}
        </div>
        </div>
      ))}</div>
  <div class="col-span-1 row-span-1 bg-[#C3A2FF] bg-opacity-25 h-60 p-7 rounded-3xl">
  <div className="flex mt-5 cursor-pointer"onClick={() => {if(links[0]){handlelinkClick("mailto:"+links[0])}}}>
  <Image
  imag={"./logos_google-gmail.svg"}
  />
  <h1 className="text-xl font-semibold ml-4">Gmail</h1>
</div>
<div className="flex mt-6 cursor-pointer" onClick={() => {if(links[1]){handlelinkClick(links[1])}}} >
<Image
  imag={"./Vector (2).svg"}
  />
  <h1 className="text-xl font-semibold ml-4">Linkedin</h1>
</div>
<div className="flex mt-6 cursor-pointer" onClick={() => {if(links[2]){handlelinkClick(links[2])}}}>
<Image
  imag={"./teenyicons_instagram-outline.svg" }
  /> 
  <h1 className="text-xl font-semibold ml-4">Instagram</h1>
</div>
  </div>
  
</div>
    </div>
  )
}

export default Panel2
