'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Add animation styles on client-side only
    const style = document.createElement('style');
    style.textContent = `
      @keyframes testimonial-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .testimonial-scroll-container {
        animation: testimonial-scroll 30s linear infinite;
      }
      .testimonial-scroll-container:hover {
        animation-play-state: paused;
      }
      @keyframes gentle-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .float-animation {
        animation: gentle-float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section - DARK */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 pt-24 md:pt-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              Top 12 In-Demand<br />
              <span className="text-[#00B0FF]">Cybersecurity Services</span>
            </h1>
            <p className="text-[#A7B6C5] text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
              Protect your business from evolving cyber threats with the most advanced and globally recognized cybersecurity solutions.
            </p>
            <button className="bg-[#00B0FF] hover:bg-[#00D68F] text-white px-6 md:px-8 py-2.5 md:py-3 rounded transition-colors font-medium text-sm md:text-base">
              Get a Free Security Audit
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            {/* Video Banner */}
            <div className="relative w-full max-w-lg h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-[#00B0FF] shadow-2xl shadow-[#00B0FF]/20 float-animation">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/cyber-radar-video.webm" type="video/webm" />
                <source src="/security.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F1E2E]/95 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-[#00D68F] font-bold text-2xl mb-1">500+</div>
                    <div className="text-gray-300 text-xs uppercase">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00B0FF] font-bold text-2xl mb-1">24/7</div>
                    <div className="text-gray-300 text-xs uppercase">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 12 In-Demand Cybersecurity Services - LIGHT */}
      <section className="relative px-4 md:px-8 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-y border-blue-100 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Our High-Demand Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital infrastructure
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1 */}
          <div className="group relative bg-gradient-to-br from-white via-purple-50 to-fuchsia-50 p-6 md:p-8 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-fuchsia-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">01</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">Managed Security & MDR</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                24×7 threat detection, incident response, and managed defense services.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="group relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">02</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Cloud Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Comprehensive protection for AWS, Azure, and Google Cloud environments.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="group relative bg-gradient-to-br from-white via-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">03</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">Identity & Access Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Secure authentication, SSO, and privilege control across hybrid systems.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 4 */}
          <div className="group relative bg-gradient-to-br from-white via-orange-50 to-amber-50 p-6 md:p-8 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-2xl hover:border-orange-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">04</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">Application & API Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Defend web, mobile, and API endpoints through DevSecOps integration.
              </p>
              <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 5 */}
          <div className="group relative bg-gradient-to-br from-white via-pink-50 to-rose-50 p-6 md:p-8 rounded-2xl border-2 border-pink-200 shadow-lg hover:shadow-2xl hover:border-pink-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">05</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">Data Security & Privacy Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Data encryption, governance, and GDPR/CCPA compliance consulting.
              </p>
              <div className="flex items-center text-pink-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 6 */}
          <div className="group relative bg-gradient-to-br from-white via-indigo-50 to-violet-50 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 shadow-lg hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-violet-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">06</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">Network Security / Zero-Trust</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Next-gen firewalls, SASE, and zero-trust network architecture design.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 7 */}
          <div className="group relative bg-gradient-to-br from-white via-green-50 to-lime-50 p-6 md:p-8 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/30 to-lime-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">07</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">IoT & OT Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Protect smart devices, industrial systems, and operational networks.
              </p>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 8 */}
          <div className="group relative bg-gradient-to-br from-white via-red-50 to-orange-50 p-6 md:p-8 rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-2xl hover:border-red-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/30 to-orange-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">08</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Risk & Supply-Chain Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Third-party risk assessment and vendor security management.
              </p>
              <div className="flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 9 */}
          <div className="group relative bg-gradient-to-br from-white via-yellow-50 to-amber-50 p-6 md:p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">09</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">Incident Response & Forensics</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Rapid breach investigation and containment with expert forensics.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 10 */}
          <div className="group relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 p-6 md:p-8 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">10</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">Threat Intelligence & Hunting</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Proactive detection using global threat feeds and behavioral analytics.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 11 */}
          <div className="group relative bg-gradient-to-br from-white via-cyan-50 to-sky-50 p-6 md:p-8 rounded-2xl border-2 border-cyan-200 shadow-lg hover:shadow-2xl hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-sky-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">11</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">Security Awareness & Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Employee and developer training to prevent phishing and coding risks.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Service 12 */}
          <div className="group relative bg-gradient-to-br from-white via-teal-50 to-emerald-50 p-6 md:p-8 rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-2xl hover:border-teal-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-400/30 to-emerald-400/30 rounded-bl-full"></div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">12</div>
            <div className="relative">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">Secure Cloud Migration</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Security assessment and compliance during digital transformation.
              </p>
              <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section - DARK */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            What Our <span className="text-[#00B0FF]">Clients Say</span>
          </h2>
        </div>
        
        {/* Auto-scrolling container */}
        <div className="relative">
          <div className="flex testimonial-scroll-container">
            {/* First set of testimonials */}
            {[
              {
                text: "Cyber Radar transformed our security infrastructure in just 7 days. Outstanding service!",
                author: "Sarah K.",
                company: "Tech Solutions Inc"
              },
              {
                text: "AI-powered threat detection exceeded our expectations. Highly professional team.",
                author: "Michael L.",
                company: "Finance Corp"
              },
              {
                text: "Cloud security and compliance services really boosted our confidence and protection.",
                author: "Emma W.",
                company: "Healthcare Systems"
              },
              {
                text: "Great support and responsive team throughout the entire security audit process.",
                author: "David R.",
                company: "Retail Group"
              },
              {
                text: "The penetration testing services provided were top-notch and incredibly thorough.",
                author: "Jennifer M.",
                company: "Manufacturing Ltd"
              },
              {
                text: "Fast delivery and excellent quality. Our data is now fully protected. Recommended!",
                author: "Robert T.",
                company: "E-commerce Platform"
              }
            ].concat([
              {
                text: "Cyber Radar transformed our security infrastructure in just 7 days. Outstanding service!",
                author: "Sarah K.",
                company: "Tech Solutions Inc"
              },
              {
                text: "AI-powered threat detection exceeded our expectations. Highly professional team.",
                author: "Michael L.",
                company: "Finance Corp"
              },
              {
                text: "Cloud security and compliance services really boosted our confidence and protection.",
                author: "Emma W.",
                company: "Healthcare Systems"
              },
              {
                text: "Great support and responsive team throughout the entire security audit process.",
                author: "David R.",
                company: "Retail Group"
              },
              {
                text: "The penetration testing services provided were top-notch and incredibly thorough.",
                author: "Jennifer M.",
                company: "Manufacturing Ltd"
              },
              {
                text: "Fast delivery and excellent quality. Our data is now fully protected. Recommended!",
                author: "Robert T.",
                company: "E-commerce Platform"
              }
            ]).map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[400px] mx-4"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-lg p-6 md:p-8 shadow-lg hover:border-[#00B0FF] hover:shadow-xl transition-all h-full">
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-[#00B0FF] font-semibold mb-1">- {testimonial.author}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.company}</p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - LIGHT */}
      <section id="case-studies" className="px-4 md:px-8 py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Our Recent Case Studies
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Case Study 1 */}
          <div className="relative bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 shadow-lg hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Enterprise Data Breach Prevention
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Implemented advanced threat detection and zero-trust architecture for a Fortune 500 company, preventing potential data breaches and securing 50,000+ endpoints globally.
              </p>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 shadow-lg hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Cloud Security Migration
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Delivered a scalable cloud security solution using AWS and Azure. Integrated AI-powered analytics and automated incident response workflows for 24/7 protection.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="relative bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border-2 border-green-200 shadow-lg hover:border-green-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Financial Services Compliance
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Achieved full PCI-DSS and SOC 2 compliance for a leading fintech platform. Implemented end-to-end encryption and real-time fraud detection systems.
              </p>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="relative bg-gradient-to-br from-white via-red-50 to-rose-50 rounded-2xl p-6 md:p-8 border-2 border-red-200 shadow-lg hover:border-red-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Healthcare Data Protection
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Secured patient data for a healthcare network with HIPAA-compliant infrastructure. Deployed secure access controls and encrypted communication channels.
              </p>
              <div className="flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 5 */}
          <div className="relative bg-gradient-to-br from-white via-indigo-50 to-violet-50 rounded-2xl p-6 md:p-8 border-2 border-indigo-200 shadow-lg hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-violet-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  IoT Security Framework
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Developed comprehensive IoT security framework for smart manufacturing facility, protecting 10,000+ connected devices from cyber threats and vulnerabilities.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 6 */}
          <div className="relative bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200 shadow-lg hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Ransomware Recovery Solution
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Successfully recovered and fortified a retail chain after ransomware attack. Implemented backup systems and employee security training programs.
              </p>
              <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
