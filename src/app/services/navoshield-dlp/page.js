'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function NavoshieldDLP() {
  const featuresRef = useGsapStagger(6, { stagger: 0.15 });
  const capabilitiesRef = useGsapStagger(8, { stagger: 0.12 });
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
                Navoshield Data Loss Protection
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Advanced DLP Solution for Complete Data Security
              </p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Navoshield DLP</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/flyd-FGH69mi53Mw-unsplash.webp" alt="Navoshield DLP" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/jefferson-santos-9SoCnyQmkzI-unsplash.webp" alt="Navoshield DLP Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Next-Generation Data Protection Platform
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Navoshield is an advanced Data Loss Protection (DLP) solution designed to protect sensitive data across endpoints, networks, cloud applications, and email. Built on cutting-edge AI and machine learning technology, Navoshield provides intelligent, context-aware protection that adapts to modern work environments and evolving security threats.
              </p>
              <p>
                Unlike traditional DLP solutions that rely solely on static rules and patterns, Navoshield employs behavioral analytics, user risk scoring, and contextual analysis to identify and prevent data exfiltration attempts. The platform learns from user behavior, understands data context, and applies appropriate controls based on risk level, ensuring security without hindering productivity.
              </p>
              <p>
                Cyber Radar Systems delivers Navoshield as a comprehensive DLP platform that protects data wherever it goes—from desktops to cloud services, from email to removable media. With centralized policy management, real-time incident response, and detailed forensics, Navoshield provides complete visibility and control over your organization's sensitive data.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Navoshield Key Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "AI-Powered Detection",
                description: "Machine learning algorithms that continuously learn from data patterns and user behavior to identify sensitive information and anomalous activities.",
                icon: "🤖"
              },
              {
                title: "Contextual Analysis",
                description: "Understands data context including sender, recipient, location, time, and user behavior to make intelligent protection decisions.",
                icon: "🧠"
              },
              {
                title: "User Risk Scoring",
                description: "Assigns dynamic risk scores to users based on behavior patterns, access history, and security incidents to enable risk-based policies.",
                icon: "📊"
              },
              {
                title: "Multi-Channel Protection",
                description: "Unified protection across endpoints, email, web, cloud applications, and network channels from a single management console.",
                icon: "🌐"
              },
              {
                title: "Smart Classification",
                description: "Automatic data classification using ML-based content inspection, fingerprinting, and pattern matching across structured and unstructured data.",
                icon: "🏷️"
              },
              {
                title: "Real-Time Response",
                description: "Instant blocking, encryption, or alerting based on policy violations with automated remediation workflows and user education.",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Capabilities */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Comprehensive Protection Capabilities
          </AnimatedHeading>
          
          <div ref={capabilitiesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Endpoint DLP",
              "Email Security",
              "Web & Cloud DLP",
              "Network DLP",
              "Mobile Device Protection",
              "Encrypted Traffic Inspection",
              "Insider Threat Detection",
              "Data Discovery & Classification"
            ].map((capability, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navoshield Architecture */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400">Navoshield Platform Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  layer: "Detection Layer",
                  components: [
                    "Content inspection engines",
                    "Pattern matching algorithms",
                    "ML-based classification",
                    "Behavioral analytics",
                    "User risk scoring"
                  ],
                  icon: (
                    <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  layer: "Policy Layer",
                  components: [
                    "Centralized policy engine",
                    "Risk-based rules",
                    "Contextual policies",
                    "Exception management",
                    "Policy templates"
                  ],
                  icon: (
                    <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  layer: "Response Layer",
                  components: [
                    "Automated blocking",
                    "Encryption enforcement",
                    "User notifications",
                    "Incident workflows",
                    "Forensic logging"
                  ],
                  icon: (
                    <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((layer, index) => (
                <div key={index} className="bg-[#0d1a2d] rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    {layer.icon}
                    <h4 className="text-xl font-bold text-white">{layer.layer}</h4>
                  </div>
                  <div className="space-y-2">
                    {layer.components.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Navoshield Advantages
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Reduced False Positives",
                description: "AI-powered contextual analysis significantly reduces false positives, minimizing user friction and security team workload.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Adaptive Protection",
                description: "Machine learning continuously adapts to new data types, user behaviors, and threat patterns without manual rule updates.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Unified Management",
                description: "Single console for managing policies, monitoring incidents, and generating reports across all protection channels.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                )
              },
              {
                title: "Compliance Ready",
                description: "Pre-built templates and reporting for GDPR, HIPAA, PCI DSS, SOX, and other regulatory compliance requirements.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Scalable Architecture",
                description: "Cloud-native design scales effortlessly from small businesses to global enterprises with distributed workforces.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )
              },
              {
                title: "Rapid Deployment",
                description: "Quick implementation with minimal infrastructure changes, supporting on-premises, cloud, and hybrid deployments.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Navoshield Use Cases</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Insider Threat Prevention",
                  description: "Detect and prevent malicious insiders and compromised accounts using behavioral analytics and user risk scoring."
                },
                {
                  title: "Cloud Data Security",
                  description: "Protect data in SaaS applications like Office 365, Google Workspace, Salesforce, and custom cloud apps."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Demonstrate compliance with data protection regulations through automated policy enforcement and comprehensive reporting."
                },
                {
                  title: "Intellectual Property Protection",
                  description: "Safeguard proprietary designs, source code, trade secrets, and confidential business information from exfiltration."
                },
                {
                  title: "Remote Workforce Security",
                  description: "Extend DLP protection to remote and mobile workers accessing corporate data from any location or device."
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
            Experience Next-Gen DLP with Navoshield
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover how Navoshield's AI-powered platform can protect your sensitive data without sacrificing user productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request Demo
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
