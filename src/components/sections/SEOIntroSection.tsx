import React from "react";

const SEOIntroSection: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Decorative Elements */}
        {/* <div className="text-[#C9A24D] tracking-[0.3em] uppercase text-xs font-semibold mb-4">
          Welcome to
        </div> */}

        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 leading-tight font-serif">
          Best Interior Designer in Rajkot – Jadeja Studio Pvt Ltd
        </h1>

        <div className="w-24 h-[2px] bg-[#C9A24D] mb-8"></div>

        <p className="text-gray-600 text-lg leading-relaxed text-justify sm:text-center">
          Jadeja Studio Pvt Ltd is a professional interior designer in Rajkot
          specializing in residential and commercial interior design solutions.
          We create modern, functional, and customized interiors for homes,
          offices, and commercial spaces. From modular kitchen interiors to
          complete turnkey interior design services in Rajkot, our team ensures
          premium quality, smart space planning, and elegant design concepts
          tailored to your lifestyle.
        </p>
      </div>
    </section>
  );
};

export default SEOIntroSection;
