import React from "react";
import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  const { title, description, stack, github, image } = props;
  

  return (
    <div className="m-2">
      <h1 className="border-b-2 border-stone-950 text-5xl">{title}</h1>
      <div className="flex">
        <img className="project-img w-6/12 p-2 border-r-2 border-stone-950" src={image} alt="Front Page of project" />
        <div className="mt-4">
          <div className="flex">
          <div className="bg-gray-200 h-2/6 rounded-full m-2"><a href={github}><i class="fa-brands fa-github fa-2xl"></i></a></div>
          {stack.map((item) => (
            <div className= "bg-gray-200 h-2/6 rounded-full m-2 p-3 text-xl" key={item.id}>{item.name}</div>
          ))}
          </div>
          <p className="text-3xl mt-6 p-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
