import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/constants";

const ProjectSection = () => {
  return (
    <section id="projects" className="pt-8">
      <SectionTitle highlightLetter="P" title="Projects" />

        {projectData.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            tech_stack={item.tech_stack}
            description={item.description}
            points={item.points}
            isHost={item.isHost}
            gitHubLink={item.gitHubLink}
            index={index}
          />
        ))}
    </section>
  );
};

export default ProjectSection;
