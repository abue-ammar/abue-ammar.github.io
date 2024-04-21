import React from "react";

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="overflow-x-hidden w-full mb-2">
      <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max">
        {props.title}
      </h2>
    </div>
  );
};

export default Section;
