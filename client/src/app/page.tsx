import { SectionBenefits } from "@/components/home/sectionBenefits";
import { Navbar } from "@/components/home/navbar";
import { SectionTraining } from "@/components/home/sectionTraining";
import { SectionInspiring } from "@/components/home/sectionInspiring";
import { SectionVideo } from "@/components/home/sectionVideo";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="section-video">
          <SectionVideo />
        </section>
        <section id="section-benefits">
          <SectionBenefits />
        </section>
        <section id="section-training">
          <SectionTraining />
        </section>
        <section id="section-inspiring">
          <SectionInspiring />
        </section>
      </main>
    </div>
  );
}
