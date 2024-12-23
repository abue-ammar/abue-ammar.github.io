import React from "react";

const Intro: React.FC = () => {
  return (
    <section className="fade-in">
      <p className="">
        <strong className="font-semibold">Software Engineer</strong>. I enjoy
        building robust, easy-to-use, digital products. I work at{" "}
        <a href="https://technonext.com" target="_blank">
          TechnoNext Ltd
        </a>
        . I value simplicity, usability and the intersection of technology.
      </p>

      <p className="mt-4">
        Resumé{" "}
        <a
          href="https://drive.google.com/file/d/10Cx8nuZpqDG43JWk0ZZ47ZNGvKQyqmRF/view"
          target="_blank"
        >
          preview
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/abdarker/resume/raw/main/Abue%20Ammar's%20Resume.pdf"
          target="_blank"
        >
          download
        </a>
      </p>
    </section>
  );
};

export default Intro;
