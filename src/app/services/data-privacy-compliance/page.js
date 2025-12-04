'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataPrivacyCompliance() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-divinetechygirl-1181332.jpg" 
            alt="Data Privacy Compliance Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Data Security & Privacy Compliance" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data Security & <span className="text-pink-400">Privacy Compliance</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Data encryption, governance, and GDPR/CCPA compliance consulting to protect sensitive information.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border-y border-pink-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Data privacy regulations like GDPR, CCPA, and emerging global laws require organizations to implement robust data protection measures. Our services help you achieve and maintain compliance while securing sensitive data.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We provide end-to-end data security solutions including encryption, data classification, access controls, and privacy impact assessments to ensure your organization meets regulatory requirements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl p-8 border border-pink-500/30">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">GDPR, CCPA, and PIPEDA compliance expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Data discovery and classification automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Encryption and tokenization implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Privacy by design consulting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Data Classification</h3>
            <p className="text-gray-300 text-sm">Automated discovery and classification of sensitive data across your infrastructure.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Encryption Services</h3>
            <p className="text-gray-300 text-sm">Implementation of encryption at rest, in transit, and in use with key management.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Privacy Impact Assessment</h3>
            <p className="text-gray-300 text-sm">Comprehensive PIAs to identify and mitigate privacy risks in new projects.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Data Governance</h3>
            <p className="text-gray-300 text-sm">Establish policies, procedures, and controls for data lifecycle management.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Consent Management</h3>
            <p className="text-gray-300 text-sm">Implementation of consent tracking and management systems for user data.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Data Subject Rights</h3>
            <p className="text-gray-300 text-sm">Processes for handling access, deletion, and portability requests.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-cottonbro-5473312.jpg" 
            alt="Data Privacy Protection"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Privacy by Design Framework</h3>
            <p className="text-gray-200">Building privacy and security into your systems from the ground up</p>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border-y border-pink-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compliance Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['GDPR', 'CCPA', 'PIPEDA', 'LGPD', 'PDPA', 'HIPAA', 'PCI-DSS', 'ISO 27701'].map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-pink-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-pink-400">{framework}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Achieve Data Privacy Compliance</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Protect customer data and meet regulatory requirements with our expert guidance.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-pink-500/50">
          Start Compliance Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
