import React, { useEffect, useRef, useState } from "react";
import ProcessSection from "../components/sections/ProcessSection";

const OfficeInteriorScreen: React.FC = () => {
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
      title: "TechHub Corporate Office",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "StartUp Co-Working Space",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Finance Hub Executive Suite",
      location: "Rajkot",
      image:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')`,
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
                Office Interior Design
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Elevate Your
                <span className="block text-[#C9A24D] mt-2">Workspace</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Where Productivity Meets Design"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Create inspiring work environments that boost productivity and
                reflect your brand identity. From executive offices to
                collaborative spaces, we design it all.
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
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
                  alt="Office Interior"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Commercial Interior Designer In Rajkot */}
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
                Best Commercial Interior{" "}
                <span className="text-[#C9A24D]">Designer In Rajkot</span>
              </h2>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                At Jadeja Interior Studio, we transform ordinary offices into
                extraordinary workspaces. As Rajkot's leading commercial
                interior design firm, we specialize in creating environments
                that inspire creativity, enhance collaboration, and boost
                employee satisfaction.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">
                    200+
                  </span>
                  <p className="text-white/60 text-sm mt-1">Offices Designed</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">15+</span>
                  <p className="text-white/60 text-sm mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">50+</span>
                  <p className="text-white/60 text-sm mt-1">
                    Corporate Clients
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-3xl font-bold text-[#C9A24D]">1L+</span>
                  <p className="text-white/60 text-sm mt-1">Sq.Ft. Designed</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop"
                alt="Commercial Interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C9A24D] p-6 hidden lg:block">
                <p className="text-white font-bold text-xl">Trusted by</p>
                <p className="text-white/80 text-3xl font-bold">
                  100+ Businesses
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
              <span className="text-[#C9A24D]">Our Office Projects</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Explore our recent commercial and office interior projects that
              showcase our commitment to creating productive work environments.
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

      {/* Office Interior Designer in Rajkot - Detailed Section */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Complete Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Office Interior Designer{" "}
                <span className="text-[#C9A24D]">in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                As a leading Office Interior Design company in Rajkot, we go
                beyond aesthetics. We create workspaces that optimize workflow,
                enhance employee well-being, and impress your clients. From
                ergonomic furniture selection to lighting design, we handle
                every detail.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                Our commercial interior services include reception area design,
                conference rooms, executive cabins, open workstations, breakout
                zones, and cafeterias. We understand that every business has
                unique needs, which is why we offer fully customized solutions.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                We work with businesses of all sizes - from startups looking for
                their first office to established corporations seeking to revamp
                their headquarters. Our team ensures minimal disruption to your
                operations during the design and implementation process.
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
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800&auto=format&fit=crop"
                alt="Office Interior Design"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Office Design Section */}
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
              Smart Workspaces
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Professional Office Design{" "}
              <span className="text-[#C9A24D]">Services in Rajkot</span>
            </h2>

            <p className="text-[#555] mt-8 text-base md:text-lg leading-relaxed">
              Looking for a professional office interior designer in Rajkot?
              Jadeja Interior Studio offers comprehensive commercial design
              services that cater to businesses across all industries. Our
              expertise spans IT companies, startups, law firms, medical
              clinics, and retail showrooms.
            </p>

            <p className="text-[#555] mt-6 text-base md:text-lg leading-relaxed">
              We focus on creating spaces that align with your brand identity
              and company culture. Our designs incorporate modern trends like
              biophilic design, flexible workstations, and technology
              integration while ensuring optimal space utilization and
              compliance with safety standards.
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
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Space Planning
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Optimal layout for maximum productivity
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
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Brand Integration
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Designs that reflect your corporate identity
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
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-4">
                  Quick Turnaround
                </h3>
                <p className="text-[#666] text-sm mt-2">
                  Minimal disruption to your business
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

export default OfficeInteriorScreen;
