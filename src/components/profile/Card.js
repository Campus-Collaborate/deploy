import React from 'react';
import { useState} from 'react';
import Image from './Image';
const Card = ({ title, content, image }) => {
    const [imag, setImag] = useState('./aa.jpg')
  return (
    <div className="relative">
      <Image imag={imag} 
      imagprop="  h-[324px] md:h-[354px] lg:h-56 rounded-xl w-[210px] md:w-[250px] lg:w-[280px] mt-7 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:brightness-[50%]"/>
      
    </div>
  );
};

export default Card;
