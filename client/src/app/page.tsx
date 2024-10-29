import { HeroSection } from "@/components/home/sectionBeneficios";
import { Navbar } from "@/components/home/navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar/>
        <HeroSection/>
      </header>
    </div>
  );
}
