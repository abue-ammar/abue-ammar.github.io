/* eslint-disable @next/next/no-img-element */
"use client";
import { apiFetcher } from "@/utils/apiFetcher";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import ToggleTheme from "./ToggleTheme";

interface IntroData {
  title: string;
  desc: string;
  avatar?: string;
}

const Intro: React.FC = () => {
  const { data, error } = useSWR<{
    success: boolean;
    data: IntroData;
  }>("/api/intro", apiFetcher);

  const isLoading = !data && !error;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          {isLoading ? (
            <div className="bg-gray-300 animate-pulse rounded-full w-full h-full" />
          ) : (
            data?.data?.avatar && (
              <Image
                src={data.data.avatar}
                height={80}
                width={80}
                className="object-cover"
                alt="Avatar"
              />
            )
          )}
        </div>
        <div className="mb-4 mr-4">
          <ToggleTheme />
        </div>
      </div>
      {isLoading ? (
        <div className="h-6 bg-gray-300 animate-pulse rounded w-2/5 my-6" />
      ) : (
        <h1 className="my-4">{data?.data?.title}</h1>
      )}
      {isLoading ? (
        <>
          <div className="h-4 bg-gray-300 animate-pulse rounded w-full mb-2" />
          <div className="h-4 bg-gray-300 animate-pulse rounded w-full mb-2" />
          <div className="h-4 bg-gray-300 animate-pulse rounded w-2/3 mb-2" />
        </>
      ) : (
        <p className="text-justify">{data?.data?.desc}</p>
      )}
    </div>
  );
};

export default Intro;
