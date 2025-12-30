import { useState, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import GalleryScreen from "./screens/GalleryScreen";
import HomeInteriorScreen from "./screens/HomeInteriorScreen";
import ModularKitchenScreen from "./screens/ModularKitchenScreen";
import OfficeInteriorScreen from "./screens/OfficeInteriorScreen";
import TurnkeyInteriorScreen from "./screens/TurnkeyInteriorScreen";
import InteriorFurnishingScreen from "./screens/InteriorFurnishingScreen";
import ArchitecturalDesignScreen from "./screens/ArchitecturalDesignScreen";
import LabourServicesScreen from "./screens/LabourServicesScreen";
import BedroomInteriorScreen from "./screens/BedroomInteriorScreen";
import LivingRoomInteriorScreen from "./screens/LivingRoomInteriorScreen";
import WardrobeScreen from "./screens/WardrobeScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        {activeTab === "home" && <HomeScreen setActiveTab={setActiveTab} />}
        {activeTab === "services" && <ServicesScreen />}
        {activeTab === "gallery" && <GalleryScreen />}
        {activeTab === "home-interior" && <HomeInteriorScreen />}
        {activeTab === "modular-kitchens" && <ModularKitchenScreen />}
        {activeTab === "office-interior" && <OfficeInteriorScreen />}
        {activeTab === "turnkey-interior" && <TurnkeyInteriorScreen />}
        {activeTab === "interior-furnishing" && <InteriorFurnishingScreen />}
        {activeTab === "architectural-design" && <ArchitecturalDesignScreen />}
        {activeTab === "labor-services" && <LabourServicesScreen />}
        {activeTab === "bedroom-interior" && <BedroomInteriorScreen />}
        {activeTab === "living-room-interior" && <LivingRoomInteriorScreen />}
        {activeTab === "wardrobe" && <WardrobeScreen />}
        {activeTab === "contact" && <ContactScreen />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
