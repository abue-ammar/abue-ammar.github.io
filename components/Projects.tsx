import { projects } from "@/app/data/data";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="fade-in">
      <h2 className="font-bold">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3 className="mt-4">
              <a
                href={`/projects/${project.slug}`}
                className="group inline-flex items-center"
              >
                <span className="">{project.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="duration-400 ml-1.5 size-4 transition-transform ease-out group-hover:translate-x-1"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </a>
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
          className="group inline-flex items-center"
        >
          More Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="duration-400 ml-1.5 size-4 transition-transform ease-out group-hover:translate-x-1"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </a>
      </p>
    </section>
  );
};

export default Projects;
