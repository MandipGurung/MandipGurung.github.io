import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/constants";

const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-8">
      <SectionTitle highlightLetter="E" title="Experience" />

        {experienceData.map((project, index) => (
          <ExperienceCard
            key={index}
            position={project.position}
            time={project.time}
            companyName={project.companyName}
            address={project.address}
            roles={project.roles}
          />
        ))}
    </section>
  );
};

export default ExperienceSection;
