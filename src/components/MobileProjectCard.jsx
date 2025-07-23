import React from "react";
import "../styles/ProjectCard.css";

const MobileProjectCard = (props) => {
  const { title, description, stack, github, image } = props;

  return (
    <div className="text-stone-50">
      <h1 className="text-4xl">{title}</h1>
      <img
        className="w-11/12 m-4 mb-0 rounded-t-lg border-2 border-stone-500 "
        src={image}
        alt=""
      />
      <div className="bg-gray-800 w-11/12 m-4 mt-0 p-2 rounded-b-lg border-x-2 border-b-2 border-stone-500">
        <h2 className="text-xl font-semibold border-b-2 border-stone-400 mb-3">Tech Stack:</h2>
        {stack.map((item) => (
          <span
            className="text-sm font-semibold border-2 border-stone-400 rounded-md p-1"
            key={item.id}
          >
          {item.name}
          </span>
        ))}

        <p className="text-lg mt-3 border-t-2 border-stone-400 ">
          {description}
        </p>
        <div className="flex justify-center">
          <div className="bg-gray-900 h-2/6 w-2/12 rounded-full m-2 p-3"><a href={github}><i class="fa-brands fa-github fa-2xl"></i></a></div>
        </div>
      </div>
    </div>
  );
};
export default MobileProjectCard;
