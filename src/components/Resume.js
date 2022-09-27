import { resume } from "../data";

const Resume = () => {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-1  md:w-max ">
          {resume.title}
        </h2>
      </div>
      <p className="mb-1">Here you can find my resume. </p>
      <div className="text-xs font-semibold ">
        <p>
          <a
            className="dark:text-white text-black  underline transition-colors duration-500 hover:font-bold"
            target="_blank"
            href={resume.link}
            rel="noreferrer"
          >
            Download PDF
          </a>{" "}
          /{" "}
          <a
            className="dark:text-white text-black underline transition-colors duration-500 hover:font-bold"
            target="_blank"
            href={resume.link}
            rel="noreferrer"
          >
            Preview
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
