import React from "react";
import "../styles/Contacts.css";

const Contacts = () => {
  const handleCopyToBoard = (type) =>
    type === "email"
      ? navigator.clipboard.writeText("alicea.9a@gmail.com") &&
        alert("Copied Email to Clipboard")
      : navigator.clipboard.writeText("4032009883") &&
        alert("Copied Phone to Clipboard");

  return (
    <div>
      <div
        dir="rtl"
        className="side-bar flex flex-col justify-around  w-33 p-2 fixed left-0 top-1/3 rounded-s-lg border-2 border-stone-950 h-2/6"
      >
        <div className="glow m-2 p-1 rounded-full text-stone-700 hover:text-stone-950  hover:cursor-pointer">
          <a href="https://github.com/MOGARRR" target="blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
        <div className="glow m-2 p-1 rounded-full text-stone-700 hover:text-stone-950  hover:cursor-pointer">
          <a href="https://www.linkedin.com/in/anthony-alicea/" target="blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
        <div
          onClick={() => handleCopyToBoard("email")}
          className="glow m-2 p-1 rounded-full text-stone-700 hover:text-stone-950  hover:cursor-pointer "
        >
          <a href="mailto:alicea.9a@gmail.com" target="blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </div>
        <div
          onClick={() => handleCopyToBoard()}
          className="glow m-2 p-1 rounded-full text-stone-700 hover:text-stone-950  hover:cursor-pointer "
        >
          <a href="tel:+4032009883">
            <i class="fa-solid fa-phone fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
