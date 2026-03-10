import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "Rahul Sharma",
      role: "Homeowner",
      text: "The team at Jadeja transformed our space beautifully. Their attention to detail and quality was exceptional.",
      initial: "R",
      rating: 5,
    },
    {
      name: "Neha Patel",
      role: "Business Owner",
      text: "Professional, creative, and efficient. They understood our requirements perfectly and delivered more than expected.",
      initial: "N",
      rating: 5,
    },
    {
      name: "Arjun Verma",
      role: "Architect",
      text: "From planning to execution, Jadeja made the entire process seamless. Highly recommended for premium interiors.",
      initial: "A",
      rating: 5,
    },
    {
      name: "Sanya & Kunal",
      role: "Happy Couple",
      text: "Outstanding design and flawless execution! We are extremely satisfied with the final results.",
      initial: "S",
      rating: 5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 },
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden z-[2]"
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/75 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-[#C9A24D]" />
            Testimonials
            <span className="w-8 h-px bg-[#C9A24D]" />
          </span>

          <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mt-4">
            Trusted Residential & Commercial Interior Designers in Rajkot
          </h2>

          <p className="text-[#666] max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
            Real feedback from clients who trusted Jadeja with their vision.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl p-8 shadow-lg border border-[#e0e0e0]
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
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-[#e8e8e8] group-hover:text-[#C9A24D]/30 
                  transition-colors duration-500"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(client.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#C9A24D] fill-[#C9A24D]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#555] text-sm leading-relaxed mb-6 italic">
                "{client.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent mb-6" />

              {/* Client info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#a08050] 
                    flex items-center justify-center text-[#1a1a1a] font-semibold text-lg
                    group-hover:scale-110 transition-transform duration-500"
                >
                  {client.initial}
                </div>
                <div>
                  <h4 className="text-[#1a1a1a] font-semibold text-sm">
                    {client.name}
                  </h4>
                  <span className="text-[#999] text-xs">{client.role}</span>
                </div>
              </div>

              {/* Gold corner accent on hover */}
              <div
                className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#C9A24D]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#e0e0e0]
            transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "90+", label: "Happy Clients" },
            { number: "Award Winning", label: "Service Quality" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-[#C9A24D]">
                {stat.number}
              </span>
              <span className="text-[#999] text-xs md:text-sm uppercase tracking-wider mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
