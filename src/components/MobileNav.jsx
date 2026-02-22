import React from "react";
import "../styles/Header.css";

const MobileNav = (props) => {
  const handleScroll = (id) => {
    const scrollLocation = document.getElementById(id);
    id === "projects"
      ? scrollLocation.scrollIntoView({ behavior: "smooth", block: "center" })
      : id === "about"
        ? scrollLocation.scrollIntoView({ behavior: "smooth", block: "start" })
        : scrollLocation.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
  };

  return (
    <>
      <div className="flex h-full">
        <div className="nav-mobile fixed top-0 w-8/12 h-dvh flex flex-col text-stone-50 select-none">
          <div className="flex flex-col flex-1 items-center justify-evenly text-4xl ">
            <span
              onClick={() => props.handleNav(true)}
              className="text-5xl border-b-2 w-full p-3 flex items-baseline"
            >
              <i class="fa-solid fa-angle-left mr-10 "></i>
              Menu
            </span>

            <span
              onClick={() => handleScroll("about")}
              className="w-full py-3 "
            >
              About
            </span>
            <span
              onClick={() => handleScroll("skills")}
              className="w-full py-3"
            >
              Skills
            </span>
            <span
              onClick={() => handleScroll("projects")}
              className="w-full py-3"
            >
              Projects
            </span>
            <span
              onClick={() => handleScroll("contactForm")}
              className="w-full py-3"
            >
              Contact me
            </span>
          </div>

          <div className="flex flex-col flex-1 items-center h-3/6 ">
            <div className="text-5xl border-b-2 w-11/12">Reach out!</div>

            <div className="flex flex-col justify-evenly h-full">
              
                <a
                  className="flex items-baseline p-3"
                  href="https://github.com/MOGARRR"
                  target="blank"
                >
                  <i class="fa-brands fa-github fa-2xl"></i>
                  <div className="text-4xl ml-2">GitHub</div>
                </a>


              <div>
                <a
                  className="flex items-baseline p-3"
                  href="https://www.linkedin.com/in/anthony-alicea/"
                  target="blank"
                >
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  <div className="text-4xl ml-2"> Linkedin </div>
                </a>
              </div>

              <div>
                <a
                  className="flex items-baseline  p-3"
                  href="mailto:alicea.9a@gmail.com"
                  target="blank"
                >
                  <i class="fa-solid fa-envelope fa-2xl"></i>
                  <div className="text-4xl ml-2">Email</div>
                </a>
              </div>

              <div>
                <a className="flex items-center  p-3" href="tel:+14032009883">
                  <i class="fa-solid fa-phone fa-2xl"></i>
                  <div className="text-4xl ml-2">Call</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => props.handleNav(true)}
          className="fixed top-0 right-0 w-4/12 h-dvh"
        ></div>
      </div>
    </>
  );
};

export default MobileNav;
