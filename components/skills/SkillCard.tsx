import { SkillCardProps } from "@/types";

const SkillCard = ({ name, highlightColor, icon }: SkillCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      style={{ minWidth: "100px" }}
    >
      <div
        className="h-12 w-12 flex items-center justify-center rounded-full"
        style={{ backgroundColor: highlightColor }}
      >
        <div className="text-xl text-white">{icon}</div>
      </div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default SkillCard;
