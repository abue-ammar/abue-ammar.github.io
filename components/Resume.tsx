"use client";
import { IResume } from "@/app/api/models/Resume";
import useSWR from "swr";

import { apiFetcher } from "@/utils/apiFetcher";
import Section from "./Section";

const Resume: React.FC = () => {
  const { data, error } = useSWR<{ success: boolean; data: IResume }>(
    "/api/resume",
    apiFetcher
  );

  const isLoading = !data && !error;
  if (isLoading) {
    return (
      <div className="mt-4">
        {/* Skeleton for Section title */}
        <div className="bg-gray-200 h-8 w-48 rounded animate-pulse mb-2"></div>

        <div className="mb-2">
          <div className="bg-gray-200 h-4 w-72 rounded animate-pulse mb-4"></div>
        </div>

        <div className="flex items-center gap-2">
          {/* Skeleton for download button */}
          <div className="bg-gray-200 h-8 w-32 rounded animate-pulse"></div>

          {/* Skeleton for preview button */}
          <div className="bg-gray-200 h-8 w-32 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  const resumeData = data?.data;

  return (
    <div>
      <Section title={resumeData?.title || ""} />
      <p className="mb-2">{resumeData?.description}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <a
            href={resumeData?.download}
            rel="noreferrer"
            className="tracking-wide transition duration-200 rounded-lg hover:bg-neutral-900 focus:shadow-outline focus:outline-none bg-black justify-center text-white dark:hover:bg-white dark:hover:text-black dark:border-white border border-black dark:text-white inline-flex items-center text-sm py-0.5 px-2"
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
            href={resumeData?.link}
            target="_blank"
            rel="noreferrer"
            className="tracking-wide transition duration-200 rounded-lg hover:bg-neutral-900 focus:shadow-outline focus:outline-none bg-black justify-center text-white dark:hover:bg-white dark:hover:text-black text-sm dark:border-white border border-black dark:text-white inline-flex items-center py-0.5 px-2"
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
