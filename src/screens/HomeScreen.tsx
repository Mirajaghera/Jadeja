import React from "react";
import HeroSlider from "../components/sections/HeroSlider";
import Services from "../components/sections/WhyChoose";
import ProcessSection from "../components/sections/ProcessSection";
import FeatureBox from "../components/sections/FeatureBox";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import Testimonials from "../components/sections/Testimonials";
import ExcellenceBox from "../components/sections/ExcellenceBox";
import CTABanner from "../components/sections/CTABanner";

interface HomeScreenProps {
  setActiveTab: (tab: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveTab }) => {
  return (
    <div className="animate-fade-in">
      <HeroSlider setActiveTab={setActiveTab} />
      <Services />

      {/* Shared Blueprint Background Container */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('https://icsaconstrucciones.com/images/bg/bg-12.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gold Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A24D' stroke-width='0.5'%3E%3Cpath d='M0 60h120M60 0v120'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <ProcessSection />
        <FeatureBox />
        <PortfolioPreview setActiveTab={setActiveTab} />
        <Testimonials />
        <ExcellenceBox />
      </div>

      <CTABanner />
    </div>
  );
};

export default HomeScreen;
