'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function EncryptionKeyManagement() {
  const componentsRef = useGsapStagger(6, { stagger: 0.15 });
  const featuresRef = useGsapStagger(8, { stagger: 0.12 });
  const benefitsRef = useGsapStagger(4, { stagger: 0.15 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">
                Encryption Key Management
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Secure Key Lifecycle Management Solutions
              </p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Encryption Key Management</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/ed-hardie-1C5F88Af9ZU-unsplash.webp" alt="Encryption Key Management" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/ed-hardie-p0vN2xCvJNg-unsplash.webp" alt="Encryption Key Management Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-6 sm:p-8 md:p-10 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Secure Your Most Critical Asset: Encryption Keys
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Encryption Key Management (EKM) is the foundation of data security in modern organizations. As encryption becomes ubiquitous across cloud services, applications, and storage systems, managing the lifecycle of cryptographic keys becomes increasingly critical. Poor key management can render even the strongest encryption useless.
              </p>
              <p>
                Cyber Radar Systems provides comprehensive Encryption Key Management solutions that help organizations generate, store, distribute, rotate, and destroy cryptographic keys securely throughout their lifecycle. Our platform ensures that your encryption keys are protected with the highest level of security while remaining accessible to authorized users and applications.
              </p>
              <p>
                With support for industry standards including FIPS 140-2, PKCS#11, and KMIP, our solution integrates seamlessly with your existing infrastructure while providing centralized control and visibility over all cryptographic operations.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Management Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Core Key Management Components
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Key Generation",
                description: "Generate cryptographically secure keys using hardware security modules (HSMs) and certified random number generators that meet industry standards.",
                icon: "🔐"
              },
              {
                title: "Key Storage & Protection",
                description: "Store encryption keys in FIPS 140-2 Level 3 validated HSMs with tamper-resistant hardware and multi-layer security controls.",
                icon: "🛡️"
              },
              {
                title: "Key Distribution",
                description: "Securely distribute keys to authorized applications and users using encrypted channels and strict access controls.",
                icon: "📤"
              },
              {
                title: "Key Rotation",
                description: "Automate key rotation schedules to minimize risk exposure and comply with security policies and regulatory requirements.",
                icon: "🔄"
              },
              {
                title: "Key Backup & Recovery",
                description: "Implement secure key backup and recovery procedures to ensure business continuity while maintaining security.",
                icon: "💾"
              },
              {
                title: "Key Destruction",
                description: "Securely destroy keys when they reach end-of-life using cryptographic erasure and physical destruction methods.",
                icon: "🗑️"
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

        {/* Advanced Features */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Advanced EKM Features
          </AnimatedHeading>
          
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Multi-Tenant Architecture",
              "HSM Integration",
              "API & SDK Support",
              "Role-Based Access Control",
              "Audit Logging & Reporting",
              "Compliance Management",
              "Cloud Key Management",
              "Quantum-Safe Cryptography"
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

        {/* Benefits Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Benefits of Encryption Key Management
          </AnimatedHeading>
          
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Enhanced Data Security",
                description: "Protect sensitive data with enterprise-grade encryption and secure key management practices that prevent unauthorized access and data breaches.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Regulatory Compliance",
                description: "Meet compliance requirements for GDPR, HIPAA, PCI DSS, SOX, and other regulations with comprehensive audit trails and key lifecycle management.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Operational Efficiency",
                description: "Automate key lifecycle management processes, reduce manual errors, and streamline cryptographic operations across your organization.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Centralized Control",
                description: "Manage all encryption keys from a single platform with unified visibility, policy enforcement, and access controls across hybrid and multi-cloud environments.",
                icon: (
                  <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
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

        {/* Standards & Compliance */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-emerald-400 text-center">Supported Standards & Protocols</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { name: "FIPS 140-2", desc: "Level 3 HSM" },
                { name: "PKCS#11", desc: "Cryptographic Token" },
                { name: "KMIP", desc: "Key Management" },
                { name: "OASIS", desc: "Standards" },
                { name: "AES-256", desc: "Encryption" },
                { name: "RSA", desc: "Asymmetric" },
                { name: "ECC", desc: "Elliptic Curve" },
                { name: "TLS/SSL", desc: "Transport Security" },
                { name: "X.509", desc: "Certificates" },
                { name: "JWT", desc: "Tokens" }
              ].map((standard, index) => (
                <div 
                  key={index}
                  className="bg-[#0d1a2d] border border-gray-700 rounded-lg p-4 text-center hover:border-emerald-400 transition-all"
                >
                  <div className="text-emerald-400 font-bold text-base sm:text-lg mb-1">{standard.name}</div>
                  <div className="text-gray-400 text-xs">{standard.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Use Cases */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Key Management Use Cases</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Database Encryption",
                  description: "Manage encryption keys for database-level and column-level encryption across multiple database platforms."
                },
                {
                  title: "Application Data Protection",
                  description: "Integrate key management with applications to encrypt sensitive data at rest and in transit."
                },
                {
                  title: "Cloud Data Security",
                  description: "Maintain control over encryption keys in cloud environments with bring-your-own-key (BYOK) and hold-your-own-key (HYOK) options."
                },
                {
                  title: "PKI Certificate Management",
                  description: "Manage SSL/TLS certificates and digital certificates for secure communications and authentication."
                },
                {
                  title: "Token & Secret Management",
                  description: "Securely store and manage API keys, passwords, tokens, and other secrets used by applications and services."
                }
              ].map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-[#0a1628] rounded-lg border-l-4 border-emerald-400">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Secure Your Encryption Keys Today
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our Encryption Key Management solutions provide the security, compliance, and control you need to protect your most sensitive data assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request a Consultation
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-bold text-sm sm:text-base inline-block"
            >
              Download Whitepaper
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
