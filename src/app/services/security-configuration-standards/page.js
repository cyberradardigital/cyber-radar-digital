'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function SecurityConfigurationStandards() {
  const standardsRef = useGsapStagger(5, { stagger: 0.15 });
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">Security Configuration Standards</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Hardening & Baseline Management</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Security Configuration Standards</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/wesley-ford-biBRoGc7ir0-unsplash.webp" alt="Security Configuration Standards" className="w-full h-full object-cover" />
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
              Secure Configurations as Defense Foundation
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Security Configuration Standards define and enforce secure settings across operating systems, applications, network devices, and cloud services. Misconfigurations are one of the leading causes of security breaches, making proper configuration management essential for maintaining a strong security posture.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive Security Configuration Standards services that help organizations establish, implement, and maintain secure baseline configurations aligned with industry best practices including CIS Benchmarks, NIST guidelines, DISA STIGs, and vendor hardening guides.
              </p>
              <p>
                Our configuration management approach combines automated scanning, continuous monitoring, and expert remediation guidance to ensure your systems remain securely configured, compliant with regulations, and protected against configuration-based attacks while maintaining operational functionality.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/adi-goldstein-EUsVwEOsblE-unsplash.webp" alt="Security Configuration Standards Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Configuration Standards */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Industry Configuration Standards
          </AnimatedHeading>
          
          <div ref={standardsRef} className="space-y-6 md:space-y-8">
            {[
              {
                standard: "CIS Benchmarks",
                description: "Center for Internet Security provides consensus-based best practice security configuration guidelines for over 140 technologies.",
                color: "border-blue-500",
                coverage: [
                  "Operating Systems (Windows, Linux, macOS, Unix)",
                  "Cloud Platforms (AWS, Azure, GCP, Oracle Cloud)",
                  "Database Systems (SQL Server, Oracle, MySQL, PostgreSQL)",
                  "Network Devices (Cisco, Palo Alto, Fortinet)",
                  "Applications (Docker, Kubernetes, Office 365)",
                  "Mobile Devices (iOS, Android)"
                ]
              },
              {
                standard: "NIST Guidelines",
                description: "National Institute of Standards and Technology provides comprehensive cybersecurity frameworks and configuration guidelines.",
                color: "border-green-500",
                coverage: [
                  "NIST 800-53 Security Controls",
                  "NIST Cybersecurity Framework",
                  "NIST 800-171 for CUI Protection",
                  "NIST 800-123 Server Security Guidelines",
                  "NIST 800-128 Application Security",
                  "NIST Cloud Computing Standards"
                ]
              },
              {
                standard: "DISA STIGs",
                description: "Defense Information Systems Agency Security Technical Implementation Guides provide military-grade configuration standards.",
                color: "border-red-500",
                coverage: [
                  "Operating System Hardening",
                  "Application Security Configuration",
                  "Network Device Hardening",
                  "Database Security Settings",
                  "Web Server Configuration",
                  "Mobile Device Management"
                ]
              },
              {
                standard: "PCI DSS Requirements",
                description: "Payment Card Industry Data Security Standard mandates specific security configurations for systems handling cardholder data.",
                color: "border-yellow-500",
                coverage: [
                  "Firewall Configuration Standards",
                  "Default Password Management",
                  "Encryption Key Management",
                  "Access Control Configuration",
                  "Logging and Monitoring Settings",
                  "Network Segmentation"
                ]
              },
              {
                standard: "Vendor Hardening Guides",
                description: "Technology vendors provide security hardening documentation specific to their products and platforms.",
                color: "border-purple-500",
                coverage: [
                  "Microsoft Security Baselines",
                  "VMware Hardening Guides",
                  "Oracle Security Checklists",
                  "SAP Security Configuration",
                  "Cisco Security Guides",
                  "AWS Security Best Practices"
                ]
              }
            ].map((standard, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border-l-4 ${standard.color} rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{standard.standard}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{standard.description}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {standard.coverage.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#0a1628] p-3 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Configuration Areas */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Key Configuration Areas
          </AnimatedHeading>
          
          <div ref={areasRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Password Policies",
              "Account Management",
              "Access Controls",
              "Audit Logging",
              "Network Services",
              "Encryption Settings",
              "Update Management",
              "Service Hardening"
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

        {/* Our Services */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-400">Our Configuration Management Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Baseline Development",
                  description: "Create customized security baseline configurations tailored to your environment, business requirements, and compliance needs."
                },
                {
                  service: "Configuration Assessment",
                  description: "Automated scanning and manual review of current configurations against industry standards and best practices."
                },
                {
                  service: "Remediation Planning",
                  description: "Prioritized remediation roadmap with detailed implementation guidance and rollback procedures."
                },
                {
                  service: "Implementation Support",
                  description: "Hands-on assistance implementing secure configurations across your infrastructure with minimal disruption."
                },
                {
                  service: "Continuous Monitoring",
                  description: "Ongoing configuration monitoring with automated drift detection and alerting for unauthorized changes."
                },
                {
                  service: "Compliance Reporting",
                  description: "Comprehensive reports demonstrating configuration compliance with regulatory and industry standards."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0d1a2d] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.service}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of Configuration Standards
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Reduced Attack Surface",
                description: "Disable unnecessary services, close unused ports, and remove default accounts to minimize potential attack vectors.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Compliance Achievement",
                description: "Meet configuration requirements for HIPAA, PCI DSS, SOX, GDPR, and other regulatory frameworks through standardized settings.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Operational Consistency",
                description: "Ensure consistent security posture across all systems, reducing complexity and simplifying management.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                )
              },
              {
                title: "Faster Deployment",
                description: "Automate system provisioning with pre-hardened templates and configurations, accelerating secure deployment.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Audit Readiness",
                description: "Demonstrate configuration compliance to auditors with documented baselines and compliance evidence.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Drift Prevention",
                description: "Detect and remediate configuration drift through continuous monitoring and automated enforcement.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
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
            Harden Your Systems with Configuration Standards
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our configuration management experts help you establish, implement, and maintain secure baseline configurations across your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Start Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Configuration Guide
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
