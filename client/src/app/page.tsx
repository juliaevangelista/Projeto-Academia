import { SectionBenefits } from "@/components/home/sectionBenefits";
import { Navbar } from "@/components/home/navbar";
import { SectionTraining } from "@/components/home/sectionTraining";
import { SectionInspiring } from "@/components/home/sectionInspiring";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar/>
        <SectionBenefits/>
        <SectionTraining/>
        <SectionInspiring/>
      </header>
    </div>
  );
}
