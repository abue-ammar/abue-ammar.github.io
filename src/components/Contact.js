import dribbble from "../assets/icons/dribbble.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { contact } from "../data";

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{" "}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} width={20} height={20} alt="Github icon" />
          </a>
        )}
        {contact.dribbble && (
          <a
            href={`https://dribbble.com/${contact.dribbble}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={dribbble} width={20} height={20} alt="Dribbble icon" />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} width={20} height={20} alt="LinkedIn icon" />
          </a>
        )}
      </div>
    </div>
  );
}
