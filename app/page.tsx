import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMeSection from "@/components/aboutMe/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/projectSection/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";

export default function Home() {
  return (
    <main className="maxWidth text-black">

      <HeroSection />

      <AboutMeSection />

      <ExperienceSection />

      <SkillSection />

      <ProjectSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
