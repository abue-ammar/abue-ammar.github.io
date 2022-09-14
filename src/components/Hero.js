import { useTheme } from "next-themes";
import sun from "../assets/icons/sun.svg";
import profile from "../assets/profile.png";
import { hero } from "../data";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <img src={profile} layout="fill" objectFit="contain" alt="Ammar" />
        </div>

        <img
          src={sun}
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
