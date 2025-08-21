import { HeighlightTextProps } from "@/types";

const HeighlightText = ({ text }: HeighlightTextProps) => {
  return (
    <span className="relative mt-5 z-20">
      <span className="relative z-20">{text}</span>
      <span
        className="absolute h-[20%] w-full left-0 top-[70%] z-10"
        style={{ backgroundColor: '#DAA06D' }} // Replace with your hex color
      />
    </span>
  );
};

export default HeighlightText;
