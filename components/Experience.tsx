import { experience } from "@/app/data";
import React from "react";
import Section from "./Section";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div>
      <Section title={experience.title} />
      <div className="flex flex-col gap-4">
        {experience?.companies?.map((company, i) => (
          <div key={i} className="">
            <p className="font-medium lightText leading-5">{company?.name}</p>
            <p className="text-sm text-neutral-400 italic">
              {company?.position}, {company?.duration}
            </p>
            <ul className="px-8 marker:text-neutral-500 lightText">
              {company?.tasks?.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
