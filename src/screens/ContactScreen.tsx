import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message} You can reach me at ${formData.phone} or ${formData.email}`;
    window.open(
      `https://wa.me/919725146804?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 97251 46804"],
      link: "tel:+919725146804",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["jadeja@gmail.com"],
      link: "mailto:jadeja@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Jadeja Interior Studio", "Rajkot, Gujarat 360001", "India"],
      link: "https://maps.google.com/?q=Rajkot,Gujarat",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: Closed"],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-[#C9A24D]" />
            Get In Touch
            <span className="w-8 h-px bg-[#C9A24D]" />
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
            Contact <span className="text-[#C9A24D]">Us</span>
          </h1>

          <p className="text-white/70 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Ready to transform your space? We'd love to hear from you. Reach out
            to us for a free consultation and let's bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-[#C9A24D]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#C9A24D]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A24D]/20 transition-colors">
                  <info.icon className="w-7 h-7 text-[#C9A24D]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) =>
                  info.link ? (
                    <a
                      key={i}
                      href={info.link}
                      className="block text-white/60 text-sm hover:text-[#C9A24D] transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-white/60 text-sm">
                      {detail}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Send Us a Message
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-8">
                Let's Start a{" "}
                <span className="text-[#C9A24D]">Conversation</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#C9A24D] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#C9A24D] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#C9A24D] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#C9A24D] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold rounded-lg hover:bg-[#a08050] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Google Map */}
            <div>
              <span className="inline-flex items-center gap-3 text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#C9A24D]" />
                Visit Our Studio
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-8">
                Find Us on <span className="text-[#C9A24D]">Map</span>
              </h2>

              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68684545961!2d70.73823825283204!3d22.273624899503085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3a!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703945000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] md:h-[500px]"
                  title="Jadeja Interior Studio Location"
                />
              </div>

              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C9A24D]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Jadeja Interior Studio
                    </h3>
                    <p className="text-white/60 mt-1">
                      Rajkot, Gujarat 360001, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rajkot,Gujarat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C9A24D] mt-3 text-sm font-medium hover:underline"
                    >
                      Get Directions
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform{" "}
            <span className="text-[#C9A24D]">Your Space?</span>
          </h2>

          <p className="text-white/70 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Schedule a free consultation with our design experts and take the
            first step towards your dream interior.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919725146804"
              className="inline-flex items-center gap-2 bg-[#C9A24D] text-white px-8 py-4 font-semibold hover:bg-[#a08050] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919725146804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
