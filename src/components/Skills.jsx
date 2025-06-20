import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div className="mt-16">
      <h1 className="text-4xl mb-4">Skills</h1>
      <div className="border-2 border-stone-950 flex flex-wrap justify-center ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-400 border-2  border-stone-950 size-52 flex flex-col justify-around"
          >
            <div className=" size-28 self-center p-2 ">
              <img className="size-full" src={skill.logo} alt="" />
            </div>
            <h2 className="text-3xl">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
