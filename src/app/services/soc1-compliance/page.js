'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SOC1Compliance() {
  const typesRef = useGsapStagger(2, { stagger: 0.2 });
  const componentsRef = useGsapStagger(5, { stagger: 0.15 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.12 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">SOC 1 Compliance Services</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Service Organization Control Reports</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">SOC 1</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/jason-dent-3wPJxh-piRw-unsplash.webp" alt="SOC 1" className="w-full h-full object-cover" />
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
              Internal Controls Over Financial Reporting
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                SOC 1 (Service Organization Control 1) reports are designed for service organizations that provide services that affect their clients' internal controls over financial reporting (ICFR). These reports provide assurance about the controls at a service organization that are relevant to user entities' internal controls as they relate to financial reporting.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive SOC 1 readiness assessments, gap analysis, control implementation, and audit support services. Our experts help service organizations prepare for and successfully complete SOC 1 examinations, ensuring controls are properly designed and operating effectively to meet client and auditor expectations.
              </p>
              <p>
                SOC 1 reports are critical for organizations such as payroll processors, claims processors, data centers, and SaaS providers whose services impact their clients' financial statements. These reports demonstrate commitment to control excellence and provide assurance to clients and their auditors.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/kevin-ku-w7ZyuGYNpRQ-unsplash.webp" alt="SOC 1 Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* SOC 1 Types */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            SOC 1 Report Types
          </AnimatedHeading>
          
          <div ref={typesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                type: "Type I",
                title: "SOC 1 Type I Report",
                description: "Reports on the fairness of the presentation of management's description of the service organization's system and the suitability of the design of controls at a specific point in time.",
                features: [
                  "Point-in-time assessment",
                  "Evaluates control design suitability",
                  "Management's system description",
                  "Independent auditor opinion",
                  "Less comprehensive than Type II",
                  "Faster to complete"
                ],
                color: "border-blue-500"
              },
              {
                type: "Type II",
                title: "SOC 1 Type II Report",
                description: "Includes everything in Type I plus testing of the operating effectiveness of controls over a minimum period of six months, providing greater assurance to user entities.",
                features: [
                  "Covers minimum 6-month period",
                  "Tests operating effectiveness",
                  "Includes detailed test results",
                  "More comprehensive assurance",
                  "Preferred by auditors and clients",
                  "Demonstrates sustained compliance"
                ],
                color: "border-emerald-500"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border-l-4 ${item.color} rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover-lift`}
              >
                <div className="mb-4">
                  <span className="text-emerald-400 font-bold text-lg">{item.type}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{item.description}</p>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Services Criteria */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Control Objectives & Activities
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "User Access Controls",
                description: "Authentication, authorization, and access management controls ensuring only authorized users can access systems and data.",
                icon: "🔐"
              },
              {
                title: "Change Management",
                description: "Policies and procedures for managing changes to systems, applications, and infrastructure affecting financial reporting.",
                icon: "🔄"
              },
              {
                title: "Data Integrity",
                description: "Controls ensuring accuracy, completeness, and consistency of data used in financial reporting processes.",
                icon: "✓"
              },
              {
                title: "Operations & Monitoring",
                description: "System monitoring, incident management, and operational procedures maintaining service availability and performance.",
                icon: "📊"
              },
              {
                title: "Business Continuity",
                description: "Backup, recovery, and disaster recovery procedures ensuring continuity of critical financial reporting services.",
                icon: "🔄"
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

        {/* SOC 1 Process */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">SOC 1 Examination Process</h3>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { phase: "1", title: "Scoping", desc: "Define audit scope and controls" },
                { phase: "2", title: "Readiness", desc: "Gap analysis and remediation" },
                { phase: "3", title: "Design", desc: "Document control design" },
                { phase: "4", title: "Testing", desc: "Test control effectiveness" },
                { phase: "5", title: "Audit", desc: "Independent examination" },
                { phase: "6", title: "Report", desc: "Receive SOC 1 report" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#0d1a2d] rounded-lg p-4 text-center border border-gray-700 hover:border-emerald-400 transition-all">
                    <div className="w-10 h-10 bg-emerald-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-lg">{step.phase}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
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
            Benefits of SOC 1 Compliance
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Client Confidence",
                description: "Demonstrate control excellence and provide assurance to clients and their auditors regarding financial reporting controls.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Competitive Advantage",
                description: "Differentiate from competitors and meet client requirements for service provider due diligence and vendor assessments.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )
              },
              {
                title: "Audit Efficiency",
                description: "Reduce redundant audits by providing standardized reporting that satisfies multiple client auditor requirements.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Control Improvement",
                description: "Identify and remediate control weaknesses, improving overall operational effectiveness and risk management.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Alignment",
                description: "Align with Sarbanes-Oxley (SOX) requirements and demonstrate commitment to strong internal controls.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Market Expansion",
                description: "Access enterprise clients and regulated industries that require SOC 1 reports from service providers.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
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

        {/* Who Needs SOC 1 */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Organizations That Need SOC 1 Reports</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { org: "Payroll Service Providers", desc: "Process employee compensation affecting financial statements" },
                { org: "Claims Processing Services", desc: "Handle insurance claims impacting financial reporting" },
                { org: "Data Center & Cloud Providers", desc: "Host systems and data for financial applications" },
                { org: "SaaS Financial Applications", desc: "Provide accounting, ERP, or financial management software" },
                { org: "Transaction Processors", desc: "Handle payments, billing, or financial transactions" },
                { org: "Investment Fund Administrators", desc: "Manage fund accounting and investor reporting" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0a1628] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.org}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready for SOC 1 Compliance?
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our SOC 1 readiness and audit support services help you achieve compliance and provide assurance to your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Start SOC 1 Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              SOC 1 Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
