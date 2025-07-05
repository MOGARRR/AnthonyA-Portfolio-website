import React from "react";

const HeaderBar = () => {
  return (
    <div>
        <div>
          <div
            dir="ltr"
            className="side-bar flex flex-col justify-around  w-33 p-2 fixed right-0 top-1/3 rounded-s-lg border-2 border-stone-500 h-2/6 text-xl "
          >
            <div className="nav-item m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
              <i class="">About</i>
            </div>
            <div className="nav-item m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
              <i class="">Skills</i>
            </div>
            <div className="nav-item m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
              <i class="">
                Contact <br />
                Me
              </i>
            </div>
            <div className="nav-item m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
              <i class="">Projects</i>
            </div>
            <div className="nav-item m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
              <i class=""><a
              href="/public/Anthony Alicea Resume 2025.pdf"
              target="blank"
              rel="noopener noreferrer"
            >
              Resume
            </a></i>
            </div>
          </div>
        </div>
      </div>
  )
};

export default HeaderBar;
