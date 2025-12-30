import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, MapPin, Plus, Minus } from "lucide-react";

const LivingRoomInteriorScreen: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isEssentialsVisible, setIsEssentialsVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const essentialsRef = useRef<HTMLDivElement>(null);
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
      createObserver(essentialsRef, setIsEssentialsVisible),
      createObserver(galleryRef, setIsGalleryVisible),
      createObserver(processRef, setIsProcessVisible),
      createObserver(faqRef, setIsFaqVisible),
    ];

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const essentials = [
    {
      name: "Sofa Set",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300",
    },
    {
      name: "TV Unit",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=300",
    },
    {
      name: "Cabinets",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=300",
    },
    {
      name: "Bookshelves",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    },
    {
      name: "Shoe Racks",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=300",
    },
    {
      name: "Recliners",
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=300",
    },
    {
      name: "Side Tables",
      image:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=300",
    },
    {
      name: "Coffee Tables",
      image:
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=300",
    },
    {
      name: "Wall Shelves",
      image:
        "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=300",
    },
    {
      name: "Lounge Chairs",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=300",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Meet Design Experts",
      desc: "Connect with our living room specialists to discuss your vision, lifestyle, and space requirements.",
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
      title: "Personalized Design",
      desc: "Receive 3D visualizations and floor plans customized for your living space.",
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
      desc: "Premium furniture crafted with precision using top-quality materials and finishes.",
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
      title: "Installation & Styling",
      desc: "Expert installation with final styling touches to complete your dream living room.",
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
      id: "wardrobe",
      name: "Wardrobe Designs",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400",
    },
  ];

  const faqs = [
    {
      question: "What is the cost of modular living room interior in Rajkot?",
      answer:
        "Living room interior costs vary based on room size, furniture selection, and finishes. Basic modular setups start from ₹2 lakhs, while premium designs with imported materials can range from ₹5-10 lakhs. We provide detailed quotes after a site visit.",
    },
    {
      question: "How long does it take to complete a living room project?",
      answer:
        "A typical modular living room project takes 30-45 days from design approval to final installation. This includes manufacturing, delivery, and on-site installation. Custom furniture may require additional time.",
    },
    {
      question: "Do you provide custom sofa designs?",
      answer:
        "Yes, we specialize in custom sofa designs. You can choose the fabric, color, configuration, and size. We offer L-shaped, U-shaped, sectional, and modular sofa options.",
    },
    {
      question: "Can you work with my existing living room furniture?",
      answer:
        "Absolutely! We can design around your existing pieces and create complementary modular solutions. Our designers ensure a cohesive look that blends new and existing furniture seamlessly.",
    },
    {
      question: "What materials do you use for TV units and cabinets?",
      answer:
        "We use premium BWR plywood, MDF, and particle board with various finish options including laminate, acrylic, veneer, and PU. All materials are sourced from certified suppliers.",
    },
    {
      question: "Do you handle false ceiling and lighting for living rooms?",
      answer:
        "Yes, our comprehensive living room packages include false ceiling design, ambient lighting installation, and electrical modifications to create the perfect atmosphere.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')`,
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
                Living Room Interior
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Modular Living Room
                <span className="block text-[#C9A24D] mt-2">
                  Interior Design
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Where Memories Are Made"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Create the perfect gathering space for your family with our
                modern living room designs. From cozy conversations to
                entertainment zones, we design spaces that bring people
                together.
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
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                  alt="Living Room Interior"
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
                Modular Living Room Interior{" "}
                <span className="text-[#C9A24D]">Design in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                At{" "}
                <strong className="text-[#C9A24D]">
                  Jadeja Interior Studio
                </strong>
                , we specialize in creating stunning modular living rooms that
                become the heart of your home. Our designs blend
                <strong className="text-white">
                  {" "}
                  style with functionality
                </strong>
                , creating spaces perfect for both relaxation and entertainment.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                With{" "}
                <strong className="text-white">15+ years of experience</strong>{" "}
                and over{" "}
                <strong className="text-white">
                  600+ living room projects
                </strong>{" "}
                completed in Rajkot, we understand what makes a living space
                truly inviting and comfortable for modern families.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                From compact apartment living rooms to spacious villa halls, our
                expert team delivers{" "}
                <strong className="text-[#C9A24D]">bespoke designs</strong> with
                premium materials and impeccable craftsmanship.
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
                <span className="text-4xl font-bold text-[#C9A24D]">600+</span>
                <p className="text-white/60 text-sm mt-2">
                  Living Rooms Designed
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">15+</span>
                <p className="text-white/60 text-sm mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">100%</span>
                <p className="text-white/60 text-sm mt-2">Custom Designs</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">5yr</span>
                <p className="text-white/60 text-sm mt-2">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Living Room Furniture Essentials */}
      <section
        ref={essentialsRef}
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
              isEssentialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              What's Included
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Living Room Furniture{" "}
              <span className="text-[#C9A24D]">Essentials</span>
            </h2>

            <p className="text-[#555] max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Everything you need for a complete living room transformation
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {essentials.map((item, index) => (
              <div
                key={index}
                className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  isEssentialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-base text-center px-2">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Readymade Living Room Designs Gallery */}
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
              Readymade Living Room{" "}
              <span className="text-[#C9A24D]">Designs</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-base md:text-lg">
              Browse through our collection of stunning living room designs for
              inspiration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`group aspect-square overflow-hidden rounded-lg cursor-pointer ${
                  isGalleryVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <img
                  src={img}
                  alt={`Living Room Design ${index + 1}`}
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
              Your Dream Living Room{" "}
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

      {/* SECTION 5: Experience Centre CTA */}
      <section
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience Live at Our{" "}
            <span className="text-[#C9A24D]">
              Living Room Experience Center
            </span>
          </h2>

          <p className="text-white/70 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Visit our showroom to see and feel the quality of our modular living
            room designs. Our experts will guide you through various options.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold hover:bg-[#a08050] transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href="tel:+919725146804"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: You Might Also Like */}
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

      {/* SECTION 7: Dual CTA */}
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
                Visit our showroom to explore living room designs in person
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

      {/* SECTION 8: FAQs */}
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

      {/* SECTION 9: Final SEO Content */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Modular Living Room Interior Designer in Rajkot
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              Jadeja Interior Studio has been transforming living spaces in
              Rajkot for over 15 years. Our commitment to innovative design,
              premium materials, and exceptional craftsmanship has made us the
              top choice for homeowners seeking to create the perfect living
              room environment.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              We understand that the living room is where life happens - from
              family gatherings to quiet evenings, from entertaining guests to
              relaxing after a long day. That's why our designs focus on
              creating versatile spaces that adapt to your lifestyle needs.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              Our modular living room solutions include custom sofa sets,
              entertainment units, storage cabinets, coffee tables, bookcases,
              and complete false ceiling with ambient lighting. Every piece is
              designed to maximize space and style while maintaining
              functionality.
            </p>

            <p className="text-white/60 leading-relaxed">
              Whether you're designing a compact apartment living room or a
              grand villa hall, Jadeja Interior Studio offers competitive
              pricing without compromising on quality. Contact us today for a
              free consultation and let us help you create the living room of
              your dreams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivingRoomInteriorScreen;
