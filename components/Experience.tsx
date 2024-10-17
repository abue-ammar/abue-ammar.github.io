"use client";
import { IExperience } from "@/app/api/models/Experience";
import { apiFetcher } from "@/utils/apiFetcher";
import useSWR from "swr";
import Section from "./Section";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const { data, error } = useSWR<{ success: boolean; data: IExperience[] }>(
    "/api/experience",
    apiFetcher
  );

  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div>
        <Section title="Experience" />
        <div className="flex flex-col gap-4">
          {/* Skeleton for Experience items */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="">
              {/* Skeleton for company name */}
              <div className="bg-gray-200 h-6 w-48 rounded-md animate-pulse mb-2"></div>

              {/* Skeleton for position and duration */}
              <div className="bg-gray-200 h-4 w-64 rounded-md animate-pulse mb-2"></div>

              {/* Skeleton for tasks */}
              <ul className="px-8">
                {[...Array(3)].map((_, j) => (
                  <li
                    key={j}
                    className="bg-gray-200 h-4 w-full rounded-md animate-pulse mb-2"
                  ></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading experience data: {error.message}</div>;
  }

  const experiences = data?.data;

  return (
    <div>
      <Section title="Experience" />
      <div className="flex flex-col gap-4">
        {experiences?.map((company, i) => (
          <div key={i} className="">
            <p className="font-medium lightText leading-5">{company?.name}</p>
            <p className="text-sm text-neutral-400 ">
              {company?.position}, {company?.duration}
            </p>
            <ul className="px-8 marker:text-neutral-500 lightText">
              {company?.tasks?.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
