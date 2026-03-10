import React, { useEffect, useRef, useState } from "react";

const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title:
        "Residential Interior Design – Living Room, Bedroom & Kitchen Interiors",
      desc: "Tailored residential spaces that perfectly reflect your lifestyle.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
    },
    {
      number: "02",
      title: "Commercial & Office Interior Design Solutions",
      desc: "Inspiring workspaces designed for productivity and brand identity.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop",
    },
    {
      number: "03",
      title: "Modern & Minimalist Interior Design Concepts",
      desc: "Clean lines and sophisticated designs that maximize space and light.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Turnkey & Custom Interior Design Services in Rajkot",
      desc: "End-to-end management for a seamless and hassle-free experience.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 },
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden z-[2]"
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="uppercase tracking-[0.25em] text-[#C9A24D] text-xs font-semibold">
            What We Offer
          </span>

          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
            Our Interior Design Services in Rajkot
          </h2>

          <p className="mt-4 text-[#555] text-base">
            Comprehensive interior solutions tailored to transform your vision
            into stunning reality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } delay-${index * 100}`}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative">
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  <span className="text-[#C9A24D]">{step.number}.</span>{" "}
                  {step.title}
                </h3>

                <p className="text-[#666] text-sm leading-relaxed">
                  {step.desc}
                </p>

                <span className="absolute bottom-3 right-4 text-6xl font-extrabold text-[#C9A24D]/10">
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
