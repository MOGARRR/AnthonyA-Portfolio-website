import React, { useState } from "react";
import "../styles/Header.css";
import MobileNav from "./MobileNav";

const MobileHeader = () => {
  const [nav, setNav] = useState(false);
  const handleNav = (type) => type ? setNav(false) : setNav(true); 
  return (
    <>
      {!nav && (
        <div className="nav flex justify-between items-center fixed top-0 left-0 w-screen p-3 text-stone-50">
          <h1 className="text-xl ">Anthony Alicea</h1>
          <i onClick={() => handleNav(nav)} class="fa-solid fa-bars fa-2xl p-3"></i>
        </div>
      )}

      {nav && (
          <MobileNav handleNav={handleNav}/>
      )}
    </>
  );
};

export default MobileHeader;
