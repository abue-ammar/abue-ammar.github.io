import { projects } from "@/app/data/data";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-bold">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3 className="mt-4">
              <a href={project.slug}>{project.name}</a> →
            </h3>
            <p>{project.details}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <a
          href="https://github.com/abdarker?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>{" "}
        →
      </p>
    </div>
  );
};

export default Projects;
