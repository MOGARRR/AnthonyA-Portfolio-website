import React from "react";

const ProjectCard = (props) => {
  const { title, description, stack, github, image } = props;

  return (
    <div className="bg-green-300 flex flex-col justify-center mt-4">
      <h2 className="text-4xl mb-1">{title}</h2>
      <div className="bg-pink-400 border-t-2 border-slate-400 flex">
        <div className="bg-yellow-400 min-w-72 ">
          <img src={image} alt="img" />
        </div>
        <div className="bg-cyan-400 border-l-2 text-xl">
          <div className="mb-2 flex justify-center">
            <h3>Tech-Stack:</h3>
            {stack.map((item) => (
              <span key={item.id}> {item.name},</span>
            ))}
          </div>
          <div className="mb-2 flex">
            <h3>Github:</h3>
          <h5>{github}</h5>
          </div>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
