'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function IdentityAccessManagement() {
  const componentsRef = useGsapStagger(5, { stagger: 0.15 });
  const capabilitiesRef = useGsapStagger(8, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />

      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-kevin-ku-92347-577585.jpg" 
            alt="Identity Access Management Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Identity & Access Management" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Identity & <span className="text-emerald-400">Access Management</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IAM Solutions for Secure Access
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-y border-emerald-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Identity and Access Management (IAM) is a critical component of your organization's security strategy. Our comprehensive IAM solutions ensure that the right individuals have access to the right resources at the right times for the right reasons, while keeping unauthorized users out.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cyber Radar Systems provides enterprise-grade IAM solutions that streamline user provisioning, enforce access policies, and provide comprehensive visibility into who has access to what across your organization. Our solutions help you reduce security risks, improve compliance, and enhance user experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Enhanced security with multi-factor authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Streamlined user provisioning and de-provisioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Improved compliance and audit capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Single sign-on (SSO) for better user experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* IAM Components */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            Core IAM Components
          </AnimatedHeading>
          
          <div ref={componentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Single Sign-On (SSO)",
                description: "Enable users to access multiple applications with one set of credentials, improving security and user experience while reducing password fatigue.",
                icon: "🔑"
              },
              {
                title: "Multi-Factor Authentication",
                description: "Add an extra layer of security with multiple forms of verification, protecting against password-based attacks and unauthorized access.",
                icon: "🛡️"
              },
              {
                title: "Privileged Access Management",
                description: "Control and monitor access to critical systems and data, ensuring privileged accounts are used appropriately and securely.",
                icon: "👑"
              },
              {
                title: "Role-Based Access Control",
                description: "Define and enforce access policies based on user roles, ensuring least privilege access and simplified permission management.",
                icon: "👥"
              },
              {
                title: "Identity Governance",
                description: "Automate access certification, policy enforcement, and compliance reporting to maintain security and meet regulatory requirements.",
                icon: "📋"
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

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-kevin-ku-92347-577585.jpg" 
            alt="IAM Solutions"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise IAM Platform</h3>
            <p className="text-gray-200">Comprehensive identity and access management solutions</p>
          </div>
        </div>

        {/* IAM Capabilities */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
            IAM Capabilities We Deliver
          </AnimatedHeading>
          
          <div ref={capabilitiesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "User Provisioning & De-provisioning",
              "Access Request Management",
              "Password Management & Reset",
              "Access Reviews & Recertification",
              "Risk-Based Authentication",
              "Federation & Directory Services",
              "API & Application Integration",
              "Audit & Compliance Reporting"
            ].map((capability, index) => (
              <div 
                key={index}
                className="bg-[#0f1f33] border border-gray-700 rounded-lg p-5 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Benefits of IAM Implementation</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Enhanced Security",
                  description: "Reduce the risk of unauthorized access and data breaches with robust authentication and authorization controls."
                },
                {
                  title: "Improved Compliance",
                  description: "Meet regulatory requirements with automated access controls, audit trails, and comprehensive reporting."
                },
                {
                  title: "Increased Productivity",
                  description: "Streamline user onboarding and reduce IT helpdesk workload with self-service capabilities and SSO."
                },
                {
                  title: "Cost Reduction",
                  description: "Lower operational costs by automating manual processes and reducing password-related support tickets."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#0d1a2d] rounded-lg">
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

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Strengthen Your Identity Security?
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Let our IAM experts help you implement a comprehensive identity and access management strategy tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-emerald-300 transition-colors font-bold text-sm sm:text-base inline-block shadow-lg"
            >
              Request a Demo
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
