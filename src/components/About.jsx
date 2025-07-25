import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className=" mt-20 f text-stone-50 mx-40">
      <h3 className="section-title text-5xl mb-10"> About me </h3>
      <p className="text-3xl">
        I'm a <span className="bolden">full-stack web developer</span> who
        recently graduated from Lighthouse Labs and looking for an opportunity
        to be a part of the ever-evolving world of software development! Before
        tech, I was a professional cook which helped build a foundation of
        skills like working in and leading a team,{" "}
        <span className="bolden">time management</span>,{" "}
        <span className="bolden">effective communication</span>, and{" "}
        <span className="bolden">attention to detail</span>{" "}
        that have worked as a foundation for my journey into software
        development. Some things I like to do after consulting my{" "}
        <span className="bolden">rubber duck</span> for the day include playing
        music, drawing/painting, playing games, reading and writing, and of
        course cooking! <span className="bolden">Self-improvement</span> is an
        important value to me so I always love <span className="bolden">improving</span> or <span className="bolden">learning</span> something
        new, currently I'm learning to write in{" "}
        <span className="bolden">typescript</span> and how to play the {""}
        ocarina! I hope this gave you some
        insight into who I am and if you'd like to learn more or talk about
        anything, you can reach out to me, and I'd love to chat!
      </p>
    </div>
  );
};

export default About;
