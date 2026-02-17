import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";

const ServicesScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section with Image */}
      <section
        ref={sectionRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Our Services
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Transforming
                <span className="block text-[#C9A24D] mt-2">Your Spaces</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Excellence in Every Detail"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                From concept to completion, we offer comprehensive interior
                solutions tailored to your unique vision. Explore our range of
                services designed to create stunning, functional spaces.
              </p>
            </div>

            {/* Right - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                  alt="Interior Design"
                  className="w-full h-[400px] md:h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Bento Style */}
      <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#C9A24D]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C9A24D]/8 rounded-full blur-[120px]" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A24D]/15" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A24D]/15" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              What We Offer
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mt-4">
              Our <span className="text-[#C9A24D]">Services</span>
            </h2>

            <p className="text-white/50 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
              Comprehensive interior solutions tailored to transform your vision
              into stunning reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/services/${service.id}`);
                  window.scrollTo(0, 0);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden cursor-pointer
                  ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${
                    index === 0
                      ? "aspect-[16/10] lg:aspect-auto lg:h-full"
                      : "aspect-[4/3]"
                  }
                  transition-all duration-700
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title || service.label}
                  className={`w-full h-full object-cover transition-all duration-700
                    ${
                      hoveredIndex === index
                        ? "scale-110 brightness-[0.3]"
                        : "scale-100 brightness-[0.6]"
                    }`}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Border frame */}
                <div
                  className={`absolute inset-3 border transition-all duration-500 pointer-events-none
                    ${
                      hoveredIndex === index
                        ? "border-[#C9A24D]/50"
                        : "border-white/10"
                    }`}
                />

                {/* Corner accents */}
                <div
                  className={`absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#C9A24D]
                    transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />
                <div
                  className={`absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#C9A24D]
                    transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {/* Service number - Bold White */}
                  <span
                    className={`absolute top-6 right-6 text-6xl md:text-7xl font-bold text-white/80 transition-all duration-500
                      ${hoveredIndex === index ? "text-[#C9A24D]" : ""}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-white text-xl md:text-2xl font-semibold tracking-wide mb-2
                      transition-all duration-500 ${
                        hoveredIndex === index ? "text-[#C9A24D]" : ""
                      }`}
                  >
                    {service.title || service.label}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-white/60 text-sm leading-relaxed max-w-sm transition-all duration-500
                      ${hoveredIndex === index ? "text-white/80" : ""}`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Gold glow on hover */}
                <div
                  className={`absolute inset-0 shadow-[inset_0_0_60px_rgba(199,167,106,0.1)] pointer-events-none
                    transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-16">
            <span className="text-[#C9A24D]/40 tracking-[0.3em] text-xs uppercase">
              Excellence in Every Detail
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
