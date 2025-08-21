import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface HeighlightTextProps {
  text: string;
}

export interface sectionTitleProps {
  highlightLetter: string;
  title: string;
}

export interface EducationCardProps {
  date: string;
  course: string;
  institution_name: string;
  location: string;
  cardColor: string;
  icon: any;
}

export interface SkillCardProps {
  name: string;
  highlightColor: string;
  icon: ReactElement;
}

export interface ExperienceCardProps {
  position: string;
  time: string;
  companyName: string;
  address: string;
  roles: string[];
}

export interface ProjectCardProps {
  title: string;
  tech_stack: string | undefined;
  description: string;
  points: string[] | undefined;
  isHost: boolean;
  gitHubLink: string | undefined;
}

export interface ViewImageProps {
  viewImg: boolean;
  toggleViewImg: () => void;
  img: StaticImageData | null;
}
