/* eslint-disable @next/next/no-img-element */
import { intro } from "@/app/data";
import Image from "next/image";
import React from "react";
import ToggleTheme from "./ToggleTheme";

interface IntroProps {}

const Intro: React.FC<IntroProps> = (props) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/profile.png"
            height={80}
            width={80}
            className="object-contain"
            alt="Abue Ammar"
          />
        </div>
        <div className="mb-4 mr-4">
          <ToggleTheme />
        </div>
      </div>
      <h1 className="my-4">{intro.title}</h1>
      <p className="text-justify">{intro.desc}</p>
    </div>
  );
};

export default Intro;
