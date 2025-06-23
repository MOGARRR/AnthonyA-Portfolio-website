import React from "react";

const Contacts = () => {
  return (
    <div>
      <div dir="rtl" className="bg-gray-600 flex flex-col justify-around  w-33 p-2 fixed left-0 top-1/3 rounded-s-lg border-2 border-stone-950 h-2/6">
        <div className="m-2 p-1 rounded-full hover:cursor-pointer hover:text-orange-600 "><i class="fa-brands fa-github fa-2xl"></i></div>
        <div className="m-2 p-1 hover:cursor-pointer hover:text-blue-400"><i class="fa-brands fa-linkedin fa-2xl"></i></div>
        <div className="m-2 p-1 hover:cursor-pointer hover:text-yellow-600"><i class="fa-solid fa-envelope fa-2xl"></i></div>
        <div className="m-2 p-1 hover:cursor-pointer hover:text-green-400"><i class="fa-solid fa-phone fa-2xl"></i></div>
      </div>
    </div>
  )
};

export default Contacts;
