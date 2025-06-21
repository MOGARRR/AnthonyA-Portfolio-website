import React from "react";


const Header = () => {
  return (
      <div className=" w-2/3 h-16 flex justify-between items-center bg-gray-100 fixed top-4 left-80 rounded-full text-3xl text-stone-50 border border-transparent hover:border-gray-950">
        <h1 className="ml-5 ">Anthony Alicea</h1>
        <div className="flex justify-around w-3/5 mr-5">
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">About</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Projects</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Contacts</span>
        <span className="border-b-2 border-transparent hover:border-gray-950 hover:cursor-pointer ">Resume</span>
        </div>
        
      </div> 
)
};

export default Header;
