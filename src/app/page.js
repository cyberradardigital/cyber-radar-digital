'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 max-w-7xl mx-auto">
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
            <div className="relative w-full max-w-lg h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-[#00B0FF] shadow-2xl shadow-[#00B0FF]/20">
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

      {/* Top 12 In-Demand Cybersecurity Services */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center">Our High-Demand Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Managed Security & MDR</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              24×7 threat detection, incident response, and managed defense services.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Cloud Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Comprehensive protection for AWS, Azure, and Google Cloud environments.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Identity & Access Management</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Secure authentication, SSO, and privilege control across hybrid systems.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Application & API Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Defend web, mobile, and API endpoints through DevSecOps integration.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Data Security & Privacy Compliance</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Data encryption, governance, and GDPR/CCPA compliance consulting.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Network Security / Zero-Trust</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Next-gen firewalls, SASE, and zero-trust network architecture design.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">IoT & OT Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Protect smart devices, industrial systems, and operational networks.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Risk & Supply-Chain Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Third-party risk assessment and vendor security management.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Incident Response & Forensics</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Rapid breach investigation and containment with expert forensics.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Threat Intelligence & Hunting</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Proactive detection using global threat feeds and behavioral analytics.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Security Awareness & Training</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Employee and developer training to prevent phishing and coding risks.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">Secure Cloud Migration</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Security assessment and compliance during digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0F1E2E] to-[#15283A] overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes testimonial-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .testimonial-scroll-container {
            animation: testimonial-scroll 30s linear infinite;
          }
          .testimonial-scroll-container:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            What Our <span className="text-emerald-400">Clients Say</span>
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
                <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all h-full">
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-emerald-400 font-semibold mb-1">- {testimonial.author}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.company}</p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Case Studies */}
      <section id="case-studies" className="px-4 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center">
          Our Recent <span className="text-[#00B0FF]">Case Studies</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Case Study 1 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00B0FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B0FF]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00B0FF] transition-colors">
              Enterprise Data Breach Prevention
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Implemented advanced threat detection and zero-trust architecture for a Fortune 500 company, preventing potential data breaches and securing 50,000+ endpoints globally.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00D68F] transition-all duration-300 hover:shadow-xl hover:shadow-[#00D68F]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00D68F] transition-colors">
              Cloud Security Migration
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Delivered a scalable cloud security solution using AWS and Azure. Integrated AI-powered analytics and automated incident response workflows for 24/7 protection.
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00B0FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B0FF]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00B0FF] transition-colors">
              Financial Services Compliance
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Achieved full PCI-DSS and SOC 2 compliance for a leading fintech platform. Implemented end-to-end encryption and real-time fraud detection systems.
            </p>
          </div>

          {/* Case Study 4 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00D68F] transition-all duration-300 hover:shadow-xl hover:shadow-[#00D68F]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00D68F] transition-colors">
              Healthcare Data Protection
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Secured patient data for a healthcare network with HIPAA-compliant infrastructure. Deployed secure access controls and encrypted communication channels.
            </p>
          </div>

          {/* Case Study 5 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00B0FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B0FF]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00B0FF] transition-colors">
              IoT Security Framework
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Developed comprehensive IoT security framework for smart manufacturing facility, protecting 10,000+ connected devices from cyber threats and vulnerabilities.
            </p>
          </div>

          {/* Case Study 6 */}
          <div className="bg-[#15283A] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#00D68F] transition-all duration-300 hover:shadow-xl hover:shadow-[#00D68F]/20 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#00D68F] transition-colors">
              Ransomware Recovery Solution
            </h3>
            <p className="text-[#A7B6C5] text-sm md:text-base leading-relaxed">
              Successfully recovered and fortified a retail chain after ransomware attack. Implemented backup systems and employee security training programs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
