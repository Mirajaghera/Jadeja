import React, { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Image as ImageIcon,
  Menu,
  X,
  Phone,
} from "lucide-react";
import logo from "../../assets/logo.webp";
import {
  services as sharedServices,
  products as sharedProducts,
} from "../../data/services";

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [navSource, setNavSource] = useState<"services" | "products" | null>(
    null
  );

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

  const servicesItems = sharedServices.map((s) => ({
    id: s.id,
    label: s.label,
  }));
  const productsItems = sharedProducts.map((p) => ({
    id: p.id,
    label: p.label,
  }));

  // Navbar is transparent at top of page on all screens
  const isTransparent = !isScrolled;

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

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 tracking-wide ${
                  servicesItems.some((s) => s.id === activeTab) &&
                  navSource === "services"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Services
                {/* Active indicator for Services */}
                {servicesItems.some((s) => s.id === activeTab) &&
                  navSource === "services" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A24D]" />
                  )}
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-black/90 border border-white/5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200">
                <div className="py-2">
                  {servicesItems.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setNavSource("services");
                        setActiveTab(s.id);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${
                        activeTab === s.id && navSource === "services"
                          ? "text-[#C9A24D] bg-white/5"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 tracking-wide ${
                  productsItems.some((p) => p.id === activeTab) &&
                  navSource === "products"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Products
                {/* Active indicator for Products */}
                {productsItems.some((p) => p.id === activeTab) &&
                  navSource === "products" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A24D]" />
                  )}
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-black/90 border border-white/5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200">
                <div className="py-2">
                  {productsItems.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setNavSource("products");
                        setActiveTab(p.id);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${
                        activeTab === p.id && navSource === "products"
                          ? "text-[#C9A24D] bg-white/5"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setActiveTab("contact")}
              className={`ml-4 px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
                isTransparent
                  ? "bg-[#C9A24D] text-white hover:bg-[#d4b985] shadow-lg shadow-[#C9A24D]/20"
                  : "bg-[#C9A24D] text-white hover:bg-[#d4b985] shadow-lg shadow-[#C9A24D]/30"
              }`}
            >
              <Phone className="w-4 h-4" />
              Contact Us
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

            {/* Mobile Services Toggle */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-3" />
                  Services
                </span>
                <span className="text-white/60">
                  {mobileServicesOpen ? "−" : "+"}
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-1 pl-12">
                  {servicesItems.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setNavSource("services");
                        setActiveTab(s.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Toggle */}
            <div>
              <button
                onClick={() => setMobileProductsOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center">
                  <ImageIcon className="w-5 h-5 mr-3" />
                  Products
                </span>
                <span className="text-white/60">
                  {mobileProductsOpen ? "−" : "+"}
                </span>
              </button>

              {mobileProductsOpen && (
                <div className="mt-2 space-y-1 pl-12">
                  {productsItems.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setNavSource("products");
                        setActiveTab(p.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setActiveTab("contact");
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center px-4 py-3.5 mt-4 bg-[#C9A24D] text-white rounded-lg text-base font-semibold shadow-lg shadow-[#C9A24D]/30 hover:bg-[#d4b985] transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
