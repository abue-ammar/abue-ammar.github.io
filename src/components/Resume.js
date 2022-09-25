import { resume } from "../data";

const Resume = () => {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {resume.title}
        </h2>
      </div>

      <p>
        Here is my{" "}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          target="_blank"
          href={resume.link}
          rel="noreferrer"
        >
          resume
        </a>
      </p>
    </div>
  );
};

export default Resume;
