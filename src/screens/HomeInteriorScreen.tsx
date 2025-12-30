import React, { useEffect, useRef, useState } from "react";
import ProcessSection from "../components/sections/ProcessSection";

const HomeInteriorScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setPreviewVisible(true),
      { threshold: 0.1 }
    );
    previewRef.current && observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      title: "Sky City Luxury Bungalow",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Royal Residency Villa",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Greenwood Premium Apartment",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')`,
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
                Home Interior Design
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Transform Your
                <span className="block text-[#C9A24D] mt-2">Living Spaces</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Where Comfort Meets Elegance"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Experience the art of living with our bespoke home interior
                designs. We create spaces that reflect your personality and
                enhance your lifestyle.
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
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
                  alt="Home Interior"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Residential Interior Designer In Rajkot */}
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
                Best Residential Interior{" "}
                <span className="text-[#C9A24D]">Designer In Rajkot</span>
              </h2>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                At Jadeja Interior Studio, we bring your home interior dreams to
                life with precision, creativity, and unmatched craftsmanship. As
                Rajkot's premier residential interior design firm, we specialize
                in creating spaces that perfectly blend functionality with
                aesthetic excellence.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">
                    500+
                  </span>
                  <p className="text-white/60 text-sm mt-1">
                    Projects Completed
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">15+</span>
                  <p className="text-white/60 text-sm mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">98%</span>
                  <p className="text-white/60 text-sm mt-1">
                    Client Satisfaction
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">50+</span>
                  <p className="text-white/60 text-sm mt-1">Expert Designers</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Residential Interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C9A24D] p-6 hidden lg:block">
                <p className="text-white font-bold text-xl">Trusted by</p>
                <p className="text-white/80 text-3xl font-bold">
                  1000+ Families
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
              A Little Preview of{" "}
              <span className="text-[#C9A24D]">Jadeja Interior</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Explore our recent home interior projects that showcase our
              commitment to excellence and attention to detail.
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#C9A24D] text-sm">{item.location}</p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Interior Designer in Rajkot - Detailed Section */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Complete Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Home Interior Designer{" "}
                <span className="text-[#C9A24D]">in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                As a company dealing with Home Interior Designing in Rajkot, our
                work is not only limited to designing. We also help you find
                reliable electricians, painters, and plumbers who ensure that
                your electrical wiring or plumbing is hidden away from obvious
                spots. We work together with all the critical components to make
                your space a functional one.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                Our Home interior design cost is highly competitive compared to
                other designers in the industry. As experts in Home interior
                design, we bring new ideas for your space that you might have
                never thought of. However, we always consult with our clients
                before making any changes to a space.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                When we look at a space, we understand the potential it has or
                its inherent pain points that can be changed. We are
                professionally trained to design a space within our client's
                budget. For a home interior designer in Rajkot, get in touch
                with us immediately.
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
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
                alt="Home Interior Design"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Budget Friendly Section */}
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
              Affordable Excellence
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Budget Friendly Residential{" "}
              <span className="text-[#C9A24D]">
                Interior Designers in Rajkot
              </span>
            </h2>

            <p className="text-[#555] mt-8 text-base md:text-lg leading-relaxed">
              If you are looking for budget-friendly residential interior
              designers in Rajkot, Jadeja Interior Studio offers highly
              affordable prices to all its clients. We have been serving clients
              in Rajkot for years, and some of the largest projects, both
              residential and commercial properties, are designed by us.
            </p>

            <p className="text-[#555] mt-6 text-base md:text-lg leading-relaxed">
              Our designers have a professional background in interior designing
              and have years of experience in the field. We plan our designs
              according to our client's budget so that it does not hurt your
              bank balance. As a result, we have access to resources that might
              not be available to you, and we can provide top-notch services and
              products for your space.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <span className="text-4xl font-bold text-[#C9A24D]">₹</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Competitive Pricing
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Best rates without compromising on quality
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <span className="text-4xl font-bold text-[#C9A24D]">✓</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Quality Materials
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Premium materials within your budget
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#C9A24D]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <span className="text-4xl font-bold text-[#C9A24D]">⏱</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Timely Delivery
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Projects completed on schedule
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

export default HomeInteriorScreen;
