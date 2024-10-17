import React from "react";

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <h2>{props?.title}</h2>
      <div className="h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1"></div>
    </div>
  );
};

export default Section;
