import React from 'react'
import { useState } from 'react';
import Image from './Image';
const Edit = ({ texts, setTexts, setEdit, tags, setTags ,links ,setLinks}) => {
    const [newtext1, setNewtext1] = useState(texts[0])
    const [newtext2, setNewtext2] = useState(texts[1])
    const [newtext3, setNewtext3] = useState("")
    const [newtext4, setNewtext4] = useState("")
    const [newtext5, setNewtext5] = useState("")

    const [tagInput, setTagInput] = useState('');

    const handleInputChange3 = (event) => {
        setTagInput(event.target.value);
    };

    const handleAddTag = () => {
        if (tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };
    const handleInputChange1 = (event) => {
        const newQuery = event.target.value;
        setNewtext1(newQuery);
    };
    const handleInputChange2 = (event) => {
        const newQuery = event.target.value;
        setNewtext2(newQuery);
    };
    const handleInputChange4 = (event) => {
        const newQuery = event.target.value;
        setNewtext3(newQuery)
        
    };
    const handleInputChange5 = (event) => {
        const newQuery = event.target.value;
        setNewtext4(newQuery)
        
    };
    const handleInputChange6 = (event) => {
        const newQuery = event.target.value;
        setNewtext5(newQuery)
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTexts([newtext1, newtext2]);
        setEdit(false)
        const arn=[links[0],links[1],links[2]]
        var i=0;
        const ar=[newtext3,newtext4,newtext5];
        ar.forEach(element => {
            if(element!=''){
            arn[i]=element;
            i++;}
        
            
        });
        setLinks(arn);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div class="grid  grid-cols-3 grid-rows-2 gap-4 w-[70vw] ml-[15vw] mt-14">
                <div className="col-span-1 row-span-2 bg-[#C3A2FF] bg-opacity-25 p-7 rounded-3xl ">
                    <h1 className="text-4xl font-bold mb-4 ">Story</h1>

                    <input
                        value={newtext1}
                        onChange={handleInputChange1}
                        type="text" class=" text-top bg-opacity-0 bg-[#C3A2FF] "></input>
                </div>
                <div className="col-span-1 row-span-1 h-60 bg-[#C3A2FF] bg-opacity-25 p-7 rounded-3xl ">
                    <h1 className="text-4xl font-bold  mb-4 ">Experiences</h1>
                    <input
                        value={newtext2}
                        onChange={handleInputChange2}
                        type="text" class="text-base bg-opacity-0 bg-[#C3A2FF]  "></input></div>
                <div className="flex flex-wrap gap-2 bg-[#C3A2FF] bg-opacity-25 rounded-3xl pt-7 pl-4 pr-4 pb-4">
                    <h1 className="text-4xl font-bold mr-48 ">Skills</h1>
                    {tags.map((tag, index) => (
                        <div className="bg-blue-500 rounded-full h-9">
                            <div key={index} className=" text-white text-sm px-2 py-1 ">
                                {tag}
                                <button type="button" onClick={() => handleRemoveTag(tag)} className=" ml-1">x</button>
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-2 mt-auto">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={handleInputChange3}
                            placeholder="Enter a tag"
                            className="border bg-[#C3A2FF] bg-opacity-25 px-2 py-1 h-12 rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <button type="button" onClick={handleAddTag} className="bg-blue-500 h-12  text-white px-2 py-1 rounded-3xl">Add Tag</button>
                    </div>
                </div>
                <div class="col-span-1 row-span-1 bg-[#C3A2FF] bg-opacity-25 h-60 p-7 rounded-3xl">
  <div className="flex mt-5">
  <Image
  imag={"./logos_google-gmail.svg"}
  />
                        <input
                            type="text"
                            value={newtext3}
                            onChange={handleInputChange4}
                            placeholder={links[0]? links[0]:"Enter Your Gmail"}
                            className="bg-opacity-0 bg-[#C3A2FF] ml-3 px-2 py-1 h-10 focus:outline-none focus:none"
                        />
</div>
<div className="flex mt-6">
<Image
  imag={"./Vector (2).svg"}
  />
  <input
                            type="text"
                            value={newtext4}
                            onChange={handleInputChange5}
                            placeholder={links[1]? links[1]:"Enter Linkedin"}
                            className="bg-opacity-0 bg-[#C3A2FF] ml-3 px-2 py-1 h-10 focus:outline-none focus:none"
                        />
</div>
<div className="flex mt-6">
<Image
  imag={"./wpf_behance (1).svg"}
  /> 
  <input
                            type="text"
                            value={newtext5}
                            onChange={handleInputChange6}
                            placeholder={links[2]? links[2]:"Enter Your Instagram"}
                            className="bg-opacity-0 bg-[#C3A2FF] ml-3 px-2 py-1 h-10 focus:outline-none focus:none"
                        />
</div>
  
  
</div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-[78vw] mt-[-5vw] mb-[5vw] rounded-3xl">Submit</button>
        </form>
    )
}

export default Edit
