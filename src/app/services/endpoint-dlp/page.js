'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function EndpointDLP() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const featuresRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">
                Endpoint Data Loss Protection
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Comprehensive Endpoint Security & Data Protection
              </p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Endpoint DLP</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/flyd-BH0Wwlmv2oA-unsplash.webp" alt="Endpoint DLP" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/adi-goldstein-EUsVwEOsblE-unsplash.webp" alt="Endpoint DLP Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Protect Data at the Point of Risk
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Endpoint Data Loss Protection (DLP) is a critical security solution that protects sensitive data on endpoint devices including desktops, laptops, mobile devices, and removable storage media. As data breaches increasingly originate from endpoint devices, implementing comprehensive endpoint DLP is essential for preventing unauthorized data transfer, theft, and accidental leakage.
              </p>
              <p>
                Cyber Radar Systems delivers advanced Endpoint DLP solutions that monitor, detect, and prevent sensitive data from leaving your organization through endpoint devices. Our solution provides real-time visibility into data movement, enforces granular security policies, and protects against both malicious and accidental data loss across all endpoint channels.
              </p>
              <p>
                From USB drives and email attachments to cloud uploads and screen captures, our Endpoint DLP solution ensures that your sensitive data remains secure regardless of how users interact with it, maintaining protection even when devices are offline or outside the corporate network.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Protection Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Core Endpoint DLP Components
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Device Control",
                description: "Monitor and control access to USB drives, external storage, printers, and other peripheral devices to prevent unauthorized data transfer.",
                icon: "🔌"
              },
              {
                title: "Content Inspection",
                description: "Analyze file contents in real-time using pattern matching, fingerprinting, and machine learning to detect sensitive data.",
                icon: "🔍"
              },
              {
                title: "Application Control",
                description: "Control data access and transfer through applications including email clients, web browsers, messaging apps, and cloud services.",
                icon: "📱"
              },
              {
                title: "Clipboard Monitoring",
                description: "Monitor and control clipboard operations to prevent sensitive data from being copied and pasted into unauthorized applications.",
                icon: "📋"
              },
              {
                title: "Screen Capture Protection",
                description: "Detect and block screen capture attempts, screenshots, and screen recording tools from capturing sensitive information.",
                icon: "📸"
              },
              {
                title: "Print Management",
                description: "Control and audit printing activities, with options to block, watermark, or encrypt printed documents containing sensitive data.",
                icon: "🖨️"
              }
            ].map((component, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{component.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Advanced Endpoint DLP Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Policy-Based Enforcement",
              "Offline Protection",
              "Encryption Integration",
              "User Behavior Analytics",
              "Incident Investigation",
              "Compliance Reporting",
              "Granular Access Controls",
              "Automatic Remediation"
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

        {/* Protection Channels */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400">Protected Data Channels</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  channel: "Email & Messaging",
                  protection: "Monitor and control email attachments, body content, and messaging applications to prevent unauthorized data sharing.",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )
                },
                {
                  channel: "Cloud Services",
                  protection: "Control uploads to cloud storage, SaaS applications, and web-based services to prevent data leakage.",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  )
                },
                {
                  channel: "Removable Media",
                  protection: "Block, encrypt, or audit data transfers to USB drives, external hard drives, SD cards, and optical media.",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  channel: "Network Transfers",
                  protection: "Monitor and control file transfers over network protocols including FTP, HTTP, and peer-to-peer applications.",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0d1a2d] rounded-lg border-l-4 border-emerald-400">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.channel}</h4>
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
            Benefits of Endpoint DLP
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Data Breach Prevention",
                description: "Prevent sensitive data from leaving your organization through endpoints, reducing the risk of data breaches and theft.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                description: "Meet data protection requirements for GDPR, HIPAA, PCI DSS, and other regulations with comprehensive endpoint controls.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Insider Threat Mitigation",
                description: "Detect and prevent both malicious insiders and negligent employees from causing data loss incidents.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Intellectual Property Protection",
                description: "Safeguard proprietary information, trade secrets, and intellectual property from unauthorized access and exfiltration.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Comprehensive Visibility",
                description: "Gain complete visibility into data movement across all endpoints with detailed logging and reporting.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "User Productivity Balance",
                description: "Protect data without hindering legitimate business activities through intelligent policy enforcement and user education.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Common Endpoint DLP Use Cases</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Prevent USB Data Theft",
                  description: "Block unauthorized copying of sensitive files to USB drives while allowing approved devices for legitimate business needs."
                },
                {
                  title: "Protect Email Communications",
                  description: "Scan outgoing emails and attachments for sensitive data, blocking or encrypting messages that violate security policies."
                },
                {
                  title: "Control Cloud Uploads",
                  description: "Monitor and restrict uploads to personal cloud storage accounts while allowing approved corporate cloud services."
                },
                {
                  title: "Secure Remote Workers",
                  description: "Extend DLP protection to remote and mobile workers, ensuring data security regardless of location or network."
                },
                {
                  title: "Prevent Accidental Disclosure",
                  description: "Alert users when they attempt to share sensitive information inappropriately, providing education at the point of risk."
                }
              ].map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0a1628] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Secure Your Endpoint Data Today
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our Endpoint DLP solutions protect sensitive data across all endpoint devices, channels, and user activities while maintaining productivity and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request a Demo
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              DLP Best Practices
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
