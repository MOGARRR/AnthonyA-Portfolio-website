import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/project";

const ProjectsCardList = () => {

  return (
    <div  className=" h-full mt-20 w-9/12">
      <h2 id="projects" className="text-4xl">Projects</h2>
      <div className="flex flex-col items-center">
        {projects.map((project) => (
        <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        stack={project.stack}
        github={project.github}
        image={project.image}
        />
      ))}
      </div>
   
    </div>
  );
};

export default ProjectsCardList;
