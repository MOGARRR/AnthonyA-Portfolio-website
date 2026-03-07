import React, { useState } from "react";
import skills from "../data/skills";
import "../styles/Skills.css";

const Skills = () => {
  const [hover, setHover] = useState([]);
  const handleTitleHover = (clear, id) =>
    clear ? setHover([]) : setHover((prevArray) => [...prevArray, id]);
  
  const handleCardHover = (e) => {

  //Get size and position target element
  const rect = e.currentTarget.getBoundingClientRect();
  
  //Get mouse position realtive to target element
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Get center of target element
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Get Offset percent from middle and multiple it by max deg
  const offsetX = ((x - centerX) / centerX) * 20;
  const offsetY = ((y - centerY) / centerY) * 20;

  // Set card rotate vars to offset degrees
  e.currentTarget.style.setProperty("--rotateX", -offsetY + "deg");
  e.currentTarget.style.setProperty("--rotateY", offsetX + "deg");
  };

  const handleCardHoverLeave = (e) => {
    e.currentTarget.style.setProperty("--rotateX", "0deg");
    e.currentTarget.style.setProperty("--rotateY", "0deg");
  };

  return (
    <div
      id="skills"
      onMouseMove={handleCardHover}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHoverLeave}
      onWheel={handleCardHover}
      className="mt-16 text-stone-50 w-9/12 select-none card"
    >
      <h1 className="section-title text-5xl mb-4">Skills</h1>
      <div className="border border-stone-500 grid grid-cols-5 gap-0">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => handleTitleHover(false, skill.id)}
            onMouseLeave={() => handleTitleHover(true)}
            className="border-2 border-stone-500 h-52 flex flex-col justify-around"
          >
            <div className="size-32 self-center pt-3 mt-3 ">
              <img
                className="size-full "
                src={skill.logo}
                alt={`${skill.name} logo`}
              />
            </div>

            <span
              className={`text-3xl ${hover.includes(skill.id) ? "open" : "closed"}  p-1 skill-title`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
