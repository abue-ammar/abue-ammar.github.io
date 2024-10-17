/* eslint-disable @next/next/no-img-element */
"use client";
import { apiFetcher } from "@/utils/apiFetcher";
import useSWR from "swr";
import { Badge } from "./Badge";
import Section from "./Section";

interface ISkill {
  name: string;
  url: string;
}

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const { data, error } = useSWR<{ success: boolean; data: ISkill[] }>(
    "/api/skills",
    apiFetcher
  );

  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div>
          <div className="bg-gray-200 h-8 w-32 mb-2 rounded-md"></div>
        <div className="flex flex-wrap gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-6 w-20 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading skills data: {error.message}</div>;
  }

  const skills = data?.data;

  return (
    <div className="">
      <Section title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, i) => (
          <Badge key={i}>
            <img
              alt={`${skill?.name} Logo`}
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
