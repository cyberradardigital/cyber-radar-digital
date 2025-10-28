'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { useState } from 'react';

export default function Contact() {
  const infoCardsRef = useGsapStagger(3, { stagger: 0.15 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › CONTACT US
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Contact Info Cards */}
        <div ref={infoCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          
          {/* Location */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Location</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CRS, 105 Eelmsferd ST Durham, NC<br />27703, US
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Send Us Email</h3>
            <a href="mailto:Info@cyberradarsystems.Com" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
              Info@cyberradarsystems.Com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Make a Call</h3>
            <a href="tel:+18888574694" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm block">
              +1-(888) 857-4694
            </a>
            <a href="tel:+19069689226" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm block mt-1">
              +91-906-968-9226
            </a>
          </div>

        </div>

        {/* Contact Form Section */}
        <AnimatedSection animationType="fadeUp" delay={0.3}>
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Questions or Comments?
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Get in Touch
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  placeholder="Your full name"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  placeholder="Your email address"
                />
              </div>

              {/* Message */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="8"
                className="w-full px-4 py-3.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm"
                placeholder="Write your message..."
              ></textarea>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-3.5 rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm uppercase tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
