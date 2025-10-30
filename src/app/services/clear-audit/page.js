'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function ClearAudit() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const areasRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">CLEAR Audit Services</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Comprehensive Audit & Assessment Solutions</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">CLEAR Audit</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/markus-winkler-dFVa5T9LE8o-unsplash.webp" alt="CLEAR Audit" className="w-full h-full object-cover" />
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
              Comprehensive IT Audit Framework
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                CLEAR (Compliance, Legal, Enforcement, Assurance, and Risk) Audit is a comprehensive IT audit framework designed to evaluate an organization's information systems, security controls, compliance posture, and risk management practices. This holistic approach ensures that your IT infrastructure not only meets regulatory requirements but also supports business objectives while managing risks effectively.
              </p>
              <p>
                Cyber Radar Systems delivers expert CLEAR Audit services that provide independent, objective assessments of your IT environment. Our certified auditors evaluate controls across all five CLEAR domains, identifying gaps, weaknesses, and opportunities for improvement while ensuring alignment with industry standards and best practices.
              </p>
              <p>
                Whether you're preparing for regulatory audits, seeking to improve your security posture, or demonstrating due diligence to stakeholders, our CLEAR Audit services provide the comprehensive assessment and actionable recommendations you need.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/maximalfocus-VT4rx775FT4-unsplash.webp" alt="CLEAR Audit Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CLEAR Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            The CLEAR Audit Framework
          </AnimatedHeading>
          
          <div ref={componentsRef} className="space-y-6 md:space-y-8">
            {[
              {
                letter: "C",
                title: "Compliance",
                description: "Assessment of adherence to regulatory requirements, industry standards, and internal policies including GDPR, HIPAA, PCI DSS, SOX, ISO 27001, and NIST frameworks.",
                color: "bg-blue-500",
                items: [
                  "Regulatory compliance assessment",
                  "Policy and procedure review",
                  "Standards alignment verification",
                  "Compliance gap analysis"
                ]
              },
              {
                letter: "L",
                title: "Legal",
                description: "Evaluation of legal obligations, contractual commitments, intellectual property protection, data privacy requirements, and liability management.",
                color: "bg-purple-500",
                items: [
                  "Legal requirement analysis",
                  "Contract compliance review",
                  "Data privacy assessment",
                  "Intellectual property protection"
                ]
              },
              {
                letter: "E",
                title: "Enforcement",
                description: "Review of security control implementation, policy enforcement mechanisms, access controls, monitoring systems, and incident response capabilities.",
                color: "bg-red-500",
                items: [
                  "Security control effectiveness",
                  "Policy enforcement mechanisms",
                  "Access control validation",
                  "Incident response readiness"
                ]
              },
              {
                letter: "A",
                title: "Assurance",
                description: "Verification of control effectiveness, business continuity planning, disaster recovery capabilities, and quality assurance processes.",
                color: "bg-green-500",
                items: [
                  "Control testing and validation",
                  "Business continuity assessment",
                  "Disaster recovery evaluation",
                  "Quality assurance review"
                ]
              },
              {
                letter: "R",
                title: "Risk",
                description: "Comprehensive risk assessment, threat analysis, vulnerability identification, risk mitigation strategy evaluation, and risk management framework review.",
                color: "bg-orange-500",
                items: [
                  "Risk identification and assessment",
                  "Threat and vulnerability analysis",
                  "Risk mitigation effectiveness",
                  "Risk management framework review"
                ]
              }
            ].map((component, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 ${component.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-4xl sm:text-5xl">{component.letter}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{component.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{component.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {component.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Areas */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key Audit Areas
          </AnimatedHeading>
          
          <div ref={areasRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "IT Governance",
              "Information Security",
              "Access Management",
              "Network Infrastructure",
              "Application Security",
              "Data Protection",
              "Change Management",
              "Incident Management"
            ].map((area, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Process */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">Our Audit Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: "1", title: "Planning", desc: "Define scope, objectives, and methodology" },
                { phase: "2", title: "Assessment", desc: "Evaluate controls and gather evidence" },
                { phase: "3", title: "Testing", desc: "Perform detailed control testing" },
                { phase: "4", title: "Analysis", desc: "Analyze findings and identify gaps" },
                { phase: "5", title: "Reporting", desc: "Deliver comprehensive audit report" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#0d1a2d] rounded-lg p-5 text-center border border-gray-700 hover:border-emerald-400 transition-all">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xl">{step.phase}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs">{step.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of CLEAR Audit
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Comprehensive Assessment",
                description: "Holistic evaluation across compliance, legal, enforcement, assurance, and risk domains for complete visibility.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Confidence",
                description: "Demonstrate compliance with regulatory requirements and industry standards to auditors and stakeholders.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Risk Identification",
                description: "Identify security weaknesses, compliance gaps, and operational risks before they impact your business.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Actionable Recommendations",
                description: "Receive detailed, prioritized recommendations for improving security, compliance, and operational efficiency.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Stakeholder Assurance",
                description: "Provide independent validation of controls and processes to management, board, and external stakeholders.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )
              },
              {
                title: "Continuous Improvement",
                description: "Establish baseline for ongoing monitoring and continuous improvement of IT controls and processes.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
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

        {/* Deliverables */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Audit Deliverables</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Comprehensive audit report with executive summary",
                "Detailed findings across all CLEAR domains",
                "Risk assessment with severity ratings",
                "Control effectiveness evaluation",
                "Compliance gap analysis",
                "Prioritized remediation roadmap",
                "Best practice recommendations",
                "Follow-up assessment plan"
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#0a1628] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready for a Comprehensive IT Audit?
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our CLEAR Audit services provide the comprehensive assessment you need to ensure compliance, manage risks, and improve your IT controls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Schedule an Audit
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Download Audit Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
