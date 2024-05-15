import { FaGithub } from "react-icons/fa";
import { TbView360 } from "react-icons/tb";
import { useState } from "react";

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

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

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
            <div
              key={index}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              <div>{item.tech}</div>
              <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
