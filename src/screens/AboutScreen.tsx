import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Award, Users, Target } from "lucide-react";
import founderImage from "../assets/image.jpg";

const AboutScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
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
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Who We Are
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Crafting Impactful
                <span className="block text-[#C9A24D] mt-2">Experiences</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Excellence in Every Detail"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Jadeja Interior Studio is a premier design firm dedicated to
                transforming residential and commercial spaces into breathtaking
                environments.
              </p>
            </div>

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
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={founderImage}
                  alt="Founder - Jadeja Interior Studio"
                  className="w-full h-[500px] md:h-[590px] object-cover"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/20 rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C9A24D]/30 rounded-2xl hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C9A24D]/10 rounded-2xl hidden lg:block" />
            </div>

            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                From Our Founder
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                A Message from the{" "}
                <span className="text-[#C9A24D]">Founder</span>
              </h2>

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

      {/* Shared Blueprint Background for Values and Contact */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('https://icsaconstrucciones.com/images/bg/bg-12.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0 z-[1] opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A24D' stroke-width='0.5'%3E%3Cpath d='M0 60h120M60 0v120'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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

export default AboutScreen;
