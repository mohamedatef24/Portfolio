import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperiencesSection from "../components/ExperiencesSection";
import TechnicalSkillsSection from "../components/TechnicalSkillsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import CompetitionsSection from "../components/CompetitionsSection";
import CertificationsSection from "../components/CertificationsSection";
import EducationSection from "../components/EducationSection";
import FooterSection from "../components/FooterSection";
import ThemeToggle from "../components/ThemeToggle";
import SectionDotsNav from "../components/SectionDotsNav";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <SectionDotsNav />
      <div className="w-4/5 max-w-[1200px] min-w-[320px] mx-auto p-8 pb-16 bg-background text-foreground font-sans box-border transition-colors duration-300">
        <Hero />
        <AboutSection />
        <ExperiencesSection />
        <TechnicalSkillsSection />
        <FeaturedProjectsSection />
        <CompetitionsSection />
        <CertificationsSection />
        <EducationSection />
        <FooterSection />
      </div>
    </>
  );
}
