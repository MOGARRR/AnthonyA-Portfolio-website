import React from "react";
import "../styles/About.css";

const MobileAbout = () => {
  return (
    <div id="about" className="text-lg text-stone-50 px-4 py-6 space-y-6">
      <h3 className="section-title text-4xl">About Me</h3>

      <section>
        I’m a <span className="bolden">full-stack developer</span> building
        <span className="bolden"> reliable</span>,{" "}
        <span className="bolden">user-focused</span> applications with modern{" "}
        <span className="bolden">JavaScript technologies</span>.
      </section>

      <section>
        Before tech, I worked as a{" "}
        <span className="bolden">professional cook</span>, where I developed
        leadership, time management, and attention to detail that now translate
        directly into writing <span className="bolden">clean</span>,{" "}
        <span className="bolden">dependable</span> code.
      </section>

      <section>
        Outside of development, I enjoy music, art, gaming, reading, and
        cooking. I am always learning and currently deepening my skills with{" "}
        <span className="bolden">Go</span>. If you would like to connect or talk
        tech, feel free to reach out!
      </section>
    </div>
  );
};

export default MobileAbout;
