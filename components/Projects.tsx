import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-bold">Projects</h2>
      <ul>
        <li>
          <h3 className="mt-4">
            <a href="#">proj 1</a> →
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sint
            autem quae debitis
          </p>
        </li>
        <li>
          <h3 className="mt-4">
            <a href="#">proj 2</a> →
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sint
            autem quae debitis
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
