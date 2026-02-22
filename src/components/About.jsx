import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className=" mt-20 f text-stone-50 mx-40">
      <h3 className="section-title text-5xl mb-10"> About me </h3>
      <p className="text-3xl">
        I’m a <span className="bolden">full-stack developer</span> building <span className="bolden">reliable</span>, <span className="bolden">user-focused
        applications</span> with modern <span className="bolden">JavaScript technologies</span>. Before transitioning
        into tech, I worked as a <span className="bolden">professional cook</span>, where I learned to thrive in
        fast-paced environments, collaborate closely with a team, and pay close
        attention to detail. I now apply those same principles to writing <span className="bolden">clean</span>,
        <span className="bolden">dependable</span> code. Outside of development, I enjoy making music, creating
        art, gaming, reading, writing, and experimenting in the kitchen. I am
        currently focused on deepening my skills in <span className="bolden">Go</span> and continuing to
        grow as an engineer.
      </p>
    </div>
  );
};

export default About;