import { education } from "@/app/data";
import React from "react";
import Section from "./Section";

interface EducationProps {}

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div>
      <Section title={education.title} />
      <div className="flex flex-col gap-2">
        {education?.educations?.map((education, i) => (
          <div key={i} className="">
            <p className="font-medium lightText  leading-5">
              {education?.institution}
            </p>
            <p className="text-sm text-neutral-400">
              {education.degree}, {education?.duration}
            </p>
            <p className="text-sm lightText">{education?.GPA}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
