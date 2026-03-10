import React, { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Use Vite's glob import to load all images dynamically
const imageModules = import.meta.glob("../assets/Porfolio/*.jpg", {
  eager: true,
}) as Record<string, { default: string }>;

// Convert to array and sort by number
const allImages = Object.entries(imageModules)
  .map(([path, module]) => ({
    path,
    src: module.default,
    num: parseInt(path.match(/(\d+)/)?.[1] || "0"),
  }))
  .sort((a, b) => a.num - b.num)
  .map((item) => item.src);

const GalleryScreen: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
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

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setModalImageLoaded(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setModalImageLoaded(false);
      setSelectedIndex((prev) =>
        prev === 0 ? allImages.length - 1 : (prev || 0) - 1,
      );
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setModalImageLoaded(false);
      setSelectedIndex((prev) =>
        prev === allImages.length - 1 ? 0 : (prev || 0) + 1,
      );
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Preload adjacent images
  useEffect(() => {
    if (selectedIndex !== null) {
      const preloadIndices = [
        selectedIndex - 1 >= 0 ? selectedIndex - 1 : allImages.length - 1,
        selectedIndex + 1 < allImages.length ? selectedIndex + 1 : 0,
      ];

      preloadIndices.forEach((idx) => {
        const img = new Image();
        img.src = allImages[idx];
      });
    }
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section with Images */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/70 z-[1]" />

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
                Our Work
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Portfolio <span className="text-[#C9A24D]">Gallery</span>
              </h1>

              <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                Explore our collection of {allImages.length} completed projects.
                Each space tells a unique story of design excellence and
                craftsmanship.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <span className="block text-3xl font-bold text-[#C9A24D]">
                    {allImages.length}+
                  </span>
                  <span className="text-white/60 text-sm uppercase tracking-wider mt-1 block">
                    Projects
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#C9A24D]">
                    100+
                  </span>
                  <span className="text-white/60 text-sm uppercase tracking-wider mt-1 block">
                    Clients
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#C9A24D]">
                    100%
                  </span>
                  <span className="text-white/60 text-sm uppercase tracking-wider mt-1 block">
                    Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Featured Images Grid */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image - Top Left */}
                <div className="col-span-2 relative group overflow-hidden">
                  <img
                    src={
                      allImages[0] ||
                      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                    }
                    alt="Featured Project 1"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 border-2 border-[#C9A24D]/30" />
                </div>

                {/* Small Image - Bottom Left */}
                <div className="relative group overflow-hidden">
                  <img
                    src={
                      allImages[1] ||
                      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
                    }
                    alt="Featured Project 2"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 border-2 border-[#C9A24D]/30" />
                </div>

                {/* Small Image - Bottom Right */}
                <div className="relative group overflow-hidden">
                  <img
                    src={
                      allImages[2] ||
                      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop"
                    }
                    alt="Featured Project 3"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 border-2 border-[#C9A24D]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {allImages.map((src, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer bg-[#f8f8f8]"
              >
                {/* Loading placeholder */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-[#f8f8f8] animate-pulse flex items-center justify-center min-h-[200px]">
                    <div className="w-8 h-8 border-2 border-[#C9A24D] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Image */}
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105 ${
                    loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-center p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2
                      className="w-8 h-8 text-white mb-2"
                      strokeWidth={1.5}
                    />
                    <span className="text-white text-sm font-medium">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A24D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#C9A24D] rounded-full flex items-center justify-center transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 sm:left-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#C9A24D] rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 sm:right-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#C9A24D] rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading spinner */}
            {!modalImageLoaded && (
              <div className="absolute">
                <div className="w-12 h-12 border-3 border-[#C9A24D] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={allImages[selectedIndex]}
              alt={`Project ${selectedIndex + 1}`}
              onLoad={() => setModalImageLoaded(true)}
              className={`max-w-full max-h-[85vh] object-contain shadow-2xl transition-opacity duration-300 ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <span className="text-white text-sm font-medium">
              {selectedIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryScreen;
