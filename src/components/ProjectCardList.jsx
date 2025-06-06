import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/project";

const ProjectsCardList = () => {

  return (
    <div>
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
  );
};

export default ProjectsCardList;
