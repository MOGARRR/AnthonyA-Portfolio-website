import React from "react";


const Header = () => {
  return (
      <div className=" w-3/5 h-16 flex justify-between items-center bg-gray-100 absolute rounded-full text-3xl text-stone-50 border border-transparent hover:border-gray-950">
        <h1 className="ml-5 ">Anthony Alicea</h1>
        <div className="flex justify-between w-3/5 mr-5">
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Projects</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Contacts</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Education</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Resume</span>
        </div>
        
      </div> 
)
};

export default Header;
