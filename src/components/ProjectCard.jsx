import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = (props) => {
  const { title, description, stack, github, image, liveSite } = props;

  return (
    <div className="project-card-text mt-10 text-stone-50">
      <h1 className="border-b-2 border-stone-500 text-3xl md:text-5xl">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row">
        <img
          className="project-img w-full md:w-1/2 p-2 md:border-r-2 border-stone-500"
          src={image}
          alt="Front Page of project"
        />

        <div className="mt-4 md:w-1/2 2xl:w-full">
          <div className="flex flex-wrap 2xl:flex-nowrap">
            <span className="git-icon  bg-gray-800 h-2/6 rounded-full m-2 p-3">
              <a href={github}>
                <i class="fa-brands fa-github fa-2xl"></i>
              </a>
            </span>
            {liveSite && (
              <span className="git-icon  bg-gray-800 h-2/6 rounded-full m-2 p-3">
                <a href={liveSite}>
                  <i class="fa-regular fa-window-maximize fa-2xl"></i>
                </a>
              </span>
            )}

            {stack.map((item) => (
              <span
                className="bg-gray-800 h-2/6 rounded-full m-2 p-3 text-xl"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>

          <p className="text-lg md:text-3xl 2xl:mt-6 p-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
