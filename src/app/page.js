import { CreativitySection } from "@/components/CreativitySection";
import { FAQ } from "@/components/FAQ";
import { GlobalClients } from "@/components/GlobalClinets";
import LandingHero, { MiniAboutUs } from "@/components/LandingHero";
import { MiniServices } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <LandingHero />
      <MiniAboutUs />
      <MiniServices />
      <GlobalClients />
      <CreativitySection />
      <Testimonials />
      <FAQ />
    </div>
  );
}
