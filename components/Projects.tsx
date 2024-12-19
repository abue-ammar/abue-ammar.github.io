import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="fade-in">
      <h2 className="font-bold">Projects</h2>
      <ul>
        <li>
          <h3 className="mt-4">
            <a href="https://usbair.com/">US-Bangla Airlines Website & CMS</a> →
          </h3>
          <p>Built US-Bangla Airlines corporate site and content management.</p>
        </li>
        <li>
          <h3 className="mt-4">
            <a href="">US-Bangla Payment Gateway</a> →
          </h3>
          <p>
            Developed Payment Gateway system serving US-Bangla partnered
            companies.
          </p>
        </li>
        <li>
          <h3 className="mt-4">
            <a href="https://www.rtvonline.com/">RTV News & CMS</a> →
          </h3>
          <p>
            Developed CMS with features like Page Builder, Template
            Customization, and a Rich Text Editor for content creation.
          </p>
        </li>
        <li>
          <h3 className="mt-4">
            <a href="https://dhakamail.com/">DhakaMail News & CMS</a> →
          </h3>
          <p>Built a powerful CMS for managing news, roles, templates etc.</p>
        </li>
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
