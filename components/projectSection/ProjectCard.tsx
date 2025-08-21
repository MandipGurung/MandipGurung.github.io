import Link from "next/link";
import { ProjectCardProps } from "@/types";
import { FaGithub } from "react-icons/fa"; // GitHub icon

interface ProjectCardIndex extends ProjectCardProps {
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tech_stack,
  points,
  isHost,
  gitHubLink,
  index,
}: ProjectCardIndex) => {
  return (
    <div
      className={`flex flex-col gap-6 p-6 bg-gray-100 rounded-xl shadow-md ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Section */}
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base font-medium">
          <strong>Tech Stack:</strong> {tech_stack}
        </p>
        <p
          className="text-gray-700 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {points && points.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
        {!isHost && !gitHubLink && (
          <div className="flex items-center gap-4">
          <p className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Private</p>
          </div>
        )}

        {/* Buttons Section */}
        <div className="flex items-center gap-4">
          {gitHubLink && (
            <Link href={gitHubLink} target="_blank">
              <button className="flex items-center gap-2 text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                <FaGithub size={20} /> GitHub
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
