import profile from "../assets/profile.png";
import { hero, resume } from "../data";
import ThemeToggler from "./ThemeToggler";

export default function Hero() {
  return (
    <div className="mb-10">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <img src={profile} layout="fill" objectFit="contain" alt="Ammar" />
        </div>

        <ThemeToggler />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-justify text-lg mb-4">{hero.desc}</p>
      <a
        target="_blank"
        href={resume.link}
        rel="noreferrer"
        class="relative inline-block px-2 py-1 font-semibold group mb-5"
      >
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black dark:bg-black dark:border-white dark:group-hover:bg-white group-hover:bg-black"></span>
        <span class=" inline-flex items-center relative dark:text-white dark:group-hover:text-dark text-black group-hover:text-white ml-2">
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
