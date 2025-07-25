import React, { useState } from "react";
import skills from "../data/skills";
import "../styles/Skills.css";

const Skills = () => {
  const [hover, setHover] = useState([]);
  const handleTitleHover = (clear, id) =>
    clear ? setHover([]) : setHover((prevArray) => [...prevArray, id]);
  const handleCardHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };

  return (
    <div id="skills" className="mt-16 text-stone-50 w-9/12">
      <h1 className="section-title text-5xl mb-4">Skills</h1>
      <div className="border border-stone-500 grid grid-cols-5 grid-rows-3 gap-0 bg-gray-950">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => handleTitleHover(false, skill.id)}
            onMouseLeave={() => handleTitleHover(true)}
            onMouseMove={(e) => handleCardHover(e)}
            className="border-2 border-stone-500 h-52 flex flex-col justify-around glow-mouse"
          >
            <div className="size-32 self-center p-2 ">
              <span>
                <img className="size-full" src={skill.logo} alt="" />
              </span>
            </div>
            {hover.includes(skill.id) && (
              <span className="text-3xl skill-title">{skill.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
