import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="fade-in">
      <p className="">
        <strong className="font-semibold">Software Engineer</strong>. I enjoy
        building robust, easy-to-use, digital products. I work at{" "}
        <a href="https://technonext.com" target="_blank">
          TechnoNext Ltd
        </a>
        . I value simplicity, usability and the intersection of technology.
      </p>

      <p className="mt-4 flex gap-x-3">
        <a href="mailto:iabueammar@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/abdarker/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/abdarker" target="_blank">
          Github
        </a>
      </p>
    </div>
  );
};

export default Intro;
