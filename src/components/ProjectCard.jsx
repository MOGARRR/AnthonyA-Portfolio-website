import React from "react";


const ProjectCard = (props) => {
  const {
    title,
    description,
    stack,
    github,
    image
  } = props

  return (
    <div className="bg-green-300 flex flex-col shrink-0 grow-0 rounded-full w ">
      <h2>{title}</h2>
       <img src={image} alt="img" />
       <div>
      {stack.map((item) => <span key={item.id}>{item.name} </span>)}
       </div>
      <h5>{github}</h5>
      <p>{description}</p>
    </div>
  )
};

export default ProjectCard;
