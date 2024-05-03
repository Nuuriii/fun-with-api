import MovieList from "../../assets/movie-list.png";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";

export const projectData = [
  {
    img: MovieList,
    title: "Simple Movie List",
    preview_url: "https://simple-movie-list-neon.vercel.app/",
    code_url: "https://github.com/Nurrohmann/simple-movie-list",
    stack: [
      { tech: <GrReactjs size={22} className="text-sky-400" /> },
      { tech: <SiNextdotjs size={22} className="text-white" /> },
      { tech: <RiTailwindCssFill size={22} className="text-sky-400" /> },
      { tech: <SiReactquery size={22} className="text-red-400" /> },
    ],
  },
];
