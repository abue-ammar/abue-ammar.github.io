"use client";
import { IEducation } from "@/app/api/models/Education";
import { apiFetcher } from "@/utils/apiFetcher";
import useSWR from "swr";
import Section from "./Section";

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  const { data, error } = useSWR<{ success: boolean; data: IEducation[] }>(
    "/api/education",
    apiFetcher
  );

  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div>
      <div className="bg-gray-200 h-8 w-48 mb-2 rounded-md"></div>
        <div className="flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-4 w-48 mb-2 rounded-md"></div>
              <div className="bg-gray-200 h-3 w-[90%] rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading education data: {error.message}</div>;
  }

  const educationData = data?.data;

  return (
    <div>
      <Section title="Education" />
      <div className="flex flex-col gap-2">
        {educationData?.map((education, i) => (
          <div key={i} className="">
            <p className="font-medium lightText leading-5">
              {education?.institution}
            </p>
            <p className="text-sm text-neutral-400">
              {education?.degree}, {education?.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
