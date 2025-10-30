'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SOC2Compliance() {
  const criteriaRef = useGsapStagger(5, { stagger: 0.15 });
  const typesRef = useGsapStagger(2, { stagger: 0.2 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.12 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">SOC 2 Compliance Services</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Trust Services Criteria & Compliance</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">SOC 2</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/keepcoding-lVF2HLzjopw-unsplash.webp" alt="SOC 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/markus-spiske-uPXs5Vx5bIg-unsplash.webp" alt="SOC 2 Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Security, Availability & Trust Assurance
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                SOC 2 (Service Organization Control 2) is a voluntary compliance standard developed by the American Institute of CPAs (AICPA) that specifies how organizations should manage customer data. SOC 2 reports provide detailed information about a service organization's controls related to security, availability, processing integrity, confidentiality, and privacy.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive SOC 2 readiness assessments, implementation services, and audit support to help technology and cloud service providers achieve SOC 2 compliance. Our experts guide organizations through the entire SOC 2 journey, from gap analysis to successful audit completion.
              </p>
              <p>
                SOC 2 compliance has become the gold standard for SaaS companies, cloud service providers, and technology vendors. Achieving SOC 2 certification demonstrates your commitment to data security and builds trust with enterprise customers who require rigorous vendor security assessments.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Services Criteria */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Trust Services Criteria
          </AnimatedHeading>
          
          <div ref={criteriaRef} className="space-y-6 md:space-y-8">
            {[
              {
                category: "Security",
                subtitle: "(Common Criteria - Required)",
                description: "The system is protected against unauthorized access, use, or modification, both physical and logical. Security is foundational and required for all SOC 2 reports.",
                color: "border-red-500",
                controls: [
                  "Access controls and user authentication",
                  "Network security and firewall management",
                  "Security monitoring and incident response",
                  "Vulnerability management and patching",
                  "Logical and physical access restrictions",
                  "Security policies and procedures"
                ]
              },
              {
                category: "Availability",
                subtitle: "(Optional Category)",
                description: "The system is available for operation and use as committed or agreed. This ensures system uptime and accessibility meet contractual or agreed-upon requirements.",
                color: "border-blue-500",
                controls: [
                  "System monitoring and performance management",
                  "Disaster recovery and business continuity plans",
                  "Backup and recovery procedures",
                  "Capacity planning and scalability",
                  "Incident response and problem management",
                  "Service level agreement (SLA) monitoring"
                ]
              },
              {
                category: "Processing Integrity",
                subtitle: "(Optional Category)",
                description: "System processing is complete, valid, accurate, timely, and authorized. Ensures data is processed accurately and completely as intended.",
                color: "border-green-500",
                controls: [
                  "Data validation and error checking",
                  "Transaction processing controls",
                  "Data quality monitoring",
                  "Authorization and approval workflows",
                  "Reconciliation procedures",
                  "Data integrity verification"
                ]
              },
              {
                category: "Confidentiality",
                subtitle: "(Optional Category)",
                description: "Information designated as confidential is protected as committed or agreed. Focuses on protecting sensitive information from unauthorized disclosure.",
                color: "border-yellow-500",
                controls: [
                  "Data classification and handling procedures",
                  "Encryption of data at rest and in transit",
                  "Confidentiality agreements and training",
                  "Access restrictions to confidential data",
                  "Secure data disposal procedures",
                  "Confidentiality breach response"
                ]
              },
              {
                category: "Privacy",
                subtitle: "(Optional Category)",
                description: "Personal information is collected, used, retained, disclosed, and disposed of in conformity with commitments and applicable privacy regulations.",
                color: "border-purple-500",
                controls: [
                  "Privacy notice and consent management",
                  "Data subject rights (access, correction, deletion)",
                  "Purpose limitation and data minimization",
                  "Third-party data sharing controls",
                  "Privacy incident response",
                  "Compliance with privacy regulations (GDPR, CCPA)"
                ]
              }
            ].map((criteria, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border-l-4 ${criteria.color} rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{criteria.category}</h3>
                  <p className="text-emerald-400 text-sm font-semibold">{criteria.subtitle}</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{criteria.description}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {criteria.controls.map((control, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#0a1628] p-3 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs sm:text-sm">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOC 2 Types */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            SOC 2 Report Types
          </AnimatedHeading>
          
          <div ref={typesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                type: "Type I",
                title: "SOC 2 Type I Report",
                description: "Assesses the design of security controls at a specific point in time. Evaluates whether controls are suitably designed to meet Trust Services Criteria.",
                timeline: "2-4 months typical duration",
                features: [
                  "Point-in-time assessment",
                  "Control design evaluation",
                  "System description review",
                  "Faster to obtain",
                  "Good starting point",
                  "Less expensive option"
                ]
              },
              {
                type: "Type II",
                title: "SOC 2 Type II Report",
                description: "Tests the operational effectiveness of security controls over a period of time (minimum 6 months). Provides greater assurance and is preferred by most enterprises.",
                timeline: "6-12 months typical duration",
                features: [
                  "Minimum 6-month observation period",
                  "Tests operating effectiveness",
                  "Detailed testing evidence",
                  "Preferred by enterprise clients",
                  "Demonstrates sustained compliance",
                  "Higher level of assurance"
                ]
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-emerald-400 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover-lift"
              >
                <div className="mb-4">
                  <span className="bg-emerald-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">{item.type}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">{item.title}</h3>
                  <p className="text-emerald-400 text-sm mt-2">{item.timeline}</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{item.description}</p>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOC 2 Journey */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">SOC 2 Compliance Journey</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: "1", title: "Readiness", desc: "Scope definition and gap analysis" },
                { phase: "2", title: "Remediation", desc: "Implement required controls" },
                { phase: "3", title: "Monitoring", desc: "6-month observation period" },
                { phase: "4", title: "Audit", desc: "Independent examination" },
                { phase: "5", title: "Certification", desc: "Receive SOC 2 report" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#0d1a2d] rounded-lg p-5 text-center border border-gray-700 hover:border-emerald-400 transition-all">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xl">{step.phase}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of SOC 2 Compliance
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Build Customer Trust",
                description: "Demonstrate commitment to security and privacy, building confidence with enterprise customers and partners.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Win Enterprise Deals",
                description: "Meet security requirements of large organizations and pass vendor security assessments more easily.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )
              },
              {
                title: "Reduce Security Questionnaires",
                description: "Streamline vendor assessments by providing standardized SOC 2 report instead of multiple questionnaires.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Improve Security Posture",
                description: "Implement robust security controls and best practices, reducing risk of data breaches and incidents.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Competitive Differentiation",
                description: "Stand out from competitors who lack SOC 2 certification, especially in competitive markets.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Investor Confidence",
                description: "Demonstrate operational maturity and risk management to investors, facilitating funding and partnerships.",
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
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Start Your SOC 2 Journey Today
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our SOC 2 experts guide you through readiness, implementation, and successful audit completion to achieve certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Schedule Consultation
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              SOC 2 Readiness Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
