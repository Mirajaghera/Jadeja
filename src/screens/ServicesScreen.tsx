import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Award, Users, Target } from "lucide-react";
import { services } from "../data/services";
import founderImage from "../assets/image.jpg";

const ServicesScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Use shared services data
  const servicesWithImages = services.map((service) => ({
    name: service.title || service.label,
    desc: service.shortDesc,
    image: service.image,
  }));

  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      desc: "We deliver exceptional quality in every project with attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      desc: "Your vision is our priority. We work closely with you at every step.",
    },
    {
      icon: Target,
      title: "Timely Delivery",
      desc: "We respect your time and ensure projects are completed on schedule.",
    },
  ];

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

      {/* Founder Section */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Founder Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={founderImage}
                  alt="Founder - Jadeja Interior Studio"
                  className="w-full h-[500px] md:h-[590px] object-cover"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/20 rounded-2xl" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C9A24D]/30 rounded-2xl hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C9A24D]/10 rounded-2xl hidden lg:block" />
            </div>

            {/* Right - Founder Message */}
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                From Our Founder
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                A Message from the{" "}
                <span className="text-[#C9A24D]">Founder</span>
              </h2>

              {/* Quote */}
              <div className="mt-8 relative">
                <svg
                  className="absolute -top-4 -left-4 w-12 h-12 text-[#C9A24D]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed italic pl-8">
                  "Every space has a story waiting to be told. At Jadeja
                  Interior Studio, we don't just design interiors – we craft
                  experiences that reflect your personality, aspirations, and
                  lifestyle. Our commitment is to transform your vision into
                  reality with uncompromising quality and attention to detail."
                </p>
              </div>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                With over 15 years of experience in the interior design
                industry, we have had the privilege of transforming thousands of
                homes and commercial spaces across Rajkot. Our philosophy is
                simple – listen to our clients, understand their needs, and
                deliver beyond expectations.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[#C9A24D] font-semibold text-xl">
                  Mr. Jadeja
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Founder & Principal Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer - Antra Style */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-white text-xs tracking-[0.25em] uppercase font-semibold">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
              Our <span className="text-[#C9A24D]">Services</span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left - Image Display (Hidden on mobile, shown on lg+) */}
            <div className="hidden lg:block relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl sticky top-32">
                {/* All images stacked, only active one visible */}
                {servicesWithImages.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeService === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Glassmorphism Description Box */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/20 backdrop-blur-xl rounded-xl p-4 lg:p-6 border border-white/30">
                  <span className="text-[#C9A24D] text-xs font-bold tracking-wider">
                    0{activeService + 1}
                  </span>
                  <h4 className="text-white text-lg lg:text-xl font-bold mt-1">
                    {servicesWithImages[activeService].name}
                  </h4>
                  <p className="text-white/80 text-xs lg:text-sm mt-2">
                    {servicesWithImages[activeService].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Service List */}
            <div className="order-1 lg:order-2">
              {servicesWithImages.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group cursor-pointer py-4 sm:py-5 md:py-6 border-b transition-all duration-500 ${
                    activeService === index
                      ? "border-[#C9A24D]/50"
                      : "border-[#1a1a1a]/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
                    {/* Number */}
                    <span
                      className={`text-xs sm:text-sm font-bold transition-all duration-500 ${
                        activeService === index
                          ? "text-[#C9A24D]"
                          : "text-white/30"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3
                      className={`flex-1 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-500 ${
                        activeService === index
                          ? "text-[#C9A24D] translate-x-1 sm:translate-x-2"
                          : "text-white"
                      }`}
                    >
                      {service.name}
                    </h3>

                    {/* Arrow indicator */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeService === index
                          ? "bg-[#C9A24D] scale-100"
                          : "bg-transparent border border-[#1a1a1a]/20 scale-90"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ${
                          activeService === index
                            ? "text-white"
                            : "text-white/50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            activeService === index
                              ? "M17 8l4 4m0 0l-4 4m4-4H3"
                              : "M7 17l9.2-9.2M17 17V7H7"
                          }
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Image - Shows below active item on mobile only */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                      activeService === index
                        ? "max-h-64 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white/90 text-xs sm:text-sm">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Blueprint Background Container for Why Choose Us and Get In Touch */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('https://icsaconstrucciones.com/images/bg/bg-12.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gold Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A24D' stroke-width='0.5'%3E%3Cpath d='M0 60h120M60 0v120'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/70 z-[2]" />

        {/* Our Values */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Why Choose Us
                <span className="w-8 h-px bg-[#C9A24D]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-3">
                Our <span className="text-[#C9A24D]">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-2 border border-[#C9A24D]/10"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C9A24D] to-[#a08050] rounded-full flex items-center justify-center">
                    <value.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Contact Us
                <span className="w-8 h-px bg-[#C9A24D]" />
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                Get In <span className="text-[#C9A24D]">Touch</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Phone */}
              <a
                href="tel:+919725146804"
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md border border-[#C9A24D]/10 
                  hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <Phone className="w-10 h-10 text-[#C9A24D] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#1a1a1a]/60 text-xs uppercase tracking-wider mb-2">
                  Call Us
                </span>
                <span className="text-[#1a1a1a] font-semibold text-lg">
                  +91 9725146804
                </span>
                <span className="text-[#1a1a1a]/50 text-sm mt-1">
                  Manan Khunt
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:jadeja@gmail.com"
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md border border-[#C9A24D]/10 
                  hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <Mail className="w-10 h-10 text-[#C9A24D] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#1a1a1a]/60 text-xs uppercase tracking-wider mb-2">
                  Email Us
                </span>
                <span className="text-[#1a1a1a] font-medium text-sm text-center break-all">
                  jadeja@gmail.com
                </span>
              </a>

              {/* Address */}
              <div
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md border border-[#C9A24D]/10 
                  hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <MapPin className="w-10 h-10 text-[#C9A24D] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#1a1a1a]/60 text-xs uppercase tracking-wider mb-2">
                  Visit Us
                </span>
                <span className="text-[#1a1a1a] font-medium text-sm text-center">
                  219, Shyamal sanskruti, movdi pal road,
                  <br />
                  nr. Vagad chowk, Rajkot - 360004
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesScreen;
