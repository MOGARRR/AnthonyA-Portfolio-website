import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div>
      {skills.map((skill) => (
        <ul key={skill.id}>
          <h3>{skill.name}</h3>
          {skill.list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      ))}
    </div>
  );
};

export default Skills;
