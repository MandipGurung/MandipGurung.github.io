import { FaPython, FaJava, FaJs, FaGit, FaAws, FaDocker, FaReact, FaPhp, FaBootstrap, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDjango,
  SiApachespark,
  SiApachekafka,
  SiSelenium,
  SiSpring,
  SiPytest,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import SectionTitle from "../common/SectionTitle";
import { FaLaravel } from "react-icons/fa6";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "React.js", icon: <FaReact />, highlightColor: "#3776AB" },
      { name: "Laravel", icon: <FaLaravel />, highlightColor: "#3776AB" },
      { name: "Git", icon: <FaGit />, highlightColor:"#3776AB"},
      { name: "PHP", icon: <FaPhp />, highlightColor:"#3776AB"},
      { name: "Bootstrap", icon: <FaBootstrap />, highlightColor:"#3776AB"},
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, highlightColor: "#3776AB" },
      { name: "MongoDB", icon: <SiMongodb />, highlightColor: "#3776AB" },
      { name: "HTML", icon: <FaHtml5 />, highlightColor: "#3776AB" },
      { name: "CSS", icon: <FaCss3 />, highlightColor: "#3776AB" },
      { name: "JavaScript", icon: <FaJava />, highlightColor: "#3776AB" },
    ],
  },
];

const SkillSection = () => {
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill.name,
      icon: skill.icon,
      highlightColor: skill.highlightColor,
    }))
  );

  return (
    <section id="skills" className="py-8">
      <SectionTitle highlightLetter="S" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {allSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-4 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow"
          >
            <div
              className="h-12 w-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: skill.highlightColor }}
            >
              <div className="text-2xl text-white">{skill.icon}</div>
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
