'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function HIPAACompliances() {
  const safeguardsRef = useGsapStagger(3, { stagger: 0.2 });
  const requirementsRef = useGsapStagger(8, { stagger: 0.12 });
  const servicesRef = useGsapStagger(6, { stagger: 0.15 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">
                HIPAA Compliance Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Healthcare Security & Compliance Solutions
              </p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">HIPAA Compliance</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/growtika-cAuANa0VvGw-unsplash.webp" alt="HIPAA Compliance" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/guerrillabuzz-3TU34jaW88k-unsplash.webp" alt="HIPAA Compliance Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Healthcare Data Protection & Compliance
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                The Health Insurance Portability and Accountability Act (HIPAA) establishes comprehensive standards for protecting sensitive patient health information. Healthcare organizations, health plans, healthcare clearinghouses, and business associates must implement appropriate administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of electronic Protected Health Information (ePHI).
              </p>
              <p>
                Cyber Radar Systems provides expert HIPAA compliance services that help healthcare organizations achieve and maintain compliance with HIPAA Privacy Rule, Security Rule, Breach Notification Rule, and Enforcement Rule. Our comprehensive approach includes risk assessments, gap analysis, policy development, security implementation, and ongoing compliance monitoring.
              </p>
              <p>
                With escalating cyber threats targeting healthcare data and increasing regulatory scrutiny, maintaining HIPAA compliance is critical not only to avoid substantial penalties but also to protect patient privacy and maintain organizational reputation.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* HIPAA Safeguards */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            HIPAA Security Rule Safeguards
          </AnimatedHeading>
          
          <div ref={safeguardsRef} className="space-y-6 md:space-y-8">
            {[
              {
                title: "Administrative Safeguards",
                description: "Policies and procedures designed to manage the selection, development, implementation, and maintenance of security measures to protect ePHI.",
                color: "border-blue-500",
                requirements: [
                  "Security Management Process - Risk analysis, risk management, sanction policy, information system activity review",
                  "Assigned Security Responsibility - Designated security official responsible for security policies",
                  "Workforce Security - Authorization, supervision, termination procedures, and workforce clearance",
                  "Information Access Management - Access authorization, access establishment and modification",
                  "Security Awareness Training - Security reminders, protection from malicious software, log-in monitoring, password management",
                  "Security Incident Procedures - Response and reporting procedures for security incidents",
                  "Contingency Planning - Data backup, disaster recovery, emergency mode operations, testing and revision",
                  "Business Associate Contracts - Written contracts ensuring associates protect ePHI"
                ]
              },
              {
                title: "Physical Safeguards",
                description: "Physical measures, policies, and procedures to protect electronic information systems and related buildings and equipment from natural and environmental hazards and unauthorized intrusion.",
                color: "border-green-500",
                requirements: [
                  "Facility Access Controls - Contingency operations, facility security plan, access control and validation procedures",
                  "Workstation Use - Policies and procedures specifying proper workstation functions and physical attributes",
                  "Workstation Security - Physical safeguards for workstations that access ePHI to restrict access",
                  "Device and Media Controls - Policies for receipt, removal, disposal, re-use of hardware and electronic media"
                ]
              },
              {
                title: "Technical Safeguards",
                description: "Technology and related policies and procedures to protect ePHI and control access to it.",
                color: "border-purple-500",
                requirements: [
                  "Access Control - Unique user identification, emergency access procedures, automatic log-off, encryption and decryption",
                  "Audit Controls - Hardware, software, and procedural mechanisms to record and examine activity in systems with ePHI",
                  "Integrity Controls - Mechanisms to ensure ePHI is not improperly altered or destroyed",
                  "Person or Entity Authentication - Procedures to verify identity of person or entity seeking access to ePHI",
                  "Transmission Security - Technical security measures to guard against unauthorized access during electronic transmission"
                ]
              }
            ].map((safeguard, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border-l-4 ${safeguard.color} rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{safeguard.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{safeguard.description}</p>
                <div className="space-y-3">
                  {safeguard.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#0a1628] p-4 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs sm:text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Requirements */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key HIPAA Compliance Requirements
          </AnimatedHeading>
          
          <div ref={requirementsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Risk Analysis & Management",
              "Privacy Policies & Procedures",
              "Security Incident Response",
              "Breach Notification Protocol",
              "Business Associate Agreements",
              "Employee Training Programs",
              "Audit Logging & Monitoring",
              "Data Encryption Standards"
            ].map((requirement, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our HIPAA Services */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Our HIPAA Compliance Services
          </AnimatedHeading>
          
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "HIPAA Risk Assessment",
                description: "Comprehensive risk analysis to identify vulnerabilities and threats to ePHI, evaluate current safeguards, and determine potential risks.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Gap Analysis & Remediation",
                description: "Identify compliance gaps against HIPAA requirements and develop prioritized remediation plan with implementation support.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Policy & Procedure Development",
                description: "Create comprehensive HIPAA-compliant policies, procedures, and documentation tailored to your organization.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Security Implementation",
                description: "Deploy technical, physical, and administrative safeguards including encryption, access controls, and monitoring systems.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Staff Training & Awareness",
                description: "Conduct comprehensive HIPAA training programs for workforce members on privacy, security, and compliance requirements.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )
              },
              {
                title: "Ongoing Compliance Monitoring",
                description: "Continuous monitoring, annual reviews, and compliance audits to ensure sustained HIPAA adherence and regulatory updates.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Penalties */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-red-500 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">HIPAA Violation Penalties</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">Non-compliance with HIPAA can result in substantial civil and criminal penalties:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { tier: "Tier 1: Unknowing", penalty: "$100 - $50,000 per violation", max: "$1.5M annual maximum" },
                { tier: "Tier 2: Reasonable Cause", penalty: "$1,000 - $50,000 per violation", max: "$1.5M annual maximum" },
                { tier: "Tier 3: Willful Neglect (Corrected)", penalty: "$10,000 - $50,000 per violation", max: "$1.5M annual maximum" },
                { tier: "Tier 4: Willful Neglect (Not Corrected)", penalty: "$50,000 per violation", max: "$1.5M annual maximum" }
              ].map((item, index) => (
                <div key={index} className="bg-[#0d1a2d] rounded-lg p-5 border-l-4 border-red-400">
                  <h4 className="text-lg font-bold text-white mb-2">{item.tier}</h4>
                  <p className="text-red-400 font-semibold text-sm mb-1">{item.penalty}</p>
                  <p className="text-gray-400 text-xs">{item.max}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Achieve & Maintain HIPAA Compliance
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Protect patient data, avoid costly penalties, and maintain trust with our comprehensive HIPAA compliance services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Schedule Risk Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              HIPAA Compliance Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
