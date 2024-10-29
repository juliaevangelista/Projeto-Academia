import { SectionBeneficios } from "@/components/home/sectionBenefits";
import { Navbar } from "@/components/home/navbar";
import { SectionTreinos } from "@/components/home/sectionTraining";

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
