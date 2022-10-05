import { projects } from "../data";

export default function Projects() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-1.5 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="">{projects.desc}</p>
      <div className=" mt-8">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3>{item.title}</h3>
              <p className="text-justify">{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#76797d"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#76797d"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github text-lightText"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
