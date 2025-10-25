'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SOEITAudit() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const areasRef = useGsapStagger(9, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            SOE IT Audit Services
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › STANDARD OPERATING ENVIRONMENT AUDIT
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Standardize and Secure Your IT Environment
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Standard Operating Environment (SOE) is a standardized implementation of an operating system and its associated applications, configurations, and security settings that ensures consistency, security, and manageability across an organization's IT infrastructure. SOE IT Audit evaluates the effectiveness of your standardization efforts, identifies configuration drift, and ensures compliance with security policies.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive SOE IT Audit services that assess your desktop, laptop, server, and mobile device configurations against your defined standards and industry best practices. Our auditors evaluate configuration management processes, security baselines, patch management, and software deployment to ensure your IT environment is secure, compliant, and efficiently managed.
              </p>
              <p>
                Whether you're implementing a new SOE, maintaining existing standards, or preparing for a security assessment, our SOE IT Audit services help you identify gaps, reduce security risks, and improve operational efficiency through effective standardization.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SOE Audit Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            SOE Audit Components
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Configuration Standards",
                description: "Review and validate standardized configurations for operating systems, applications, and security settings across all devices.",
                icon: "⚙️"
              },
              {
                title: "Security Baseline Assessment",
                description: "Evaluate security hardening configurations, encryption standards, and security controls against industry benchmarks like CIS and NIST.",
                icon: "🔒"
              },
              {
                title: "Patch Management Review",
                description: "Assess patch deployment processes, update schedules, and vulnerability remediation timelines for operating systems and applications.",
                icon: "🔄"
              },
              {
                title: "Software Compliance",
                description: "Verify authorized software installations, license compliance, and identification of unauthorized or risky applications.",
                icon: "📦"
              },
              {
                title: "Configuration Drift Analysis",
                description: "Identify devices that have drifted from standard configurations and assess the security impact of unauthorized changes.",
                icon: "📊"
              },
              {
                title: "Deployment & Management",
                description: "Evaluate SOE deployment processes, imaging procedures, and automated configuration management tools and workflows.",
                icon: "🚀"
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

        {/* Audit Areas */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key Assessment Areas
          </AnimatedHeading>
          
          <div ref={areasRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Operating System Configuration",
              "Application Standardization",
              "Security Policy Enforcement",
              "User Profile Management",
              "Network Configuration",
              "Storage & Encryption",
              "Backup & Recovery Settings",
              "Monitoring & Logging",
              "Performance Optimization"
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

        {/* SOE Maturity Levels */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">SOE Maturity Assessment</h3>
            <div className="space-y-4">
              {[
                {
                  level: "Level 1: Initial",
                  description: "Ad-hoc configurations with minimal standardization. High configuration drift and security inconsistencies.",
                  color: "border-red-500"
                },
                {
                  level: "Level 2: Repeatable",
                  description: "Basic SOE documented with some automation. Configurations are repeatable but not consistently enforced.",
                  color: "border-orange-500"
                },
                {
                  level: "Level 3: Defined",
                  description: "Comprehensive SOE standards defined and documented. Regular monitoring with some automated enforcement.",
                  color: "border-yellow-500"
                },
                {
                  level: "Level 4: Managed",
                  description: "SOE actively managed with automated deployment and configuration management. Minimal drift with regular audits.",
                  color: "border-blue-500"
                },
                {
                  level: "Level 5: Optimized",
                  description: "Fully automated SOE lifecycle management with continuous monitoring, self-healing, and proactive optimization.",
                  color: "border-green-500"
                }
              ].map((maturity, index) => (
                <div key={index} className={`flex items-start gap-4 p-5 bg-[#0d1a2d] rounded-lg border-l-4 ${maturity.color}`}>
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{maturity.level}</h4>
                    <p className="text-gray-300 text-sm">{maturity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of SOE IT Audit
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Enhanced Security Posture",
                description: "Identify and remediate security misconfigurations and ensure consistent security controls across all endpoints.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Reduced Support Costs",
                description: "Standardized configurations reduce troubleshooting time, minimize compatibility issues, and streamline support processes.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Compliance Assurance",
                description: "Demonstrate compliance with regulatory requirements and internal policies through consistent configuration standards.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Improved Efficiency",
                description: "Automated deployment and configuration management reduce manual effort and accelerate device provisioning.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Risk Mitigation",
                description: "Identify configuration drift and unauthorized changes that could introduce security vulnerabilities or operational risks.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Better User Experience",
                description: "Consistent environments reduce user confusion, improve productivity, and provide predictable performance.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
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

        {/* Audit Deliverables */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What You Receive</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Comprehensive SOE audit report with findings and risk ratings",
                "Configuration drift analysis and affected device inventory",
                "Security baseline compliance assessment",
                "Gap analysis against industry standards (CIS, NIST, DISA STIG)",
                "Patch management effectiveness evaluation",
                "Software compliance and license audit results",
                "Prioritized remediation recommendations",
                "SOE optimization and improvement roadmap"
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

        {/* Supported Platforms */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400 text-center">Supported Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { platform: "Windows", icon: "🪟", desc: "Desktop & Server" },
                { platform: "macOS", icon: "🍎", desc: "Desktop & Mobile" },
                { platform: "Linux", icon: "🐧", desc: "Server & Desktop" },
                { platform: "Mobile", icon: "📱", desc: "iOS & Android" }
              ].map((item, index) => (
                <div key={index} className="bg-[#0d1a2d] rounded-lg p-6 text-center border border-gray-700 hover:border-emerald-400 transition-all">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.platform}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Optimize Your Standard Operating Environment
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our SOE IT Audit services help you ensure consistent, secure, and efficient device configurations across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request SOE Audit
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
