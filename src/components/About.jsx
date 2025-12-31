import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className=" mt-20 f text-stone-50 mx-40">
      <h3 className="section-title text-5xl mb-10"> About me </h3>
      <p className="text-3xl">
        I’m a <span className="bolden">full-stack web developer</span> who is
        eager to grow within the ever-evolving software industry. My background
        as a professional cook taught me how to thrive in{" "}
        <span className="bolden">fast-paced environments</span>,{" "}
        <span className="bolden">collaborate effectively</span>, and pay{" "}
        <span className="bolden">close attention to detail—skills</span> that
        translate naturally into writing clean, reliable code. When I’m not
        coding, you’ll probably find me making music, creating art, gaming,
        reading, writing, or experimenting in the kitchen. I value{" "}
        <span className="bolden">Self-improvement</span> and am currently
        learning <span className="bolden">Next.JS</span> and how to paint!
        Hopefully this gave you some insight into who I am and if you'd like to
        learn more or talk about anything, you can reach out to me, and I'd love
        to chat!
      </p>
    </div>
  );
};

export default About;
