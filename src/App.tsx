import { useState, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import GalleryScreen from "./screens/GalleryScreen";

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
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
