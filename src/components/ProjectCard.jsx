import React from "react";

const ProjectCard = (props) => {
  const { title, description, stack, github, image } = props;

  return (
    <div className="m-2">
      <h1 className="border-b-2 border-stone-950 text-4xl">{title}</h1>
      <div className="flex">
        <img className="w-6/12 p-2  border-r-2 border-stone-950" src={image} alt="Front Page of project" />
        <div className=" mt-4">
          <span className="bg-gray-200 rounded-full p-3 "><a href={github}><i class="fa-brands fa-github fa-2xl"></i></a></span>
          {stack.map((item) => (
            <span className= " bg-gray-200 rounded-full m-2 p-2 text-xl" key={item.id}>{item.name}</span>
          ))}
          <p className="text-2xl mt-6 p-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
