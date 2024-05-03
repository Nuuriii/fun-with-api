import Card from "./Card";
import { projectData } from "./listdata";

export default function ListCard() {
  return (
    <div className="max-w-[1420px] mx-auto flex justify-center items-center mt-[20px]">
      {projectData.map((item) => (
        <Card
          stack={item.stack}
          title={item.title}
          code_url={item.code_url}
          preview_url={item.preview_url}
          img_path={item.img.src}
        />
      ))}
    </div>
  );
}
