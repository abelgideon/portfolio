import CertificatesPage from "./_components/Certificates";
import HeroPage from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import ProjectsPage from "./_components/Projects";
import SkillsPage from "./_components/Skills";

export default function Home() {
  return (
    <div className="pb-4 pl-4 pr-4 md:pb-10 md:pl-10 md:pr-10">
      <Navbar />
      <HeroPage />
      <ProjectsPage />
      <CertificatesPage />
      <SkillsPage />
    </div>
  );
}
