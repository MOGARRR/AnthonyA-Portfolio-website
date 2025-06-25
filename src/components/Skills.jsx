import React, { useState } from "react";
import skills from "../data/skills";
import '../styles/Skills.css'

const Skills = () => {
const [hover,setHover] = useState([]);
const handleHover = (clear, id) => clear ? setHover([]) : setHover(prevArray => [...prevArray, id]);

  return (
    <div className="mt-16">
      <h1 className="text-4xl mb-4">Skills</h1>
      <div className="border border-stone-950 grid grid-cols-5 grid-rows-3 gap-0">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => handleHover(false,skill.id)}
            onMouseLeave={() => handleHover(true)}
            className="border-2  border-stone-950 h-52 flex flex-col justify-around"
          >
            <div className=" size-32 self-center p-2 ">
              <img className="size-full" src={skill.logo} alt="" />
            </div>
            {hover.includes(skill.id) &&  <h2 className="text-3xl skill-title">{skill.name}</h2>}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
