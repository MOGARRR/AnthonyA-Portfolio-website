import React from "react";
import "../styles/Header.css";

const MobileNav = (props) => {

  const handleScroll = (id) => {
  const scrollLocation = document.getElementById(id);
  id === 'projects' ? scrollLocation.scrollIntoView({behavior:'smooth', block: 'center'})
  : id === 'about' ? scrollLocation.scrollIntoView({behavior:'smooth', block: 'end'})
    : scrollLocation.scrollIntoView({behavior:'smooth', block: 'center'}); 
}


  return (
    <div className="nav-mobile fixed top-0 w-8/12 h-screen flex flex-col justify-around text-stone-50">
      <div className="flex flex-col items-center">
        <span className="text-5xl m-1 border-b-2 w-full p-3 ">Menu</span>
        
        <span onClick={()=>handleScroll('about')} className="text-4xl m-1  w-full p-3 ">About</span>
        <span onClick={()=>handleScroll('skills')} className="text-4xl m-1  w-full p-3">Skills</span>
        <span onClick={()=>handleScroll('projects')} className="text-4xl m-1  w-full p-3">Projects</span>
        <span onClick={()=>handleScroll('contactForm')} className="text-4xl m-1  w-full p-3">Contact me</span>
      </div>

      <div className="flex flex-col items-center justify-around h-3/6">
        <div className="text-5xl border-b-2 w-11/12">Reach out!</div>

        <div>
          <a className="flex items-baseline" href="https://github.com/MOGARRR" target="blank">
             <i class="fa-brands fa-github fa-2xl"></i>
            <div className="text-4xl ml-2">GitHub</div>
          </a>
        </div>

        <div >
          <a className="flex items-baseline" href="https://www.linkedin.com/in/anthony-alicea/" target="blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <div className="text-4xl ml-2"> Linkedin </div>
          </a>
        </div>
        
        <div>
          <a className="flex items-baseline" href="mailto:alicea.9a@gmail.com" target="blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <div className="text-4xl ml-2">Email</div>
          </a>
        </div>

        <div>
          <a className="flex items-center" href="tel:+14032009883">
            <i class="fa-solid fa-phone fa-2xl"></i>
            <div className="text-4xl ml-2">Call</div>
          </a>
        </div>
      </div>

      <div className="text-5xl p-5">
        <i onClick={() => props.handleNav(true)} class="fa-solid fa-x"></i>
      </div>
    </div>
  );
};

export default MobileNav;
