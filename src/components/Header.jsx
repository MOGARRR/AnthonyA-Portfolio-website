import React from "react";
import '../styles/Header.css'


const Header = () => {
  return (
      <div className="nav flex justify-between items-center fixed top-0 left-0 w-screen h-24 p-1 text-4xl">

      {/* Fun Facts on click???? */}
        <h1 className="ml-5">Anthony Alicea</h1>
        <div className="flex justify-evenly w-3/5">
        <span className="nav-item border-b-2 border-transparent text-stone-800 hover:text-stone-950  hover:cursor-pointer ">About</span>
        <span className="nav-item border-b-2 border-transparent text-stone-800 hover:text-stone-950  hover:cursor-pointer ">Projects</span>
        <span className="nav-item border-b-2 border-transparent text-stone-800 hover:text-stone-950  hover:cursor-pointer ">Contacts</span>
        <span className="nav-item border-b-2 border-transparent text-stone-800 hover:text-stone-950  hover:cursor-pointer "><a href="/public/Anthony Alicea Resume 2025.pdf" target="blank" rel="noopener noreferrer">Resume</a></span>
        </div>
        
      </div> 
)
};

export default Header;
