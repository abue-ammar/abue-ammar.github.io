import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-bold">Resume</h2>
      <p>
        Here you can{" "}
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
        </a>{" "}
        my resume.
      </p>
    </div>
  );
};

export default Resume;
