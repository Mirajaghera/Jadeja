import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, MapPin, Plus, Minus } from "lucide-react";

const WardrobeScreen: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isTypesVisible, setIsTypesVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setter(true),
        { threshold: 0.1 }
      );
      ref.current && observer.observe(ref.current);
      return observer;
    };

    const observers = [
      createObserver(introRef, setIsIntroVisible),
      createObserver(typesRef, setIsTypesVisible),
      createObserver(galleryRef, setIsGalleryVisible),
      createObserver(processRef, setIsProcessVisible),
      createObserver(faqRef, setIsFaqVisible),
    ];

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const wardrobeTypes = [
    {
      name: "Sliding Door Wardrobe",
      desc: "Space-saving design perfect for compact bedrooms",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600",
    },
    {
      name: "Hinged Door Wardrobe",
      desc: "Classic design with full accessibility",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600",
    },
    {
      name: "Walk-in Wardrobe",
      desc: "Luxurious personal dressing space",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600",
    },
    {
      name: "L-Shaped Wardrobe",
      desc: "Maximizes corner space efficiently",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600",
    },
    {
      name: "Floor-to-Ceiling Wardrobe",
      desc: "Maximum storage with seamless look",
      image:
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=600",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=400",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400",
    "https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=400",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400",
    "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=400",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understanding Storage Needs",
      desc: "We assess your wardrobe requirements, clothing types, and storage preferences.",
      icon: (
        <svg
          className="w-12 h-12 text-[#C9A24D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Wardrobe Design & Planning",
      desc: "Custom 3D designs with optimized compartments, drawers, and accessories.",
      icon: (
        <svg
          className="w-12 h-12 text-[#C9A24D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Manufacturing",
      desc: "Precision manufacturing with premium materials and durable hardware.",
      icon: (
        <svg
          className="w-12 h-12 text-[#C9A24D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M17 18h1" />
          <path d="M12 18h1" />
          <path d="M7 18h1" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Installation & Finishing",
      desc: "Professional installation with perfect fit and hardware alignment.",
      icon: (
        <svg
          className="w-12 h-12 text-[#C9A24D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  const relatedServices = [
    {
      id: "modular-kitchens",
      name: "Modular Kitchens",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400",
    },
    {
      id: "bedroom-interior",
      name: "Bedroom Interior",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400",
    },
    {
      id: "living-room-interior",
      name: "Living Room Interior",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400",
    },
  ];

  const faqs = [
    {
      question: "What is the cost of modular wardrobe in Rajkot?",
      answer:
        "Modular wardrobe costs depend on size, type, and finish. Basic sliding wardrobes start from ₹50,000, while premium walk-in wardrobes can range from ₹2-5 lakhs. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "How long does it take to install a modular wardrobe?",
      answer:
        "Standard wardrobe installation takes 2-3 days. Manufacturing takes 15-20 days after design approval. Walk-in wardrobes may require additional time depending on complexity.",
    },
    {
      question: "Which wardrobe type is best for small bedrooms?",
      answer:
        "Sliding door wardrobes are ideal for small bedrooms as they don't require clearance for door opening. Floor-to-ceiling designs maximize vertical space utilization.",
    },
    {
      question: "Can you customize wardrobe internals?",
      answer:
        "Absolutely! We customize every aspect including hanging rods, drawer configurations, shoe racks, tie/belt holders, accessory trays, and pull-out baskets based on your storage needs.",
    },
    {
      question: "What materials do you use for wardrobe construction?",
      answer:
        "We use premium BWR plywood for structure, MDF/HDF for surfaces, and high-quality laminates, acrylic, or lacquer finishes. All hardware is from trusted brands like Hettich and Hafele.",
    },
    {
      question: "Do you provide mirror and lighting in wardrobes?",
      answer:
        "Yes, we integrate full-length mirrors, LED strip lighting, and sensor-activated internal lights as per your preference. These enhance both functionality and aesthetics.",
    },
    {
      question: "What is the warranty on modular wardrobes?",
      answer:
        "We provide a 5-year warranty on wardrobe structure and 2-year warranty on hardware. This covers manufacturing defects and normal wear issues.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2000&auto=format&fit=crop')`,
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
                Wardrobe Design
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Modular Bedroom
                <span className="block text-[#C9A24D] mt-2">
                  Wardrobe Design
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Organized Spaces, Simplified Living"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Transform your storage experience with our custom modular
                wardrobes. From space-saving sliding designs to luxurious
                walk-in closets, we create solutions that keep your life
                organized and stylish.
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                  alt="Wardrobe Interior"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* SECTION 1: Intro / SEO Content */}
      <section ref={introRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isIntroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                About Our Services
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                Modular Bedroom Wardrobe{" "}
                <span className="text-[#C9A24D]">Design in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                At{" "}
                <strong className="text-[#C9A24D]">
                  Jadeja Interior Studio
                </strong>
                , we design wardrobes that go beyond storage. Our modular
                solutions are tailored to your lifestyle, ensuring every piece
                of clothing and accessory has its{" "}
                <strong className="text-white">perfect place</strong>.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                With{" "}
                <strong className="text-white">15+ years of expertise</strong>{" "}
                and over <strong className="text-white">1200+ wardrobes</strong>{" "}
                crafted across Rajkot, we bring precision, quality, and
                innovative design to every project.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                From compact{" "}
                <strong className="text-[#C9A24D]">sliding wardrobes</strong> to
                expansive{" "}
                <strong className="text-[#C9A24D]">walk-in closets</strong>, our
                team delivers customized solutions with premium finishes and
                world-class hardware.
              </p>

              <a
                href="tel:+919725146804"
                className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-6 py-3 font-semibold hover:bg-[#a08050] transition-all duration-300 mt-8"
              >
                Book Free Consultation
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">1200+</span>
                <p className="text-white/60 text-sm mt-2">Wardrobes Crafted</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">15+</span>
                <p className="text-white/60 text-sm mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">100%</span>
                <p className="text-white/60 text-sm mt-2">Customizable</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">5yr</span>
                <p className="text-white/60 text-sm mt-2">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Modular Wardrobe Types */}
      <section
        ref={typesRef}
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `url('https://icsaconstrucciones.com/images/bg/bg-12.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/90 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isTypesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Explore Options
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Modular Wardrobe <span className="text-[#C9A24D]">Types</span>
            </h2>

            <p className="text-[#555] max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Choose from a variety of wardrobe styles designed for different
              spaces and needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wardrobeTypes.map((type, index) => (
              <div
                key={index}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isTypesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {type.name}
                  </h3>
                  <p className="text-white/70 text-sm">{type.desc}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#C9A24D] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Readymade Wardrobe Designs Gallery */}
      <section ref={galleryRef} className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isGalleryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Inspiration Gallery
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Readymade Wardrobe <span className="text-[#C9A24D]">Designs</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Browse our extensive collection of wardrobe designs for
              inspiration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`group aspect-square overflow-hidden rounded-lg cursor-pointer ${
                  isGalleryVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={img}
                  alt={`Wardrobe Design ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Process */}
      <section ref={processRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isProcessVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              How We Work
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Your Dream Wardrobe{" "}
              <span className="text-[#C9A24D]">Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative p-8 bg-[#0a0a0a] border border-white/10 hover:border-[#C9A24D]/50 transition-all duration-500 group ${
                  isProcessVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{step.icon}</div>
                <span className="text-[#C9A24D] font-bold text-sm">
                  {step.number}
                </span>
                <h3 className="text-white text-xl font-semibold mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#C9A24D]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: You Might Also Like */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Explore More
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              You Might <span className="text-[#C9A24D]">Also Like</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold text-center px-4">
                    {service.name}
                  </h3>
                </div>
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Dual CTA */}
      <section
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `url('https://icsaconstrucciones.com/images/bg/bg-12.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/90 z-[1]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 md:p-10 bg-[#1a1a1a] rounded-2xl text-center hover:bg-[#C9A24D] transition-all duration-500"
            >
              <MapPin className="w-12 h-12 mx-auto text-[#C9A24D] group-hover:text-white transition-colors mb-4" />
              <h3 className="text-white text-2xl font-semibold mb-2">
                Experience Our Store
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Visit our showroom to explore wardrobe designs in person
              </p>
            </a>

            <a
              href="tel:+919725146804"
              className="group p-8 md:p-10 bg-[#C9A24D] rounded-2xl text-center hover:bg-[#1a1a1a] transition-all duration-500"
            >
              <Phone className="w-12 h-12 mx-auto text-white mb-4" />
              <h3 className="text-white text-2xl font-semibold mb-2">
                Request a Callback
              </h3>
              <p className="text-white/80 group-hover:text-white/60 transition-colors">
                Our design experts will call you back within 24 hours
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQs */}
      <section ref={faqRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isFaqVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Have Questions?
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Interior Designer <span className="text-[#C9A24D]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-500 ${
                  isFaqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  {activeAccordion === index ? (
                    <Minus className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final SEO Content */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Modular Bedroom Wardrobe Interior Designer in Rajkot
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              Jadeja Interior Studio has been crafting premium modular wardrobes
              in Rajkot for over 15 years. Our expertise in understanding
              storage needs and creating customized solutions has made us the
              preferred choice for homeowners seeking organized and stylish
              wardrobes.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              We understand that a wardrobe is more than just storage – it's a
              personal space that needs to accommodate your lifestyle. Our
              designs consider everything from your clothing collection to daily
              routines, ensuring every compartment serves a purpose.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              Our modular wardrobe solutions include sliding door wardrobes,
              hinged wardrobes, walk-in closets, corner wardrobes, and
              floor-to-ceiling designs. Each wardrobe features customized
              internals including hanging spaces, drawers, shelves, and
              specialty storage for shoes, accessories, and more.
            </p>

            <p className="text-white/60 leading-relaxed">
              Whether you're looking for a compact wardrobe for a guest room or
              an elaborate walk-in closet for your master bedroom, Jadeja
              Interior Studio delivers quality craftsmanship at competitive
              prices. Contact us today for a free consultation and let us create
              the perfect wardrobe for your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WardrobeScreen;
