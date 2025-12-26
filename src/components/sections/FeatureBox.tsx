import React from "react";
import { CheckCircle, Mail } from "lucide-react";

const FeatureBox: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jadeja@gmail.com";
  };

  return (
    <div className="py-16 md:py-24 overflow-hidden relative z-[2]">
      {/* Light overlay for continuity */}
      <div className="absolute inset-0 bg-white/60 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl p-10 shadow-2xl overflow-hidden group bg-gradient-to-br from-[#2B354A]/95 to-[#44526D]/95">
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B354A]/80 to-[#44526D]/80 mix-blend-multiply"></div>

          {/* Floating Decorative Blobs */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#4F6F99]/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2C3852]/30 rounded-full blur-[90px] animate-pulse-slow"></div>

          {/* CONTENT */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
            {/* LEFT */}
            <div className="space-y-6 transform transition-all duration-700 group-hover:translate-x-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Transforming Visions into{" "}
                <span className="text-[#C9A24D]">Reality</span>
              </h2>

              <p className="text-[#D9E1EC] leading-relaxed">
                Using world-class craftsmanship & turnkey execution, we bring
                your dream interiors to life with precision.
              </p>

              <button
                onClick={handleEmailClick}
                className="
                  relative bg-[#C9A24D] text-white px-8 py-3 rounded-md 
                  font-semibold text-sm uppercase tracking-wider 
                  transition-all duration-500 hover:scale-[1.04] hover:shadow-xl
                "
              >
                <span className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" />
                  Email Us Now
                </span>
              </button>
            </div>

            <div
              className="
                bg-white rounded-xl p-8 shadow-xl 
                text-[#2C3852]
                transition-transform duration-700
                hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              <h3 className="text-xl font-bold mb-6 border-b pb-4">
                The Jadeja Advantage
              </h3>

              <ul className="space-y-4">
                {[
                  "Complete Turnkey Execution",
                  "3D Visualization & Planning",
                  "Custom Furniture Fabrication",
                  "Post-Handover Support",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center opacity-0 translate-y-3 animate-fade-slide"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#C9A24D] mr-3" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fade-slide {
            0% {opacity: 0; transform: translateY(10px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          .animate-fade-slide {
            animation: fade-slide .7s ease forwards;
          }
          .animate-pulse-slow {
            animation: pulse 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FeatureBox;
