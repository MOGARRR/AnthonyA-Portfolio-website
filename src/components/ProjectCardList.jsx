import React from "react";
import ProjectCard from "./ProjectCard";
import MobileProjectCard from "./MobileProjectCard"
import projects from "../data/project";

const ProjectsCardList = (props) => {
  const { mobile } = props;
  return (
    <>
      {!mobile && (
        <div className=" h-full mt-20 w-9/12">
          <h2 id="projects" className="section-title text-5xl">
            Projects
          </h2>
          <div className="flex flex-col items-center">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                stack={project.stack}
                github={project.github}
                liveSite={project.liveSite}
                image={project.image}
              />
            ))}
          </div>
        </div>
      )}
      {mobile && (
         <div className=" flex flex-col h-full w-full  ">
          <h2 id="projects" className="section-title text-4xl mt-10 mb-4 text-stone-50">
            Projects
          </h2>
          <div className="flex flex-col items-center px-4">
            {projects.map((project) => (
              <MobileProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                stack={project.stack}
                github={project.github}
                liveSite={project.liveSite}
                image={project.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCardList;
