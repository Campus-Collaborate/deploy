import React from 'react';
import { useState} from 'react';
import Image from './Image';
const Card = ({ title, content, image }) => {
    const [imag, setImag] = useState('./aa.jpg')
    const [isDropdownActive, setIsDropdownActive] = useState(false);
        const handleMouseEnter = () => {
          setIsDropdownActive(true);
        };
        const handleMouseLeave = () => {
          setIsDropdownActive(false);
        };
  return (
    <div className="relative">
      <Image imag={imag} 
      imagprop={`ml-[25vw] md:ml-[10vw] lg:ml-[2vw] h-42 md:h-48 lg:h-56 rounded-xl w-[210px] md:w-[250px] lg:w-[280px] mt-7 transition-transform duration-300 ease-in-out transform ${isDropdownActive ? 'scale-105 shadow-md brightness-[50%]':''}`}/>
       <div class="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <p class="text-white text-2xl font-bold ml-[3.5rem]">Project 1</p>
    
  </div>
    </div>
  );
};

export default Card;
