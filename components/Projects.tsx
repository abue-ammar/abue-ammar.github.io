/* eslint-disable @next/next/no-img-element */
"use client";
import { IProject } from "@/app/api/models/Projects";
import { apiFetcher } from "@/utils/apiFetcher";
import useSWR from "swr";
import Section from "./Section";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { data, error } = useSWR<{ success: boolean; data: IProject[] }>(
    "/api/projects",
    apiFetcher
  );

  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div>
        <div className="bg-gray-200 h-8 w-40 mb-2 rounded-md"></div>
        {/* Skeleton Loader */}
        <div className="mt-4 flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="p-2 md:p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg"
            >
              {/* Image skeleton */}
              <div className="flex items-start gap-3 mb-1.5">
                <div className="bg-gray-200 h-16 w-16 rounded-lg animate-pulse"></div>
                <div className="flex-1 ml-2">
                  <div className="h-4 bg-gray-200 rounded-md animate-pulse w-32 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md animate-pulse w-48 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md animate-pulse w-64"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 animate-pulse rounded  mb-2 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading projects: {error.message}</div>;
  }

  const projects = data?.data;

  return (
    <div className="">
      <Section title="Projects" />
      <div className="mt-4 flex flex-col gap-4">
        {projects?.map((item, index) => (
          <div
            key={index}
            className="p-2 md:p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-1.5">
              {item?.image && (
                <img
                  src={item?.image}
                  alt="logo"
                  className="size-14 md:size-16 rounded-lg"
                  style={{ transform: "scale(1.1)" }}
                />
              )}
              <div className="flex-1">
                <div className="text-pretty">
                  <p className="font-semibold ">{item?.title}</p>
                  {item?.link && (
                    <a
                      className="text-sm hover:underline flex items-center gap-1 dark:text-neutral-400"
                      href={
                        item?.link.startsWith("http")
                          ? item?.link
                          : `https://${item?.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[14px]"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      {item?.link}
                    </a>
                  )}

                  {item?.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline flex items-center gap-1 dark:text-neutral-400"
                      href={`https://github.com/${item?.github}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=""
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      {item?.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm">{item?.description}</p>
            <p className="text-sm text-neutral-400 italic">
              Techs: {item?.techs}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <a
          href="https://github.com/abdarker?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center gap-.5 dark:text-white"
        >
          More projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 animate-bounce"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
