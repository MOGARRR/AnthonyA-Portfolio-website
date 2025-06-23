import React from "react";
import '../styles/Header.css'


const Header = () => {
  return (
      <div className="nav flex justify-between items-center fixed top-0 left-0 w-screen h-24 p-1 text-4xl">

        <h1 className="ml-5">Anthony Alicea</h1>
        <div className="flex justify-evenly w-3/5">
        <span className="nav-item border-b-2 border-transparent  hover:cursor-pointer hover:self-start ">About</span>
        <span className="nav-item border-b-2 border-transparent  hover:cursor-pointer hover: ">Projects</span>
        <span className="nav-item border-b-2 border-transparent  hover:cursor-pointer hover: ">Contacts</span>
        <span className="nav-item border-b-2 border-transparent  hover:cursor-pointer hover: ">Resume</span>
        </div>
        
      </div> 
)
};

export default Header;
