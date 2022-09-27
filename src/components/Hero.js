import profile from "../assets/profile.png";
import { hero } from "../data";
import ThemeToggler from "./ThemeToggler";

export default function Hero() {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <img src={profile} layout="fill" objectFit="contain" alt="Ammar" />
        </div>

        <ThemeToggler />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-justify mb-4">{hero.desc}</p>
    </div>
  );
}
