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
    <div>
      <h2>{title}</h2>
      {stack.map((item) => <span key={item.id}>{item.name} </span>)}
      <h5>{github}</h5>
      <p>{description}</p>
      <img src={image} alt="img" />
    </div>
  )
};

export default ProjectCard;
