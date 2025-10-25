'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function IntegratedDLP() {
  const layersRef = useGsapStagger(4, { stagger: 0.15 });
  const featuresRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Integrated Data Loss Protection
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › UNIFIED DLP SOLUTION
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Unified Protection Across All Data Channels
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Integrated Data Loss Protection (DLP) provides a unified, comprehensive approach to protecting sensitive data across all vectors—endpoints, networks, email, web, cloud applications, and mobile devices. Unlike point solutions that protect individual channels in isolation, Integrated DLP delivers centralized policy management, consistent enforcement, and complete visibility across your entire data ecosystem.
              </p>
              <p>
                Cyber Radar Systems delivers enterprise-grade Integrated DLP solutions that combine endpoint protection, network monitoring, email security, cloud CASB capabilities, and mobile device management into a single, cohesive platform. Our solution ensures consistent data protection policies are enforced regardless of where data resides, how it moves, or which applications users access.
              </p>
              <p>
                With unified incident management, centralized reporting, and orchestrated response capabilities, Integrated DLP eliminates security gaps, reduces management complexity, and provides the comprehensive protection modern organizations need to secure sensitive data in today's hybrid work environments.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Protection Layers */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Integrated Protection Layers
          </AnimatedHeading>
          
          <div ref={layersRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                layer: "Endpoint DLP",
                description: "Monitor and control data on desktops, laptops, and mobile devices with device control, application monitoring, and offline protection.",
                capabilities: [
                  "USB and removable media control",
                  "Application-level data monitoring",
                  "Clipboard and screen capture protection",
                  "Print monitoring and control",
                  "Offline policy enforcement",
                  "File encryption integration"
                ],
                icon: "💻",
                color: "border-blue-500"
              },
              {
                layer: "Network DLP",
                description: "Inspect data in motion across the network perimeter and internal segments to prevent unauthorized data transfers.",
                capabilities: [
                  "Deep packet inspection",
                  "Protocol analysis (HTTP, HTTPS, FTP, SMTP)",
                  "SSL/TLS decryption",
                  "Cloud app traffic monitoring",
                  "Peer-to-peer detection",
                  "Real-time blocking and quarantine"
                ],
                icon: "🌐",
                color: "border-green-500"
              },
              {
                layer: "Email DLP",
                description: "Protect sensitive data in email communications with content inspection, attachment scanning, and policy-based actions.",
                capabilities: [
                  "Email body and attachment scanning",
                  "Sender and recipient analysis",
                  "Automatic encryption",
                  "Message quarantine and redirect",
                  "User notification and justification",
                  "Integration with mail gateways"
                ],
                icon: "📧",
                color: "border-purple-500"
              },
              {
                layer: "Cloud & Web DLP",
                description: "Extend DLP protection to cloud applications and web traffic with CASB capabilities and real-time monitoring.",
                capabilities: [
                  "SaaS application monitoring",
                  "Cloud storage control",
                  "Web upload/download inspection",
                  "Shadow IT discovery",
                  "API-based cloud DLP",
                  "Inline proxy protection"
                ],
                icon: "☁️",
                color: "border-yellow-500"
              }
            ].map((layer, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border-l-4 ${layer.color} rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover-lift`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{layer.icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{layer.layer}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{layer.description}</p>
                <div className="space-y-2">
                  {layer.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs sm:text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Integration & Management Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Unified Policy Engine",
              "Centralized Console",
              "Cross-Channel Correlation",
              "Incident Orchestration",
              "Single Data Classification",
              "Integrated Reporting",
              "Workflow Automation",
              "SIEM Integration"
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

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of Integrated DLP
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Complete Visibility",
                description: "Gain comprehensive view of data movement across all channels from a single dashboard, eliminating blind spots and security gaps.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Consistent Policies",
                description: "Enforce uniform data protection policies across all channels, ensuring consistent security regardless of access method or location.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Reduced Complexity",
                description: "Simplify DLP management by consolidating multiple point solutions into one integrated platform with unified administration.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                )
              },
              {
                title: "Faster Incident Response",
                description: "Respond to incidents more quickly with correlated alerts, automated workflows, and coordinated cross-channel remediation.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Lower TCO",
                description: "Reduce total cost of ownership by eliminating redundant tools, reducing training needs, and streamlining operations.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Improved Compliance",
                description: "Meet regulatory requirements more effectively with comprehensive data protection coverage and unified compliance reporting.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
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

        {/* Integration Architecture */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400">Integration Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  component: "Data Discovery & Classification",
                  items: [
                    "Automated data discovery",
                    "ML-based classification",
                    "Custom data identifiers",
                    "Fingerprinting engine",
                    "Pattern matching"
                  ]
                },
                {
                  component: "Policy & Rules Engine",
                  items: [
                    "Unified policy creation",
                    "Role-based policies",
                    "Contextual rules",
                    "Exception management",
                    "Policy templates"
                  ]
                },
                {
                  component: "Response & Remediation",
                  items: [
                    "Automated actions",
                    "User education",
                    "Incident workflows",
                    "Quarantine management",
                    "Forensic logging"
                  ]
                }
              ].map((component, index) => (
                <div key={index} className="bg-[#0d1a2d] rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-4">{component.component}</h4>
                  <div className="space-y-2">
                    {component.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Use Cases */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Integrated DLP Use Cases</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Multi-Channel Data Tracking",
                  description: "Track sensitive data as it moves across endpoints, network, email, and cloud applications with unified visibility and consistent protection."
                },
                {
                  title: "Cross-Platform Incident Response",
                  description: "Respond to security incidents holistically by correlating events across all channels and coordinating remediation actions."
                },
                {
                  title: "Hybrid Workforce Protection",
                  description: "Protect data accessed by remote and mobile workers regardless of location, device, or access method with consistent policies."
                },
                {
                  title: "Comprehensive Compliance",
                  description: "Meet regulatory requirements (GDPR, HIPAA, PCI DSS) with unified data protection covering all mandated channels and controls."
                },
                {
                  title: "Cloud Migration Security",
                  description: "Maintain data protection as workloads migrate to the cloud by extending DLP policies to cloud applications and services."
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
            Unify Your Data Protection Strategy
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our Integrated DLP solution provides comprehensive, consistent data protection across all channels from a single platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Integration Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
