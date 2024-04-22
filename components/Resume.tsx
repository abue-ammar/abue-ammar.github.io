import { resume } from "@/app/data";
import React from "react";
import Section from "./Section";

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = (props) => {
  return (
    <div>
      <Section title={resume.title} />
      <p className="mb-2">Here you can find my resume. </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <a
            href={resume.download}
            rel="noreferrer"
            className=" tracking-wide transition duration-200 rounded-lg hover:bg-neutral-900 focus:shadow-outline focus:outline-none bg-black justify-center text-white dark:hover:bg-white dark:hover:text-black  dark:border-white border border-black dark:text-white inline-flex items-center text-sm py-0.5  px-2"
          >
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-download ml-1.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href={resume.link}
            target="_blank"
            rel="noreferrer"
            className="tracking-wide transition duration-200 rounded-lg hover:bg-neutral-900 focus:shadow-outline focus:outline-none bg-black justify-center text-white dark:hover:bg-white dark:hover:text-black text-sm dark:border-white border border-black dark:text-white inline-flex items-center  py-0.5 px-2"
          >
            Preview
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-eye ml-1.5"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
