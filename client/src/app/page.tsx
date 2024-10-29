import { SectionBeneficios } from "@/components/home/sectionBeneficios";
import { Navbar } from "@/components/home/navbar";
import { SectionTreinos } from "@/components/home/sectionTreinos";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar/>
        <SectionBeneficios/>
        <SectionTreinos/>
      </header>
    </div>
  );
}
