import MovieList from "../../assets/movie-list.png";
import GithubUserSearcher from "../../assets/github-user-searcher.png";
import PokedexImg from "../../assets/pokedex.png";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

export const projectData = [
  {
    img: MovieList,
    title: "Simple Movie List",
    preview_url: "https://simple-movie-list-neon.vercel.app/",
    code_url: "https://github.com/Nurrohmann/simple-movie-list",
    stack: [
      {
        name: "React JS",
        tech: <GrReactjs size={22} className="text-sky-400" />,
      },
      {
        name: "Next JS",
        tech: <SiNextdotjs size={22} className="text-white" />,
      },
      {
        name: "Tailwind CSS",
        tech: <RiTailwindCssFill size={22} className="text-sky-400" />,
      },
      {
        name: "React Query",
        tech: <SiReactquery size={22} className="text-red-400" />,
      },
    ],
  },
  {
    img: GithubUserSearcher,
    title: "Github User Searcher",
    preview_url: "https://simple-github-user-search.vercel.app/",
    code_url: "https://github.com/Nurrohmann/simple-github-user-search",
    stack: [
      {
        name: "React JS",
        tech: <GrReactjs size={22} className="text-sky-400" />,
      },
      {
        name: "Next JS",
        tech: <SiNextdotjs size={22} className="text-white" />,
      },
      {
        name: "Tailwind CSS",
        tech: <RiTailwindCssFill size={22} className="text-sky-400" />,
      },
      {
        name: "React Query",
        tech: <SiReactquery size={22} className="text-red-400" />,
      },
      {
        name: "ShadcnUI",
        tech: <SiShadcnui size={15} className="text-neutral-200" />,
      },
    ],
  },
  {
    img: PokedexImg,
    title: "Pokedex Prototype",
    preview_url: "https://pokedex-prototype.vercel.app/",
    code_url: "https://github.com/Nurrohmann/pokedex",
    stack: [
      {
        name: "React JS",
        tech: <GrReactjs size={22} className="text-sky-400" />,
      },
      {
        name: "Next JS",
        tech: <SiNextdotjs size={22} className="text-white" />,
      },
      {
        name: "Tailwind CSS",
        tech: <RiTailwindCssFill size={22} className="text-sky-400" />,
      },
      // {
      //   name: "React Query",
      //   tech: <SiReactquery size={22} className="text-red-400" />,
      // },
      // {
      //   name: "ShadcnUI",
      //   tech: <SiShadcnui size={15} className="text-neutral-200" />,
      // },
    ],
  },
];
