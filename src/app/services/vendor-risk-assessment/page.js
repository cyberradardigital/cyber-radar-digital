'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function VendorRiskAssessment() {
  const stagesRef = useGsapStagger(5, { stagger: 0.15 });
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">Third Party Vendor Risk Assessment</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Comprehensive Vendor Risk Management</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Vendor Risk Assessment</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/privecstasy-CXlqHmQy3MY-unsplash.webp" alt="Vendor Risk Assessment" className="w-full h-full object-cover" />
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
              Mitigate Third-Party Security Risks
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                In today's interconnected business environment, organizations rely heavily on third-party vendors, suppliers, and service providers. While these partnerships drive efficiency and innovation, they also introduce significant security risks that can compromise your organization's data, systems, and reputation.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive Third Party Vendor Risk Assessment services that help organizations identify, evaluate, and mitigate security risks associated with external vendors and partners. Our systematic approach ensures that your vendor ecosystem meets your security standards and compliance requirements.
              </p>
              <p>
                From initial vendor selection to ongoing monitoring, we assess vendor security postures, contractual obligations, and operational practices to protect your organization from supply chain attacks, data breaches, and compliance violations.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/robynne-o-HOrhCnQsxnQ-unsplash.webp" alt="Vendor Risk Assessment Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Assessment Stages */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Vendor Risk Assessment Stages
          </AnimatedHeading>
          
          <div ref={stagesRef} className="space-y-6 md:space-y-8">
            {[
              {
                stage: "1",
                title: "Vendor Identification & Categorization",
                description: "Identify all third-party vendors and categorize them based on risk level, data access, and criticality to business operations. Create a comprehensive vendor inventory with detailed risk profiles.",
                icon: "🔍"
              },
              {
                stage: "2",
                title: "Security Questionnaire & Documentation Review",
                description: "Distribute comprehensive security questionnaires and review vendor documentation including security policies, compliance certifications, insurance coverage, and incident response procedures.",
                icon: "📋"
              },
              {
                stage: "3",
                title: "On-Site Security Assessment",
                description: "Conduct detailed on-site assessments for high-risk vendors, evaluating physical security, access controls, data handling procedures, and security awareness training programs.",
                icon: "🏢"
              },
              {
                stage: "4",
                title: "Technical Security Evaluation",
                description: "Assess vendor's technical security controls including network security, encryption standards, vulnerability management, patch management, and security monitoring capabilities.",
                icon: "🔒"
              },
              {
                stage: "5",
                title: "Continuous Monitoring & Reassessment",
                description: "Implement ongoing monitoring of vendor security posture, track remediation efforts, and conduct periodic reassessments to ensure continued compliance with security requirements.",
                icon: "📊"
              }
            ].map((stage, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-2xl sm:text-3xl">{stage.stage}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{stage.icon}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{stage.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Assessment Areas */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key Assessment Areas
          </AnimatedHeading>
          
          <div ref={areasRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Information Security Policies",
              "Data Protection & Privacy",
              "Access Control & Authentication",
              "Network Security & Monitoring",
              "Incident Response Capabilities",
              "Business Continuity Planning",
              "Compliance Certifications",
              "Security Training & Awareness"
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

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of Vendor Risk Assessment
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Supply Chain Protection",
                description: "Protect your organization from supply chain attacks by ensuring vendors maintain robust security controls and practices.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                description: "Ensure vendors comply with industry regulations including GDPR, HIPAA, PCI DSS, and other applicable standards.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Risk Visibility",
                description: "Gain comprehensive visibility into vendor security postures and identify potential risks before they impact your organization.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Contract Negotiation",
                description: "Use assessment findings to negotiate better security terms, SLAs, and liability clauses in vendor contracts.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Incident Prevention",
                description: "Proactively identify and remediate vendor security weaknesses before they lead to data breaches or service disruptions.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Stakeholder Confidence",
                description: "Demonstrate due diligence to stakeholders, customers, and regulators by maintaining a robust vendor risk management program.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
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

        {/* Risk Rating Framework */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">Vendor Risk Rating Framework</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { level: "Critical", color: "bg-red-500", desc: "Immediate action required", criteria: "High data access, major security gaps" },
                { level: "High", color: "bg-orange-500", desc: "Urgent remediation needed", criteria: "Significant vulnerabilities identified" },
                { level: "Medium", color: "bg-yellow-500", desc: "Monitor and improve", criteria: "Some security concerns present" },
                { level: "Low", color: "bg-green-500", desc: "Acceptable risk level", criteria: "Strong security posture" }
              ].map((risk, index) => (
                <div key={index} className="bg-[#0d1a2d] rounded-lg p-5 text-center border border-gray-700">
                  <div className={`w-16 h-16 ${risk.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{risk.level}</h4>
                  <p className="text-emerald-400 text-sm mb-3 font-semibold">{risk.desc}</p>
                  <p className="text-gray-400 text-xs">{risk.criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Assessment Deliverables */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What You Receive</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Comprehensive vendor risk assessment reports",
                "Risk scoring and prioritization matrix",
                "Detailed findings and recommendations",
                "Vendor comparison and benchmarking analysis",
                "Remediation roadmap with timelines",
                "Executive summary for stakeholders",
                "Ongoing monitoring dashboard",
                "Contract security addendum templates"
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
            Secure Your Vendor Ecosystem
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Don't let third-party vendors become your weakest link. Our comprehensive vendor risk assessments help you identify and mitigate security risks before they impact your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Start Vendor Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Download Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
