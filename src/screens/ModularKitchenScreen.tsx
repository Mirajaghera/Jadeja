import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, MapPin } from "lucide-react";

const ModularKitchenScreen: React.FC = () => {
  const [activeKitchenType, setActiveKitchenType] = useState("l-shape");
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isTypesVisible, setIsTypesVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isMaterialsVisible, setIsMaterialsVisible] = useState(false);
  const [isFinishesVisible, setIsFinishesVisible] = useState(false);
  const [isHandlesVisible, setIsHandlesVisible] = useState(false);
  const [isCountertopsVisible, setIsCountertopsVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<HTMLDivElement>(null);
  const finishesRef = useRef<HTMLDivElement>(null);
  const handlesRef = useRef<HTMLDivElement>(null);
  const countertopsRef = useRef<HTMLDivElement>(null);

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
      createObserver(processRef, setIsProcessVisible),
      createObserver(materialsRef, setIsMaterialsVisible),
      createObserver(finishesRef, setIsFinishesVisible),
      createObserver(handlesRef, setIsHandlesVisible),
      createObserver(countertopsRef, setIsCountertopsVisible),
    ];

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const kitchenTypes = [
    {
      id: "l-shape",
      name: "L-Shape Kitchen",
      desc: "Perfect for corner spaces, the L-shaped kitchen maximizes efficiency with two adjacent walls forming a natural work triangle.",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=600",
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
      ],
    },
    {
      id: "u-shape",
      name: "U-Shape Kitchen",
      desc: "Ideal for larger spaces, the U-shaped layout offers maximum storage and countertop space with three walls of cabinetry.",
      images: [
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600",
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
      ],
    },
    {
      id: "parallel",
      name: "Parallel Kitchen",
      desc: "Also known as galley kitchen, this design features two parallel countertops, perfect for narrow spaces with optimal workflow.",
      images: [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=600",
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
      ],
    },
    {
      id: "straight",
      name: "Straight Kitchen",
      desc: "The most compact design, perfect for small apartments and studio spaces. All appliances and cabinets arranged along one wall.",
      images: [
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=600",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
      ],
    },
    {
      id: "island",
      name: "Island Kitchen",
      desc: "A luxurious addition to any kitchen layout, the island provides extra workspace, storage, and a social hub for cooking.",
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=600",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600",
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Meet Design Expert",
      desc: "Schedule a consultation with our kitchen specialists to discuss your vision and requirements.",
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
      desc: "Receive 3D designs tailored to your space, preferences, and budget.",
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
      desc: "Your kitchen is crafted with precision using premium materials in our factory.",
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
      title: "Installation",
      desc: "Expert installation team ensures perfect fit and finish in your space.",
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

  const materials = [
    {
      name: "Plywood",
      desc: "Premium quality marine plywood offers superior strength, moisture resistance, and durability. Ideal for humid kitchen environments.",
      bestFor: "High moisture areas, premium kitchens",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400",
    },
    {
      name: "MDF / HDF",
      desc: "Medium/High-Density Fiberboard provides smooth, uniform surface perfect for painted finishes and intricate designs.",
      bestFor: "Painted finishes, budget-friendly options",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
    },
    {
      name: "Particle Board",
      desc: "Cost-effective option with good structural integrity. Best suited for dry kitchen environments with proper lamination.",
      bestFor: "Budget kitchens, dry environments",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400",
    },
  ];

  const finishes = [
    {
      name: "Acrylic Finish",
      desc: "High-gloss, mirror-like finish that's scratch-resistant and easy to clean. Reflects light beautifully.",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=400",
    },
    {
      name: "PU Finish",
      desc: "Polyurethane finish offers excellent durability with a smooth, premium look. Available in matte and gloss.",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400",
    },
    {
      name: "PVC Finish",
      desc: "Waterproof and low-maintenance finish. Available in various colors and textures at affordable prices.",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400",
    },
    {
      name: "Laminate Finish",
      desc: "Most versatile and budget-friendly option. Wide range of colors, patterns, and wood grain textures.",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=400",
    },
  ];

  const handles = [
    {
      name: "Edge Profile",
      desc: "Sleek, handleless design with integrated edge grip for modern minimalist kitchens.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400",
    },
    {
      name: "Gola Handle",
      desc: "Concealed aluminum profile creating a seamless, contemporary look.",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=400",
    },
    {
      name: "Knobs",
      desc: "Classic round or decorative knobs for traditional and transitional kitchen styles.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400",
    },
    {
      name: "Regular Handles",
      desc: "Bar handles and D-handles in various finishes - chrome, brass, matte black, and more.",
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=400",
    },
  ];

  const countertops = [
    {
      name: "Granite",
      desc: "Natural stone with unique patterns. Highly durable, heat-resistant, and adds timeless elegance.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400",
    },
    {
      name: "Quartz",
      desc: "Engineered stone combining beauty and durability. Non-porous, stain-resistant, and low maintenance.",
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=400",
    },
    {
      name: "Tiles & Backsplashes",
      desc: "Endless design possibilities with ceramic, porcelain, and glass tiles for walls and backsplashes.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400",
    },
  ];

  const relatedServices = [
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
    {
      id: "wardrobe",
      name: "Wardrobe Designs",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
    },
  ];

  const activeKitchen = kitchenTypes.find((k) => k.id === activeKitchenType);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop')`,
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
                Modular Kitchen
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Premium Modular
                <span className="block text-[#C9A24D] mt-2">
                  Kitchen Designs
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Where Functionality Meets Style"
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                Transform your kitchen into a masterpiece with our custom
                modular solutions. Expert craftsmanship, premium materials, and
                designs tailored to your lifestyle.
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
                  src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800&auto=format&fit=crop"
                  alt="Modular Kitchen"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#C9A24D]/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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
                Modular Kitchen Design{" "}
                <span className="text-[#C9A24D]">in Rajkot</span>
              </h2>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                At{" "}
                <strong className="text-[#C9A24D]">
                  Jadeja Interior Studio
                </strong>
                , we specialize in creating stunning modular kitchens that
                combine aesthetics with functionality. Our designs are tailored
                to maximize your kitchen space while reflecting your personal
                style.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                With{" "}
                <strong className="text-white">15+ years of experience</strong>{" "}
                and over{" "}
                <strong className="text-white">500+ kitchen projects</strong>{" "}
                completed in Rajkot, we understand what makes a kitchen truly
                work for Indian homes.
              </p>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                From contemporary handleless designs to classic wood finishes,
                our expert team delivers{" "}
                <strong className="text-[#C9A24D]">
                  factory-precision manufacturing
                </strong>{" "}
                with on-site perfection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-[#C9A24D]">500+</span>
                <p className="text-white/60 text-sm mt-2">Kitchens Delivered</p>
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

      {/* SECTION 2: Kitchen Design Types Navigation */}
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
        <div className="absolute inset-0 bg-white/85 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isTypesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Kitchen Layouts
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Choose Your <span className="text-[#C9A24D]">Kitchen Style</span>
            </h2>
          </div>

          {/* Type Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {kitchenTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveKitchenType(type.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeKitchenType === type.id
                    ? "bg-[#C9A24D] text-white shadow-lg"
                    : "bg-white text-[#1a1a1a] border border-[#C9A24D]/30 hover:border-[#C9A24D]"
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          {/* SECTION 3: Kitchen Layout Details */}
          {activeKitchen && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    {activeKitchen.name}
                  </h3>
                  <p className="text-[#555] mt-4 leading-relaxed">
                    {activeKitchen.desc}
                  </p>
                  <a
                    href="tel:+919725146804"
                    className="inline-flex items-center gap-2 mt-6 text-[#C9A24D] font-semibold hover:underline"
                  >
                    View Similar Designs →
                  </a>
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeKitchen.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${activeKitchen.name} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: Process */}
      <section ref={processRef} className="py-20 md:py-28 bg-[#0a0a0a]">
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
              Our Kitchen <span className="text-[#C9A24D]">Design Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative p-8 bg-[#111111] border border-white/10 hover:border-[#C9A24D]/50 transition-all duration-500 group ${
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

                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#C9A24D]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Materials */}
      <section ref={materialsRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isMaterialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Quality Materials
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Materials We <span className="text-[#C9A24D]">Use</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div
                key={index}
                className={`bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500 ${
                  isMaterialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {material.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {material.desc}
                  </p>
                  <p className="text-[#C9A24D] text-xs font-semibold uppercase tracking-wider">
                    Best for: {material.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Finishes */}
      <section
        ref={finishesRef}
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
              isFinishesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Premium Finishes
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              Kitchen <span className="text-[#C9A24D]">Finishes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishes.map((finish, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isFinishesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {finish.popular && (
                  <span className="absolute top-4 right-4 bg-[#C9A24D] text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
                    Popular
                  </span>
                )}
                <div className="h-40 overflow-hidden">
                  <img
                    src={finish.image}
                    alt={finish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[#1a1a1a] text-lg font-semibold mb-2">
                    {finish.name}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {finish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Handles */}
      <section ref={handlesRef} className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isHandlesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Hardware Options
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Kitchen <span className="text-[#C9A24D]">Handles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {handles.map((handle, index) => (
              <div
                key={index}
                className={`group p-6 bg-[#111111] border border-white/10 hover:border-[#C9A24D]/30 transition-all duration-500 ${
                  isHandlesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-32 overflow-hidden rounded-lg mb-4">
                  <img
                    src={handle.image}
                    alt={handle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {handle.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {handle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Countertops */}
      <section ref={countertopsRef} className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isCountertopsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-px bg-[#C9A24D]" />
              Surface Options
              <span className="w-8 h-px bg-[#C9A24D]" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Countertops & <span className="text-[#C9A24D]">Backsplashes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countertops.map((item, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer ${
                  isCountertopsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: You Might Also Like */}
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

      {/* SECTION 11: Dual CTA */}
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
            {/* Visit Store */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 md:p-10 bg-[#1a1a1a] rounded-2xl text-center hover:bg-[#C9A24D] transition-all duration-500"
            >
              <MapPin className="w-12 h-12 mx-auto text-[#C9A24D] group-hover:text-white transition-colors mb-4" />
              <h3 className="text-white text-2xl font-semibold mb-2">
                Visit Our Store
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Experience our modular kitchen designs in person at our showroom
              </p>
            </a>

            {/* Request Callback */}
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

      {/* SECTION 13: Final SEO Content */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Best Modular Kitchen Designers in Rajkot
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              Jadeja Interior Studio has been at the forefront of modular
              kitchen design in Rajkot for over 15 years. Our commitment to
              quality, innovation, and customer satisfaction has made us the
              preferred choice for homeowners looking to transform their kitchen
              spaces.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              We understand that the kitchen is the heart of every home. That's
              why our team of skilled designers and craftsmen work closely with
              you to create a modular kitchen that perfectly suits your
              lifestyle, cooking habits, and aesthetic preferences. From space
              planning to material selection, we guide you through every step of
              the process.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              Our modular kitchens are manufactured using the finest materials
              including BWR plywood, premium hardware from Hettich and Hafele,
              and finishes that are both beautiful and durable. Every kitchen we
              create is backed by our 5-year warranty, giving you peace of mind.
            </p>

            <p className="text-white/60 leading-relaxed">
              Whether you're renovating your existing kitchen or designing a new
              one, Jadeja Interior Studio offers competitive pricing without
              compromising on quality. Contact us today for a free consultation
              and let us help you create the kitchen of your dreams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularKitchenScreen;
