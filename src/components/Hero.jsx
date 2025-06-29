import React from "react";
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="mt-40 flex justify-center">
      <div className="text-stone-50">
        <h1 className="text-5xl">
          Hi, my name is
        </h1>
        <h1 className="hero-name gradient text-8xl font-bold mb-5 "> Anthony Alicea</h1>
        <h2 className="text-3xl ">
          Its nice to meet you!<br/>I like learning and creating new things!
        </h2>
      </div>
    </div>
  );
};

export default Hero;
