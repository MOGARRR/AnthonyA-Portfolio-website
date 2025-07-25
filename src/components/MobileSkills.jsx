import React, { useState } from "react";
import skills from "../data/skills";


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
 <div id="skills" className="p-4 mt-10 text-stone-50">
      <h2 className="text-4xl mb-4">Skills</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="snap-start shrink-0 w-36 flex flex-col items-center rounded-lg ml-2 p-4 shadow-lg"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-18 w-18 object-contain"
            />
            <p className="text-2xl mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSkills;
