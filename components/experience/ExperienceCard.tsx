import { ExperienceCardProps } from "@/types";

const ExperienceCard = ({
  position,
  time,
  companyName,
  address,
  roles = [], // Default to an empty array if `roles` is undefined
}: ExperienceCardProps) => {
  return (
    <div className="relative pl-10 pb-8">
      {/* Vertical Line */}
      <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>

      {/* Timeline Marker */}
      <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>

      {/* Horizontal Line */}
      <div className="absolute left-5 top-4 h-[2px] w-5 bg-gray-400"></div>

      {/* Content */}
      <div className="ml-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{position}</h2>
        <p className="text-sm text-gray-600 font-medium">
          {companyName} | {address}
        </p>
        <p className="text-sm text-gray-400 italic mb-3">{time}</p>
        {roles.length > 0 ? (
          <ul className="mt-2 space-y-2 list-disc list-inside">
            {roles.map((role, index) => (
              <li
                key={index}
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: role }}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No roles specified</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
