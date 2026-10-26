import HeroPage from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import ProjectsPage from "./_components/Projects";

export default function Home() {
  return (
    <div className="p-4 md:p-10">
      <Navbar />
      <HeroPage />
      <ProjectsPage />
    </div>
  );
}
