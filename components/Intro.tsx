import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="fade-in">
      <p className="inline">
        <strong className="font-semibold">Software Engineer</strong>. I enjoy
        building digital products, previously at <a href="#">Ex Company</a> and{" "}
        <a href="#">Another Company</a>. I care about simplicity, usability, and
        the intersection of technology.
      </p>
      <p className="mt-4 flex gap-x-3">
        <a href="#">CV</a>
        <a href="mailto:#">Email</a>
        <a href="https://www.linkedin.com/in/abdarker/">LinkedIn</a>
        <a href="https://github.com/abdarker">Github</a>
      </p>
    </div>
  );
};

export default Intro;
