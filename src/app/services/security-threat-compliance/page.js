'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SecurityThreatCompliance() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const threatsRef = useGsapStagger(8, { stagger: 0.12 });
  const frameworksRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Security Threat Compliance
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › THREAT & COMPLIANCE MANAGEMENT
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Navigate Threats While Maintaining Compliance
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                In today's complex threat landscape, organizations must balance proactive threat detection and response with strict regulatory compliance requirements. Security Threat Compliance ensures that your security controls not only protect against evolving cyber threats but also meet industry standards and regulatory mandates.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive Security Threat Compliance services that help organizations align their security operations with regulatory frameworks while maintaining robust protection against advanced threats. Our approach integrates threat intelligence, compliance management, and continuous monitoring to create a unified security and compliance posture.
              </p>
              <p>
                We help you demonstrate compliance to auditors and regulators while ensuring that your security controls are effective against real-world threats, bridging the gap between compliance requirements and actual security effectiveness.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Core Components of Threat Compliance
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Threat Intelligence Integration",
                description: "Integrate real-time threat intelligence feeds with compliance monitoring to identify threats that specifically target your industry or regulatory environment.",
                icon: "🧠"
              },
              {
                title: "Compliance Mapping",
                description: "Map security controls to specific regulatory requirements including GDPR, HIPAA, PCI DSS, SOX, NIST, ISO 27001, and industry-specific standards.",
                icon: "🗺️"
              },
              {
                title: "Automated Compliance Monitoring",
                description: "Continuously monitor security controls and configurations to ensure ongoing compliance with regulatory requirements and security best practices.",
                icon: "🔄"
              },
              {
                title: "Threat-Based Risk Assessment",
                description: "Assess compliance gaps based on actual threat scenarios and attack patterns relevant to your organization and industry.",
                icon: "⚠️"
              },
              {
                title: "Audit Trail Management",
                description: "Maintain comprehensive audit logs and evidence of security controls for compliance audits and regulatory examinations.",
                icon: "📝"
              },
              {
                title: "Incident Response Compliance",
                description: "Ensure incident response procedures meet regulatory notification requirements and maintain compliance during security events.",
                icon: "🚨"
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

        {/* Threat Categories */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Monitored Threat Categories
          </AnimatedHeading>
          
          <div ref={threatsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Advanced Persistent Threats",
              "Ransomware & Malware",
              "Data Exfiltration Attempts",
              "Insider Threats",
              "Supply Chain Attacks",
              "Zero-Day Exploits",
              "Phishing & Social Engineering",
              "DDoS & Service Disruption"
            ].map((threat, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{threat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Supported Compliance Frameworks
          </AnimatedHeading>
          
          <div ref={frameworksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                framework: "GDPR",
                description: "General Data Protection Regulation for EU data privacy and protection requirements.",
                requirements: "Data protection, breach notification, privacy by design"
              },
              {
                framework: "HIPAA",
                description: "Health Insurance Portability and Accountability Act for healthcare data security.",
                requirements: "ePHI protection, access controls, audit trails"
              },
              {
                framework: "PCI DSS",
                description: "Payment Card Industry Data Security Standard for payment card data protection.",
                requirements: "Network security, encryption, vulnerability management"
              },
              {
                framework: "SOX",
                description: "Sarbanes-Oxley Act for financial reporting and IT controls.",
                requirements: "Financial data integrity, access controls, audit logs"
              },
              {
                framework: "ISO 27001",
                description: "International standard for information security management systems.",
                requirements: "Risk management, security controls, continuous improvement"
              },
              {
                framework: "NIST CSF",
                description: "NIST Cybersecurity Framework for critical infrastructure protection.",
                requirements: "Identify, protect, detect, respond, recover"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-400 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">{item.framework}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.framework}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="pt-3 border-t border-gray-700">
                  <p className="text-emerald-400 text-xs font-semibold mb-1">Key Requirements:</p>
                  <p className="text-gray-400 text-xs">{item.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Benefits of Integrated Threat Compliance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Unified Security Posture",
                  description: "Align threat detection and response capabilities with compliance requirements for a cohesive security strategy."
                },
                {
                  title: "Regulatory Confidence",
                  description: "Demonstrate to auditors and regulators that security controls are effective and compliant with industry standards."
                },
                {
                  title: "Reduced Compliance Costs",
                  description: "Automate compliance monitoring and reporting to reduce manual effort and audit preparation time."
                },
                {
                  title: "Proactive Risk Management",
                  description: "Identify and remediate compliance gaps before they result in breaches, fines, or audit findings."
                },
                {
                  title: "Evidence Collection",
                  description: "Automatically collect and maintain evidence of security controls for compliance audits and examinations."
                },
                {
                  title: "Continuous Compliance",
                  description: "Monitor compliance status in real-time and receive alerts when configurations drift from required standards."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0d1a2d] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Offerings */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">Our Threat Compliance Services</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Compliance Gap Analysis",
                  description: "Identify gaps between current security controls and regulatory requirements with threat-based risk assessment."
                },
                {
                  title: "Control Implementation",
                  description: "Deploy and configure security controls that address both compliance requirements and real-world threats."
                },
                {
                  title: "Continuous Monitoring",
                  description: "Monitor security and compliance status 24/7 with automated alerting for deviations and threats."
                },
                {
                  title: "Compliance Reporting",
                  description: "Generate comprehensive reports for audits, including evidence of controls and threat mitigation activities."
                },
                {
                  title: "Incident Response Planning",
                  description: "Develop incident response procedures that meet regulatory notification requirements."
                },
                {
                  title: "Audit Support",
                  description: "Provide expert support during compliance audits and regulatory examinations."
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0a1628] rounded-lg hover:bg-[#0d1a2d] transition-all">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Achieve Security and Compliance Excellence
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our Security Threat Compliance services help you navigate complex regulatory requirements while maintaining robust protection against evolving cyber threats.
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
              Compliance Resources
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
