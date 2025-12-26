import React, { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Image as ImageIcon,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import logo from "../../assets/logo.webp";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "About Us", icon: Briefcase },
    { id: "gallery", label: "Portfolio", icon: ImageIcon },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919725146804", "_blank");
  };

  // Determine if navbar should be transparent (only on home and at top)
  const isTransparent = activeTab === "home" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent border-transparent"
          : "bg-black/20 backdrop-blur-2xl shadow-2xl border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => setActiveTab("home")}
          >
            <img
              src={logo}
              alt="Jadeja Interior"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 tracking-wide ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {activeTab === item.id && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isTransparent ? "bg-[#C9A24D]" : "bg-[#C9A24D]"
                    }`}
                  />
                )}
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className={`ml-4 px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
                isTransparent
                  ? "bg-[#C9A24D] text-white hover:bg-[#d4b985] shadow-lg shadow-[#C9A24D]/20"
                  : "bg-[#C9A24D] text-white hover:bg-[#d4b985] shadow-lg shadow-[#C9A24D]/30"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Let's Discuss
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-all duration-300 text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? "text-white bg-[#C9A24D]/20 border-l-4 border-[#C9A24D]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center px-4 py-3.5 mt-4 bg-[#C9A24D] text-white rounded-lg text-base font-semibold shadow-lg shadow-[#C9A24D]/30 hover:bg-[#d4b985] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Discuss
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
