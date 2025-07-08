import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className=" mt-20 f text-stone-50 mx-40">
      <h3 className="about text-4xl bolden"> About me </h3>
      <p className="text-2xl">
        I'm a <span className="bolden">full-stack web developer</span> who
        recently graduated from <span className="bolden">Lighthouse Labs</span>{" "}
        and looking for an opportunity to be a part of the ever-evolving world
        of software development! Before tech, I was a{" "}
        <span className="bolden">professional cook</span> {" "}
        which helped build a foundation of skills like working in or leading a
        team, time management, effective communication, and attention to detail
        that have worked as a foundation for my journey into software
        development. Some things I like to do after consulting my{" "}
        <span className="bolden">rubber duck</span> {" "}
        for the day include playing music, drawing/painting, playing games,
        reading and writing, and of course cooking!{" "}
        <span className="bolden">Self-improvement</span> is an important value
        to me so I always love improving or learning something new, currently
        I'm learning to write in <span className="bolden">typescript</span> and
        how to play the {""}
        <span className="bolden">ocarina</span>! I hope this gave you some
        insight into who I am and if you'd like to learn more or talk about
        anything, you can reach out to me, and I'd love to chat!
      </p>
    </div>
  );
};

export default About;
