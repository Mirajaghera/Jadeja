import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import footerBg from "../../assets/footer.jpg";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const quickLinks = [
    { label: "Services", tab: "services" },
    { label: "Portfolio", tab: "gallery" },
    { label: "Why Choose Us", tab: "home" },
    { label: "How We Work", tab: "home" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/jadeja_interior_studio_pvtltd/?hl=en",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative overflow-hidden min-h-[500px] md:min-h-[600px]">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={footerBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile black background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a] md:hidden" />

      {/* Dark overlay - uniform without bottom gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70 z-[1] hidden md:block" />

      {/* Main Content */}
      <div className="relative z-10 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top Section - Added margin-left to center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 ml-0 md:ml-32 lg:ml-48">
            {/* Brand Column */}
            <div className="lg:col-span-1 flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#C9A24D] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <span className="text-white text-2xl font-bold tracking-wide">
                  Jadeja
                </span>
              </div>

              {/* Tagline */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We Transform Your <span className="text-[#C9A24D]">Vision</span>{" "}
                Into Beautifully Crafted Spaces.
              </p>

              {/* Address */}
              <div className="flex items-start gap-3 text-white/50 text-sm justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C9A24D]" />
                <span>
                  Rajkot, Gujarat,
                  <br />
                  India
                </span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveTab(link.tab)}
                      className="text-white/50 text-sm hover:text-[#C9A24D] transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </h4>

              {/* Phone */}
              <a
                href="tel:+919725146804"
                className="flex items-center gap-3 text-[#C9A24D] text-lg font-semibold mb-4 hover:text-[#e8d5a8] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9725146804
              </a>

              {/* Email */}
              <a
                href="mailto:jadeja@gmail.com"
                className="flex items-center gap-3 text-white/70 text-sm mb-8 hover:text-[#C9A24D] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all">jadeja@gmail.com</span>
              </a>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/40 hover:text-[#C9A24D] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">jadeja_interior</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center py-6 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © Copyright {new Date().getFullYear()}{" "}
              <span className="text-[#C9A24D]">Jadeja</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
