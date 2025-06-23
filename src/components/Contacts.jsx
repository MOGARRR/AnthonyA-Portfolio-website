import React from "react";
import '../styles/Contacts.css'

const Contacts = () => {
  return (
    <div>
      <div dir="rtl" className="bg-gray-600 flex flex-col justify-around  w-33 p-2 fixed left-0 top-1/3 rounded-s-lg border-2 border-stone-950 h-2/6">
        <div className="m-2 p-1 rounded-full glow-git hover:cursor-pointer"><i class="fa-brands fa-github fa-2xl"></i></div>
        <div className="m-2 p-1 rounded-full glow-linke hover:cursor-pointer"><i class="fa-brands fa-linkedin fa-2xl"></i></div>
        <div className="m-2 p-1 rounded-full glow-email hover:cursor-pointer "><i class="fa-solid fa-envelope fa-2xl"></i></div>
        <div className="m-2 p-1 rounded-full glow-phone hover:cursor-pointer "><i class="fa-solid fa-phone fa-2xl"></i></div>
      </div>
    </div>
  )
};

export default Contacts;
