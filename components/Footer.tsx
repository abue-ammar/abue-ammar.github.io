import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div>
      <p className="flex text-black dark:text-white items-center justify-center ">
        Made with ❤️ by
        <a
          target="_blank"
          href={"https://github.com/abdarker"}
          className="ml-2 dark:text-white text-black hover:underline"
          rel="noreferrer"
        >
          Abue Ammar.
        </a>
      </p>
    </div>
  );
};

export default Footer;
