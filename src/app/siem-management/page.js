'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SIEMManagement() {
  const capabilitiesRef = useGsapStagger(6, { stagger: 0.15 });
  const featuresRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Security Incident Event Management
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › SIEM MANAGEMENT
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Proactive Security Event Management
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Security Incident and Event Management (SIEM) is a comprehensive approach to security management that combines Security Information Management (SIM) and Security Event Management (SEM) into one security management system. Our SIEM solutions provide real-time analysis of security alerts, log management, and incident response capabilities.
              </p>
              <p>
                Cyber Radar Systems delivers enterprise-grade SIEM management services that help organizations detect, investigate, and respond to security threats in real-time. Our platform aggregates and analyzes security data from across your IT infrastructure, providing actionable intelligence and automated threat detection to protect your business from cyber attacks.
              </p>
              <p>
                With advanced correlation rules, behavioral analytics, and machine learning algorithms, our SIEM solution identifies patterns and anomalies that indicate potential security incidents, enabling your team to respond quickly and effectively.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Capabilities */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Core SIEM Capabilities
          </AnimatedHeading>
          
          <div ref={capabilitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Log Collection & Aggregation",
                description: "Centralized collection of logs from firewalls, servers, applications, and network devices for comprehensive security visibility.",
                icon: "📊"
              },
              {
                title: "Real-Time Event Correlation",
                description: "Advanced correlation engine that identifies relationships between security events to detect complex attack patterns.",
                icon: "🔗"
              },
              {
                title: "Threat Intelligence Integration",
                description: "Integration with global threat intelligence feeds to identify known threats and emerging attack vectors.",
                icon: "🧠"
              },
              {
                title: "Automated Incident Response",
                description: "Automated workflows and playbooks that enable rapid response to security incidents and reduce mean time to resolution.",
                icon: "⚡"
              },
              {
                title: "Compliance Reporting",
                description: "Pre-built compliance reports for HIPAA, PCI DSS, SOX, GDPR, and other regulatory frameworks.",
                icon: "📋"
              },
              {
                title: "User Behavior Analytics",
                description: "Machine learning-based analysis of user behavior to detect insider threats and compromised accounts.",
                icon: "👤"
              }
            ].map((capability, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{capability.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Advanced SIEM Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Real-Time Alerting",
              "Custom Dashboards",
              "Threat Hunting Tools",
              "Forensic Investigation",
              "Asset Discovery",
              "Network Traffic Analysis",
              "File Integrity Monitoring",
              "Vulnerability Integration"
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

        {/* SIEM Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of SIEM Management
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Improved Threat Detection",
                description: "Identify security threats in real-time with advanced correlation rules and behavioral analytics, reducing dwell time and minimizing damage.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Faster Incident Response",
                description: "Automated workflows and playbooks enable security teams to respond to incidents faster, reducing mean time to detection (MTTD) and mean time to respond (MTTR).",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                description: "Meet compliance requirements with automated reporting and log retention for HIPAA, PCI DSS, SOX, GDPR, and other regulations.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Reduced Security Costs",
                description: "Centralized security management and automation reduce the need for multiple security tools and decrease operational overhead.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Enhanced Visibility",
                description: "Gain complete visibility across your entire IT infrastructure with centralized log management and comprehensive security monitoring.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Proactive Threat Hunting",
                description: "Empower security analysts with advanced search capabilities and threat hunting tools to proactively identify hidden threats.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
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

        {/* Use Cases */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Common SIEM Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Insider Threat Detection",
                  description: "Monitor user activities and detect anomalous behavior that may indicate insider threats or compromised accounts."
                },
                {
                  title: "Advanced Persistent Threats",
                  description: "Identify multi-stage attacks and APTs using correlation rules that detect patterns across multiple events and timeframes."
                },
                {
                  title: "Data Breach Prevention",
                  description: "Monitor data access patterns and detect unauthorized attempts to access or exfiltrate sensitive information."
                },
                {
                  title: "Malware & Ransomware Detection",
                  description: "Detect malicious activities associated with malware infections and ransomware attacks before they spread."
                }
              ].map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#0d1a2d] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Strengthen Your Security Posture with SIEM
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our Security Incident and Event Management solutions provide the visibility, intelligence, and automation you need to detect and respond to threats in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Schedule a Demo
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
