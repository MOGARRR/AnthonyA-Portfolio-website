import React from "react";
import '../styles/About.css'

const MobileAbout = () => {
  return (
    <div id="about" className="text-lg text-stone-50 px-4 py-6 space-y-6">
      <h3 className="section-title text-4xl">
        About Me
      </h3>
      
      <section>
        <p>
          👋 I'm a{" "}
          <span className="bolden">full-stack web developer</span> and
          recent graduate of Lighthouse Labs, excited to jump into the
          fast-moving world of software development!
        </p>
      </section>

      <section>
        <p>
          🔪 Before tech, I worked as a professional cook — where I developed
          skills like <span className="bolden">team leadership</span>,{" "}
          <span className="bolden">time management</span>, and{" "}
          <span className="bolden">attention to detail</span>. These now
          help me build clean, collaborative code.
        </p>
      </section>

      <section>
        <p>
          🎵 Some things I like to do after consulting my{" "}
        <span className="bolden">rubber duck</span> for the day include playing
        music, drawing/painting, playing games, reading and writing, and of
        course cooking!
        </p>
      </section>

      <section>
        <p>
          📚 <span className="bolden">Self-improvement</span> is an
        important value to me so I always love <span className="bolden">improving</span> or <span className="bolden">learning</span> something
        new, currently I'm learning to write in{" "}
        <span className="bolden">typescript</span> and how to play the {""}
        ocarina!
        </p>
      </section>

      <section className="border-t border-stone-700 pt-4">
        <p>
          🤝 I hope this gave you some
        insight into who I am and if you'd like to learn more, you can reach out to me, and I'd love to chat!
        </p>
      </section>
    </div>
  );
};

export default MobileAbout;
