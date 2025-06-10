import React from "react";


const Header = () => {
  return (
    <div className="bg-gradient-to-r from-violet-950 from-20% to-blue-800 to-100% text-stone-50 font-sans p-3 absolute top-0 left-0 w-screen flex justify-between">
      <h1 className=" text-4xl ">Anthony Alicea</h1>
      <div className=" text-2xl flex justify-around items-end w-8/12">
        <span className="hover:text-stone-300 cursor-pointer hover:text-3xl">Projects</span>
        <span className="hover:text-stone-300 cursor-pointer hover:text-3xl">Education</span>
        <span className="hover:text-stone-300 cursor-pointer hover:text-3xl">Contact</span>
        <span className="hover:text-stone-300 cursor-pointer hover:text-3xl">Resume</span>
      </div>
      
    </div>
  )
};

export default Header;
