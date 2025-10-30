'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function MobileControls() {
  const controlsRef = useGsapStagger(6, { stagger: 0.15 });
  const featuresRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(4, { stagger: 0.15 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">Mobile Security Controls</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Mobile Device Management & Security</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Mobile Controls</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/shahadat-rahman-O2MdroNurVw-unsplash.webp" alt="Mobile Controls" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Secure Your Mobile Workforce
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                In today's mobile-first business environment, employees access corporate data and applications from smartphones, tablets, and other mobile devices. While mobile devices enhance productivity and flexibility, they also introduce significant security risks including data leakage, malware infections, and unauthorized access to sensitive information.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive Mobile Security Controls that protect your organization's data across all mobile endpoints. Our Mobile Device Management (MDM) and Mobile Application Management (MAM) solutions ensure that mobile devices accessing corporate resources comply with security policies while maintaining user privacy and device performance.
              </p>
              <p>
                From BYOD (Bring Your Own Device) policies to corporate-owned device management, we help you balance security requirements with user experience, enabling secure mobile productivity across iOS, Android, and other mobile platforms.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/shamin-haky-Uhx-gHPpCDg-unsplash.webp" alt="Mobile Controls Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Core Mobile Controls */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Essential Mobile Security Controls
          </AnimatedHeading>
          
          <div ref={controlsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Device Enrollment & Management",
                description: "Automated device enrollment, configuration, and lifecycle management for iOS, Android, and Windows mobile devices.",
                icon: "📱"
              },
              {
                title: "App Management & Distribution",
                description: "Secure distribution of corporate apps, app configuration, and containerization to separate business and personal data.",
                icon: "📦"
              },
              {
                title: "Data Encryption & Protection",
                description: "Enforce full device encryption, secure containers, and data-at-rest protection to prevent data breaches.",
                icon: "🔐"
              },
              {
                title: "Access Control & Authentication",
                description: "Multi-factor authentication, biometric verification, and conditional access policies for mobile device access.",
                icon: "🔑"
              },
              {
                title: "Remote Wipe & Lock",
                description: "Remotely wipe corporate data or lock devices in case of loss, theft, or employee departure.",
                icon: "🗑️"
              },
              {
                title: "Compliance & Policy Enforcement",
                description: "Automated compliance checks, policy enforcement, and reporting to ensure mobile devices meet security standards.",
                icon: "✅"
              }
            ].map((control, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="text-4xl mb-4">{control.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{control.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{control.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Advanced Mobile Security Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Jailbreak/Root Detection",
              "Geo-Fencing & Location Services",
              "Network Security Controls",
              "Mobile Threat Defense",
              "Email & Calendar Management",
              "VPN & Secure Tunneling",
              "App Blacklist/Whitelist",
              "Certificate Management"
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Threat Protection */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400">Mobile Threat Protection</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  threat: "Malicious Apps",
                  protection: "Real-time scanning of installed apps, app reputation analysis, and automated removal of detected threats.",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  threat: "Network Attacks",
                  protection: "Detection of man-in-the-middle attacks, SSL stripping, and rogue Wi-Fi networks.",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  threat: "Phishing Attacks",
                  protection: "URL filtering, phishing site detection, and user alerts for suspicious links and messages.",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )
                },
                {
                  threat: "Device Compromise",
                  protection: "Jailbreak and root detection, OS integrity verification, and automated device quarantine.",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0d1a2d] rounded-lg border-l-4 border-red-400">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.threat}</h4>
                    <p className="text-gray-300 text-sm">{item.protection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of Mobile Security Controls
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Data Loss Prevention",
                description: "Prevent sensitive corporate data from being leaked through lost devices, malicious apps, or unauthorized sharing.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                description: "Meet GDPR, HIPAA, PCI DSS, and other regulatory requirements for mobile data protection and privacy.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Enhanced Productivity",
                description: "Enable secure mobile access to corporate resources, email, and applications without compromising security.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Cost Reduction",
                description: "Reduce IT support costs with automated device management, self-service portals, and streamlined provisioning.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="flex items-start gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Platforms */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">Supported Mobile Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { platform: "iOS", icon: "🍎", versions: "iOS 13 and above" },
                { platform: "Android", icon: "🤖", versions: "Android 8 and above" },
                { platform: "Windows", icon: "🪟", versions: "Windows 10 Mobile" },
                { platform: "Other", icon: "📱", versions: "Custom integrations" }
              ].map((item, index) => (
                <div key={index} className="bg-[#0a1628] rounded-lg p-6 text-center border border-gray-700 hover:border-emerald-400 transition-all">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.platform}</h4>
                  <p className="text-gray-400 text-sm">{item.versions}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Secure Your Mobile Infrastructure
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Protect corporate data on mobile devices while enabling secure, productive mobile work. Our Mobile Security Controls provide comprehensive protection for your mobile workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Get Started
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Mobile Security Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
