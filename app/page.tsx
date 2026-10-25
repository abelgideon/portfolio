import HeroPage from "./_components/Hero";
import { Navbar } from "./_components/Navbar";

export default function Home() {
  return (
    <div className="p-4 md:p-10">
      <Navbar />
      <HeroPage />
    </div>
  );
}
