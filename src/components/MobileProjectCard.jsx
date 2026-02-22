import React from "react";
import "../styles/ProjectCard.css";

const MobileProjectCard = (props) => {
  const { title, description, stack, github, image, liveSite } = props;

  return (
    <div className="text-stone-50 w-11/12">
      <h1 className="text-4xl">{title}</h1>
      <img
        className="w-11/12 m-4 mb-0 rounded-t-lg border-2 border-stone-500 "
        src={image}
        alt={`Home page for ${title}`}
      />
      <div className="bg-gray-900 w-11/12 m-4 mt-0 p-2 rounded-b-lg border-x-2 border-b-2 border-stone-500">
        <h2 className="text-xl font-semibold border-b-2 border-stone-400 mb-3">
          Tech Stack:
        </h2>
        <div className=" grid grid-cols-3 gap-2 ">
          {stack.map((item) => (
            <span
              className="text-sm font-semibold border-2 border-stone-400 rounded-md py-1"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>

        <p className="text-lg mt-3 border-t-2 border-stone-400 ">
          {description}
        </p>
        <div className="flex justify-center">
          <div className="bg-gray-800 h-2/6 w-2/12 border-2 rounded-full m-2 px-1 py-2">
            <a href={github} target="blank">
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
          </div>
          {liveSite && (
            <div className="bg-gray-800 h-2/6 w-2/12 border-2 rounded-full m-2 px-1 py-2">
              <a href={liveSite} target="blank">
                <i class="fa-regular fa-window-maximize fa-xl"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MobileProjectCard;
