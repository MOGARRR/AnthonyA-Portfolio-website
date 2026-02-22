import React, { useState } from "react";
import "../styles/Contacts.css";

const Contacts = () => {
  const [copyLinks, setCopyLinks] = useState(false);
  const handleContactHover = () =>
    copyLinks ? setCopyLinks(false) : setCopyLinks(true);

  const handleCopyToBoard = (type) =>
    type === "email"
      ? navigator.clipboard.writeText("alicea.9a@gmail.com") &&
        alert("Copied Email to Clipboard")
      : type === "link"
        ? navigator.clipboard.writeText(
            "https://www.linkedin.com/in/anthony-alicea/",
          ) && alert("Copied Linkedin to Clipboard")
        : type === "git"
          ? navigator.clipboard.writeText("https://github.com/MOGARRR") &&
            alert("Copied Github to Clipboard")
          : navigator.clipboard.writeText("4032009883") &&
            alert("Copied Phone to Clipboard");

  return (
    <div onMouseEnter={handleContactHover} onMouseLeave={handleContactHover}>
      <div
        dir="rtl"
        className={`side-bar-copy ${copyLinks ? "open" : "closed"} flex flex-col justify-around w-33 p-2 fixed left-16 ml-2 top-1/3 rounded-s-lg border-2 border-stone-500 h-2/6`}
      >
        <div className="text-xl border-b-2">Copy</div>
        <div
          onClick={() => handleCopyToBoard("git")}
          className="glow-copy m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer"
        >
          <i class="fa-brands fa-github fa-2xl"></i>
        </div>
        <div
          onClick={() => handleCopyToBoard("link")}
          className="glow-copy m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer"
        >
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </div>
        <div
          onClick={() => handleCopyToBoard("email")}
          className="glow-copy m-2 p-1 rounded-full text-stone-400 hover:text-stone-50 hover:cursor-pointer "
        >
          <i class="fa-solid fa-envelope fa-2xl"></i>
        </div>
        <div
          onClick={() => handleCopyToBoard()}
          className="glow-copy m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer "
        >
          <i class="fa-solid fa-phone fa-2xl"></i>
        </div>
      </div>

      <div
        dir="rtl"
        className="side-bar flex flex-col justify-around  w-33 p-2 fixed left-0 top-1/3 rounded-s-lg border-2 border-stone-500 h-2/6"
      >
        <div className="text-xl border-b-2">Visit</div>
        <div className="glow m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
          <a href="https://github.com/MOGARRR" target="blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
        <div className="glow m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer">
          <a href="https://www.linkedin.com/in/anthony-alicea/" target="blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
        <div className="glow m-2 p-1 rounded-full text-stone-400 hover:text-stone-50 hover:cursor-pointer ">
          <a href="mailto:alicea.9a@gmail.com" target="blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </div>
        <div className="glow m-2 p-1 rounded-full text-stone-400 hover:text-stone-50  hover:cursor-pointer ">
          <a href="tel:+14032009883">
            <i class="fa-solid fa-phone fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
