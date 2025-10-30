'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SecurityArchitectureReview() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const areasRef = useGsapStagger(8, { stagger: 0.12 });
  const deliverablesRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">Security Architecture Review</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Security Design & Assessment Services</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Security Architecture Review</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/sigmund-Im_cQ6hQo10-unsplash.webp" alt="Security Architecture Review" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/steve-johnson-luT1PtFOWZU-unsplash.webp" alt="Security Architecture Review Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Building Security from the Foundation
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Security Architecture Review is a comprehensive assessment of an organization's security design, infrastructure, and controls to identify vulnerabilities, architectural flaws, and opportunities for improvement. This proactive approach ensures that security is built into the foundation of IT systems rather than added as an afterthought.
              </p>
              <p>
                Cyber Radar Systems provides expert Security Architecture Review services that evaluate your entire security landscape—from network design and cloud architecture to application security and data protection controls. Our certified security architects bring deep expertise in security frameworks, best practices, and emerging threats to help you build resilient, defensible systems.
              </p>
              <p>
                Whether you're designing new systems, modernizing legacy infrastructure, or preparing for digital transformation, our Security Architecture Review ensures your technology investments align with security requirements, regulatory compliance, and business objectives while remaining scalable and maintainable.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Review Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Architecture Review Components
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Network Architecture",
                description: "Review network segmentation, firewall rules, routing, VPNs, DMZs, and perimeter security controls for proper isolation and protection.",
                icon: "🌐"
              },
              {
                title: "Cloud Architecture",
                description: "Assess cloud infrastructure design, IAM policies, resource configurations, and security controls in AWS, Azure, GCP, and hybrid environments.",
                icon: "☁️"
              },
              {
                title: "Application Architecture",
                description: "Evaluate application design patterns, authentication mechanisms, API security, data flow, and integration security across the application stack.",
                icon: "📱"
              },
              {
                title: "Data Architecture",
                description: "Review data classification, encryption implementation, access controls, data residency, and protection mechanisms throughout the data lifecycle.",
                icon: "🗄️"
              },
              {
                title: "Identity Architecture",
                description: "Assess identity and access management design, authentication methods, authorization models, directory services, and privilege management.",
                icon: "🔐"
              },
              {
                title: "Infrastructure Architecture",
                description: "Examine server architecture, virtualization, containerization, orchestration, and infrastructure-as-code security configurations.",
                icon: "🏗️"
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

        {/* Assessment Areas */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key Assessment Areas
          </AnimatedHeading>
          
          <div ref={areasRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Defense in Depth",
              "Least Privilege Access",
              "Zero Trust Principles",
              "Secure by Design",
              "Scalability & Performance",
              "High Availability",
              "Disaster Recovery",
              "Compliance Alignment"
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

        {/* Review Process */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">Architecture Review Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: "1", title: "Discovery", desc: "Document current architecture" },
                { phase: "2", title: "Analysis", desc: "Identify security gaps and risks" },
                { phase: "3", title: "Design", desc: "Develop improvement recommendations" },
                { phase: "4", title: "Roadmap", desc: "Create implementation plan" },
                { phase: "5", title: "Report", desc: "Deliver comprehensive findings" }
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

        {/* Deliverables */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Review Deliverables
          </AnimatedHeading>
          
          <div ref={deliverablesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Architecture Assessment Report",
                description: "Comprehensive analysis of current architecture with detailed findings, risk ratings, and security implications.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Architecture Diagrams",
                description: "Current and proposed architecture diagrams with security controls, data flows, and trust boundaries clearly documented.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Gap Analysis",
                description: "Identification of security gaps, architectural flaws, and deviations from best practices and standards.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Remediation Recommendations",
                description: "Prioritized recommendations for addressing identified issues with implementation guidance and best practices.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Implementation Roadmap",
                description: "Phased implementation plan with timelines, dependencies, resource requirements, and success metrics.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Executive Summary",
                description: "High-level summary for executives with key findings, business impact, and strategic recommendations.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )
              }
            ].map((deliverable, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                <div className="mb-4">{deliverable.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{deliverable.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Benefits of Architecture Review</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Proactive Risk Reduction",
                  description: "Identify and address architectural vulnerabilities before they can be exploited by attackers."
                },
                {
                  title: "Cost Optimization",
                  description: "Avoid costly retrofits by incorporating security early in design and development cycles."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Ensure architecture meets regulatory and compliance requirements through design validation."
                },
                {
                  title: "Scalability Assurance",
                  description: "Validate that security controls scale with business growth and don't become bottlenecks."
                },
                {
                  title: "Expert Guidance",
                  description: "Leverage expertise of certified security architects to avoid common pitfalls and implement best practices."
                },
                {
                  title: "Strategic Alignment",
                  description: "Ensure security architecture supports business objectives and enables digital transformation initiatives."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0a1628] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Strengthen Your Security Architecture
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our security architecture experts help you build secure, scalable, and compliant systems from the foundation up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Schedule Review
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Architecture Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
