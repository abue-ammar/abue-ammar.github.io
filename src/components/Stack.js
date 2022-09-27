import { stack } from "../data";

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mt-3 mb-3.5 md:w-max ">
          {stack.title}
        </h2>
      </div>
      <div className="w-full text-sm flex flex-wrap -m-1.5">
        {stack.stack.map((item, index) => (
          <span
            className="border  border-lightText rounded-lg m-1.5 py-1 px-2 "
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
