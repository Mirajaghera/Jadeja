import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop",
    headline1: "Transforming Spaces",
    headline2: "Into Masterpieces",
    tagline: "Luxury Living Redefined",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
    headline1: "Where Elegance",
    headline2: "Meets Innovation",
    tagline: "Modern Interior Excellence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    headline1: "Crafting Dreams",
    headline2: "With Timeless Design",
    tagline: "Premium Design Studio",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const changeSlide = (newIndex: number) => {
    if (isTransitioning || newIndex === currentIndex) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setImageKey((prev) => prev + 1);
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentIndex + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* 🔥 Premium Animated Background */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1400ms] ease-out
            ${
              index === currentIndex
                ? "opacity-100 scale-110 blur-0 brightness-110 contrast-105 saturate-125"
                : "opacity-0 scale-125 blur-sm brightness-75 contrast-90 saturate-75"
            }`}
        >
          <img
            key={index === currentIndex ? imageKey : index}
            src={slide.image}
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          />
        </div>
      ))}

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 z-[2]" />

      {/* Gold overlay for premium touch */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C9A24D]/10 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-[5] flex flex-col items-center justify-center text-center h-full px-6">
        {/* Tagline */}
        <span className="text-[#C9A24D] tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
          {currentSlide.tagline}
        </span>

        {/* Headline */}
        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl uppercase font-light drop-shadow-xl mb-3">
          {currentSlide.headline1}
        </h1>

        <h1 className="text-[#C9A24D] text-4xl sm:text-6xl lg:text-7xl uppercase font-light drop-shadow-xl mb-8">
          {currentSlide.headline2}
        </h1>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-[#C9A24D] opacity-75 mb-8"></div>

        {/* Sub heading */}
        <p className="text-white/80 max-w-xl text-sm sm:text-lg leading-relaxed px-2 mb-10">
          We craft modern, functional, and aesthetic environments for homes,
          offices, and commercial spaces that inspire and elevate everyday
          living.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4">
          <button
            className="bg-[#C9A24D] text-black uppercase tracking-wide py-3 px-8 text-sm hover:bg-[#b89558] transition-all"
            onClick={() => navigate("/portfolio")}
          >
            Explore Projects
          </button>

          <button
            className="border border-[#C9A24D] text-white uppercase tracking-wide py-3 px-8 text-sm hover:bg-[#C9A24D]/20 transition-all"
            onClick={() => window.open("https://wa.me/919725146804")}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-6 bottom-10 flex flex-col gap-3 z-[5]">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            className={`transition-all ${
              idx === currentIndex
                ? "w-1 h-9 bg-[#C9A24D]"
                : "w-1 h-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
