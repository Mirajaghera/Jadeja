import React, { useEffect, useRef, useState } from "react";
import { Layers, Users, CheckCircle, PenTool } from "lucide-react";

const ExcellenceBox: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "Premium Materials",
      desc: "Top-grade materials ensuring exceptional durability and timeless elegance.",
      icon: Layers,
      number: "01",
    },
    {
      title: "Skilled Designers",
      desc: "Expert creativity combined with functional precision and innovation.",
      icon: Users,
      number: "02",
    },
    {
      title: "Transparent Process",
      desc: "Clear timelines, honest communication, and no hidden costs.",
      icon: CheckCircle,
      number: "03",
    },
    {
      title: "Personalized Approach",
      desc: "Tailored designs to match your unique style and space requirements.",
      icon: PenTool,
      number: "04",
    },
  ];

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
      className="relative py-24 md:py-32 overflow-hidden z-[2]"
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Header Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Why Choose Us
            </span>

            <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mt-4 leading-tight">
              Experience
              <span className="block text-[#C9A24D]">Excellence</span>
              In Every Detail
            </h2>

            <p className="text-[#666] mt-6 text-sm md:text-base leading-relaxed max-w-md">
              We combine world-class craftsmanship with personalized attention
              to transform your spaces into stunning works of art.
            </p>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-2 gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 shadow-lg border border-[#e8e8e8]
                  hover:shadow-2xl hover:border-[#C9A24D]/30 hover:-translate-y-2
                  transition-all duration-500
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-[#f0f0f0] group-hover:text-[#C9A24D]/20 transition-colors duration-500">
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#C9A24D] to-[#a08050] 
                    flex items-center justify-center mb-5 
                    group-hover:scale-110 transition-transform duration-500"
                >
                  <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[#1a1a1a] font-semibold text-base mb-2 group-hover:text-[#C9A24D] transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#888] text-xs leading-relaxed">
                  {item.desc}
                </p>

                {/* Gold line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] to-transparent
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#C9A24D]/50 tracking-[0.3em] text-xs uppercase">
            Trusted by 75+ Happy Clients
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceBox;
