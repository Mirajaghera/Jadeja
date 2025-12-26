import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";

const CTABanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Premium dark background with interior image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 z-[1]" />

      {/* Interactive gold glow following mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-[2] opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(199,167,106,0.4) 0%, transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-[3]">
        {/* Corner frames */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[#C9A24D]/30" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-[#C9A24D]/30" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C9A24D] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#C9A24D]/50 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#C9A24D]/70 rounded-full animate-pulse delay-1000" />

        {/* Side lines */}
        <div className="absolute left-0 top-1/2 w-16 h-px bg-gradient-to-r from-[#C9A24D]/50 to-transparent" />
        <div className="absolute right-0 top-1/2 w-16 h-px bg-gradient-to-l from-[#C9A24D]/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main content */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border border-[#C9A24D]/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
              <Sparkles className="w-7 h-7 text-[#C9A24D]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] to-[#e8d5a8]">
              Transform
            </span>
            <br />
            Your Space?
          </h2>

          {/* Decorative divider */}
          <div className="flex justify-center items-center gap-4 my-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A24D]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A24D]" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A24D]" />
          </div>

          {/* Subtext */}
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Let's bring your vision to life. Connect with our designers and
            start your journey to exceptional interiors.
          </p>
        </div>

        {/* Contact cards */}
        <div
          className={`flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Email Card */}
          <a
            href="mailto:jadeja@gmail.com"
            className="group flex-1 relative overflow-hidden"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-all duration-500 hover:bg-white/10">
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/0 to-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#a08050] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#C9A24D] text-xs uppercase tracking-[0.2em] mb-1">
                    Email Us
                  </p>
                  <p className="text-white font-medium text-sm md:text-base truncate">
                    jadeja@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#C9A24D] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+919725146804"
            className="group flex-1 relative overflow-hidden"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-all duration-500 hover:bg-white/10">
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/0 to-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#C9A24D] text-xs uppercase tracking-[0.2em] mb-1">
                    Call Us
                  </p>
                  <p className="text-white font-medium text-sm md:text-base">
                    +91 9725146804
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#C9A24D] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </a>
        </div>

        {/* Bottom tagline */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
            Free Consultation Available
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
