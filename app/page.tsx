import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import AlamatSection from "@/sections/AlamatSection";
import GaleriSection from "@/sections/GaleriSection";
import LayananSection from "@/sections/LayananSection";
import MainSection from "@/sections/MainSection";

export default function Home() {
  return (
    <div className="w-full h-full  ">
      <Navbar />
      <MainSection />
      <AboutSection />
      <LayananSection />
      <GaleriSection />
      <AlamatSection />
    </div>
  );
}
