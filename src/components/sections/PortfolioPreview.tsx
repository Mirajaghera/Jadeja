import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

// Import portfolio images dynamically
const imageModules = import.meta.glob("../../assets/Porfolio/*.jpg", {
  eager: true,
}) as Record<string, { default: string }>;

const allImages = Object.entries(imageModules)
  .map(([path, module]) => ({
    path,
    src: module.default,
    num: parseInt(path.match(/(\d+)/)?.[1] || "0"),
  }))
  .sort((a, b) => a.num - b.num)
  .slice(0, 6)
  .map((item) => item.src);

interface PortfolioPreviewProps {
  setActiveTab: (tab: string) => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  setActiveTab,
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-premium-dark relative overflow-hidden"
    >
      {/* Premium ambient lighting effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C9A24D]/8 rounded-full blur-[100px]" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#C9A24D]/15" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#C9A24D]/15" />

      {/* Floating gold particles */}
      <div className="absolute top-20 right-20 w-1 h-1 bg-[#C9A24D]/40 rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-16 w-1.5 h-1.5 bg-[#C9A24D]/30 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-[#C9A24D]/50 rounded-full animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-[#C9A24D] text-xs tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Our Portfolio
            </span>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mt-4">
              Selected
              <span className="text-[#C9A24D] block md:inline">
                &nbsp;Works
              </span>
            </h2>

            <p className="text-white/50 text-sm sm:text-base max-w-md mt-4 leading-relaxed">
              A glimpse of our premium execution, luxury interiors, and elegant
              detailing that define modern living.
            </p>
          </div>

          {/* Desktop button with glow */}
          <button
            onClick={() => setActiveTab("gallery")}
            className="hidden md:flex items-center gap-2 px-8 py-4 border border-[#C9A24D]/40 text-[#C9A24D] 
              hover:bg-[#C9A24D] hover:text-black hover:shadow-[0_0_30px_rgba(199,167,106,0.3)]
              transition-all duration-500 font-medium tracking-wider uppercase text-sm mt-8 md:mt-0"
          >
            View Full Portfolio
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Premium Grid with varied sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {allImages.map((src, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden cursor-pointer
                ${
                  index === 0 || index === 4
                    ? "md:row-span-2 aspect-[3/4]"
                    : "aspect-[4/3]"
                }
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? `opacity-100 translate-y-0`
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Gold border frame */}
              <div
                className={`absolute inset-0 border transition-all duration-500 z-10 pointer-events-none
                  ${
                    hoveredIndex === index
                      ? "border-[#C9A24D]/60"
                      : "border-white/10"
                  }`}
              />

              {/* Corner accents */}
              <div
                className={`absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#C9A24D] z-10
                  transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#C9A24D] z-10
                  transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              />

              {/* Skeleton loader */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
              )}

              {/* Image */}
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [index]: true }))
                }
                className={`w-full h-full object-cover transition-all duration-700
                  ${
                    hoveredIndex === index
                      ? "scale-110 brightness-50"
                      : "scale-100 brightness-100"
                  }
                  ${loadedImages[index] ? "opacity-100" : "opacity-0"}`}
              />

              {/* Premium hover overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[#C9A24D] text-xs tracking-[0.2em] uppercase mb-2 block">
                    Interior Design
                  </span>
                  <h4 className="text-white text-lg font-medium mb-3">
                    Project {String(index + 1).padStart(2, "0")}
                  </h4>
                  <div className="flex items-center gap-2 text-white/80 text-sm group/btn">
                    <span className="group-hover/btn:text-[#C9A24D] transition-colors">
                      View Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:text-[#C9A24D] transition-all group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Gold glow on hover */}
              <div
                className={`absolute inset-0 shadow-[inset_0_0_40px_rgba(199,167,106,0.15)] pointer-events-none
                  transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom section with stamp */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between mt-16 pt-10 border-t border-white/5
            transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-white/40 text-sm tracking-wide text-center md:text-left mb-6 md:mb-0">
            Crafting spaces that inspire, since 2024
          </p>

          {/* Mobile CTA */}
          <button
            onClick={() => setActiveTab("gallery")}
            className="md:hidden px-8 py-4 bg-[#C9A24D] text-black uppercase font-semibold tracking-wider text-sm
              hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(199,167,106,0.2)]"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
