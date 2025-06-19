 import React from "react";
 
 const Footer = () => {
   return (
     <div className="flex justify-around border-t-2 p-2 mt-10">
      <div className=" self-center text-xl ">©Anthony Alicea 2025 All Rights Reserved</div>
      <div className="">
        <h1 className="text-2xl">Like What you see?</h1>
        <h1 className="text-xl">Feel free to reach me with any of the contacts below!</h1>
        <div className="flex justify-around ">
        <span className="mt-5 hover:cursor-pointer"><i class="fa-brands fa-github fa-2xl"></i></span>
        <span className="mt-5 hover:cursor-pointer"><i class="fa-brands fa-linkedin fa-2xl"></i></span>
        <span className="mt-5 hover:cursor-pointer"><i class="fa-solid fa-envelope fa-2xl"></i></span>
        <span className="mt-5 hover:cursor-pointer"><i class="fa-solid fa-phone fa-2xl"></i></span>
        </div>
        

      </div>
     </div>
   )
 };
 
 export default Footer;
 