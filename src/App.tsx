import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import AboutScreen from "./screens/AboutScreen";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="/portfolio" element={<GalleryScreen />} />
            <Route path="/contact" element={<ContactScreen />} />

            {/* Service & Product Routes */}
            <Route
              path="/services/home-interior"
              element={<HomeInteriorScreen />}
            />
            <Route
              path="/services/modular-kitchens"
              element={<ModularKitchenScreen />}
            />
            <Route
              path="/services/office-interior"
              element={<OfficeInteriorScreen />}
            />
            <Route
              path="/services/turnkey-interior"
              element={<TurnkeyInteriorScreen />}
            />
            <Route
              path="/services/interior-furnishing"
              element={<InteriorFurnishingScreen />}
            />
            <Route
              path="/services/architectural-design"
              element={<ArchitecturalDesignScreen />}
            />
            <Route
              path="/services/labor-services"
              element={<LabourServicesScreen />}
            />

            {/* These might be overlapped with Products or Services */}
            <Route
              path="/services/bedroom-interior"
              element={<BedroomInteriorScreen />}
            />
            <Route
              path="/services/living-room-interior"
              element={<LivingRoomInteriorScreen />}
            />
            <Route path="/services/wardrobe" element={<WardrobeScreen />} />

            {/* Products Routes mapping to same screens if appropriate */}
            <Route
              path="/products/modular-kitchens"
              element={<ModularKitchenScreen />}
            />
            <Route
              path="/products/bedroom-interior"
              element={<BedroomInteriorScreen />}
            />
            <Route
              path="/products/living-room-interior"
              element={<LivingRoomInteriorScreen />}
            />
            <Route path="/products/wardrobe" element={<WardrobeScreen />} />
            {/* SEO Recommended Internal Service Pages */}
            <Route
              path="/residential-interior-design-rajkot"
              element={<HomeInteriorScreen />}
            />
            <Route
              path="/commercial-interior-designer-rajkot"
              element={<OfficeInteriorScreen />}
            />
            <Route
              path="/modular-kitchen-interior-rajkot"
              element={<ModularKitchenScreen />}
            />
            <Route
              path="/office-interior-design-rajkot"
              element={<OfficeInteriorScreen />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
