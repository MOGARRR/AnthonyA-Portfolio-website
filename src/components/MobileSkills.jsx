import React, { useState } from "react";
import skills from "../data/skills";
import '../styles/Skills.css'

const MobileSkills = () => {
const [hover,setHover] = useState([]);
const handleTitleHover = (clear, id) => clear ? setHover([]) : setHover(prevArray => [...prevArray, id]);
const handleCardHover = (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.target.style.setProperty('--x', x + 'px');
  e.target.style.setProperty('--y', y + 'px');
}

  return (
 <div id="skills" className="p-4 text-stone-50">
      <h2 className="text-2xl mb-4">Skills</h2>
      
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="snap-start shrink-0 w-32 flex flex-col items-center rounded-lg p-3 shadow-lg"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-16 w-16 object-contain"
            />
            <p className="text-xl mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSkills;
