import React, { useEffect, useRef, useState } from "react";
import ProcessSection from "../components/sections/ProcessSection";

const InteriorFurnishingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setPreviewVisible(true),
      { threshold: 0.1 },
    );
    previewRef.current && observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      title: "Premium Living Room Setup",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Bedroom Furnishing",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Modern Dining Space",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Interior Furnishing
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Premium
                <span className="block text-[#C9A24D] mt-2">
                  Furnishing Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Furniture That Defines Your Style"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Transform your spaces with our curated collection of premium
                furniture and furnishing accessories. From sofas to curtains, we
                provide everything to complete your interiors.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+919725146804"
                  className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold hover:bg-[#a08050] transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
                  alt="Interior Furnishing"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={sectionRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Why Choose Us
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Best Furnishing{" "}
                <span className="text-[#C9A24D]">Services in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                At Jadeja Interior Studio, we offer comprehensive furnishing
                solutions including custom furniture, upholstery, curtains,
                blinds, carpets, and decorative accessories. Our expert team
                helps you select the perfect pieces that complement your
                interior design.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">
                    1000+
                  </span>
                  <p className="text-white/60 text-sm mt-1">Spaces Furnished</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">
                    100+
                  </span>
                  <p className="text-white/60 text-sm mt-1">Brand Partners</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">
                    Custom
                  </span>
                  <p className="text-white/60 text-sm mt-1">Made Furniture</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">3yr</span>
                  <p className="text-white/60 text-sm mt-1">Warranty</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop"
                alt="Furnishing Solutions"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C9A24D] p-6 hidden lg:block">
                <p className="text-white font-bold text-xl">Premium</p>
                <p className="text-white/80 text-3xl font-bold">
                  Quality Assured
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
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
        <ProcessSection />
      </div>

      {/* Portfolio Preview Section */}
      <section ref={previewRef} className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              previewVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Our Work
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Furnishing <span className="text-[#C9A24D]">Portfolio</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Explore our beautifully furnished spaces showcasing our expertise
              in furniture selection and styling.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                  previewVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#C9A24D] text-sm">{item.location}</p>
                </div>
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Section */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Complete Furnishing
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Interior Furnishing{" "}
                <span className="text-[#C9A24D]">in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Our interior furnishing services cover everything from selecting
                the perfect sofa set to choosing the right curtain fabric. We
                work with premium brands and skilled artisans to deliver
                furniture that combines aesthetics with durability.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                Whether you need a complete home furnishing package or
                individual pieces, we offer flexible solutions. Our range
                includes living room furniture, bedroom sets, dining tables,
                study units, outdoor furniture, and soft furnishings.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                We also specialize in custom-made furniture designed
                specifically for your space. Our craftsmen can create bespoke
                pieces that perfectly fit your requirements and reflect your
                personal style.
              </p>

              <a
                href="tel:+919725146804"
                className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold hover:bg-[#a08050] transition-all duration-300 mt-8"
              >
                Contact Us Today
              </a>
            </div>

            <div className="sticky top-32">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
                alt="Interior Furnishing"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="relative py-20 md:py-28"
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
        <div className="absolute inset-0 bg-white/80 z-[2]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Our Furnishing Range
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Complete Furnishing{" "}
              <span className="text-[#C9A24D]">Solutions</span>
            </h2>

            <p className="text-[#555] mt-8 text-base md:text-lg leading-relaxed">
              From statement furniture pieces to finishing touches, we provide
              everything you need to create a beautifully furnished space.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <svg
                  className="w-12 h-12 text-[#C9A24D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                  <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1H6v-1a2 2 0 0 0-4 0Z" />
                  <path d="M4 18v2" />
                  <path d="M20 18v2" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Furniture
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Sofas, beds, dining sets & more
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <svg
                  className="w-12 h-12 text-[#C9A24D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 3v18" />
                  <path d="M21 3v18" />
                  <path d="M3 7h18" />
                  <path d="M3 11h18" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Soft Furnishings
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Curtains, blinds, carpets & rugs
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <svg
                  className="w-12 h-12 text-[#C9A24D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Decor & Accessories
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Art, lamps, mirrors & accents
                </p>
              </div>
            </div>

            <a
              href="tel:+919725146804"
              className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold hover:bg-[#a08050] transition-all duration-300 mt-12"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorFurnishingScreen;
