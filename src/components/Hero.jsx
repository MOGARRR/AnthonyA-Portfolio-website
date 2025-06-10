import React from "react";
import About from "./About";

const Hero = () => {
  return (
    <div className="flex">
      <div className="bg-gradient-to-tl from-violet-900 from-20% to-blue-800 to-100% flex flex-col justify-center grow-0 shrink-0 rounded-full w-96 h-96 font-sans text-stone-50" >
      <h1 className="text-5xl">Anthony Alicea</h1>
      <h2 className="text-3xl">Full-Stack Developer</h2>
      <p className="text-xl">
        A full-stack developer who loves learning and creating !
      </p>
    </div>
    <About/>
    </div>
    
  );
};

export default Hero;
