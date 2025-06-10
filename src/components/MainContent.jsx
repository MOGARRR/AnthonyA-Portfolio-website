import React from "react";
import Skills from "./Skills";
import ProjectsCardList from "./ProjectCardList";

const MainContent = () => {
  return (
    <div className="flex">
      <ProjectsCardList/>
      <Skills/>
    </div>
  )
};

export default MainContent;
