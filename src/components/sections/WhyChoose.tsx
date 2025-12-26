import React, { useEffect, useRef, useState } from "react";

// Service data with images
const services = [
  {
    title: "2D Design",
    shortDesc: "Professional 2D floor plans and layout designs for your space.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "3D Design",
    shortDesc: "Realistic 3D visualization to see your space before execution.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "VR Tool",
    shortDesc: "Experience your future space with immersive VR technology.",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Turnkey Projects",
    shortDesc: "Complete end-to-end project management from start to finish.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Renovation",
    shortDesc: "Transform existing spaces with modern renovation solutions.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Carpentry Work",
    shortDesc: "Expert carpentry services for custom furniture and woodwork.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Labor Services",
    shortDesc:
      "Professional electrician, painting, and skilled labor services.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
  },
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-premium-dark overflow-hidden"
    >
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
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
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
                alt={service.title}
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
                  {service.title}
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
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#C9A24D]/40 tracking-[0.3em] text-xs uppercase">
            Excellence in Every Detail
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
