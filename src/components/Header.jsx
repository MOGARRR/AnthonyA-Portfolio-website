import React from "react";


const Header = () => {
  return (
      <div className=" text-3xl flex justify-evenly w-full bg-pink-100 ">
        <span className="bg-gradient-to-tl from-violet-900 from-20% to-blue-800 to-100% ml-40  content-center rounded-full size-44 mt-5 hover:text-stone-300 cursor-pointer hover:text-4xl hover:size-48">Projects</span>
        <span className="bg-gradient-to-tl from-violet-900 from-20% to-blue-800 to-100% mt-32 content-center rounded-full size-36 mt-5 hover:text-stone-300 cursor-pointer hover:text-4xl hover:size-48">Contacts</span>
        <span className="bg-gradient-to-tl from-violet-900 from-20% to-blue-800 to-100% mt-10 content-center rounded-full size-40 hover:text-stone-300 cursor-pointer hover:text-4xl hover:size-48">Education</span>
        <span className="bg-gradient-to-tl from-violet-900 from-20% to-blue-800 to-100% mt-36 content-center rounded-full size-36 mt-5 hover:text-stone-300 cursor-pointer hover:text-4xl hover:size-48">Resume</span>
      </div> 
)
};

export default Header;
