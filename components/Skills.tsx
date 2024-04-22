/* eslint-disable @next/next/no-img-element */
import { skills } from "@/app/data";
import React from "react";
import { Badge } from "./Badge";
import Section from "./Section";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  return (
    <div className="">
      <Section title={skills.title} />
      <div className=" flex flex-wrap gap-2">
        {skills?.skills?.map((skill, i) => (
          <Badge key={i}>
            <img
              alt="Logo"
              src={skill?.url}
              className="!mr-1"
              width="14"
              height="14"
            />
            {skill?.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
