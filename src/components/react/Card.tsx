import { FaGithub } from "react-icons/fa";
import { TbView360 } from "react-icons/tb";

interface TechStack {
  tech: any;
}

interface CardProps {
  img_path: string;
  title: string;
  code_url: string;
  preview_url: string;
  stack: TechStack[];
}

export default function Card({
  title,
  code_url,
  preview_url,
  img_path,
  stack,
}: CardProps) {
  return (
    <div className="block bg-neutral-600 h-[400px] w-[300px] rounded-xl overflow-hidden">
      <div className="h-full flex flex-col ">
        <div className="h-[200px] overflow-hidden">
          <img
            className="object-cover h-full w-auto"
            src={img_path}
            alt="mmm"
          />
        </div>
        <h1 className="text-[25px] text-center text-white font-semibold mt-[20px]">
          {title}
        </h1>
        <div className="mt-[20px] flex gap-2 justify-center">
          <a
            target="_blank"
            href={code_url}
            className="flex gap-[10px] items-center text-white bg-neutral-900 py-[9px] px-[15px] rounded-lg"
          >
            <FaGithub size={24} />
            <span>Code</span>
          </a>
          <a
            target="_blank"
            href={preview_url}
            className="flex gap-[7px] items-center text-white bg-neutral-900 py-[9px] px-[15px] rounded-lg"
          >
            <TbView360 size={27} />
            <span>Preview</span>
          </a>
        </div>
        <div className="flex justify-center mt-[30px] gap-2">
          {stack.map((item: any, index: number) => (
            <div key={index}>{item.tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
