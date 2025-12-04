'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function CloudSecurity() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-cottonbro-5473955.jpg" 
            alt="Cloud Security Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Cloud Security" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud <span className="text-blue-400">Security</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection for AWS, Azure, and Google Cloud environments with advanced security controls and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-y border-blue-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                As organizations migrate to the cloud, security becomes more complex. Our cloud security services provide end-to-end protection across multi-cloud and hybrid environments, ensuring your data and applications remain secure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We implement zero-trust architecture, cloud-native security controls, and continuous monitoring to protect against misconfigurations, data breaches, and unauthorized access.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Multi-cloud security management (AWS, Azure, GCP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Automated compliance monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Real-time threat detection and response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Cost optimization through security automation</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Cloud Posture Management</h3>
            <p className="text-gray-300 text-sm">Continuous assessment of cloud configurations to identify and remediate security risks and misconfigurations.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Identity & Access Control</h3>
            <p className="text-gray-300 text-sm">Implementation of least-privilege access, multi-factor authentication, and identity governance.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Data Protection</h3>
            <p className="text-gray-300 text-sm">Encryption at rest and in transit, data loss prevention, and secure key management services.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Network Security</h3>
            <p className="text-gray-300 text-sm">Virtual firewalls, network segmentation, and secure connectivity between cloud and on-premises.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Compliance Automation</h3>
            <p className="text-gray-300 text-sm">Automated compliance checks for SOC 2, ISO 27001, PCI-DSS, HIPAA, and other frameworks.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Workload Protection</h3>
            <p className="text-gray-300 text-sm">Container security, serverless protection, and runtime application self-protection (RASP).</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-karola-g-5980889.jpg" 
            alt="Cloud Infrastructure Security"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Multi-Cloud Security Architecture</h3>
            <p className="text-gray-200">Unified security management across AWS, Azure, and Google Cloud platforms</p>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-y border-blue-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Supported Cloud Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-blue-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Amazon Web Services</h3>
              <p className="text-gray-300 text-sm">Complete security for EC2, S3, Lambda, RDS, and all AWS services.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-blue-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Microsoft Azure</h3>
              <p className="text-gray-300 text-sm">Azure Security Center integration with advanced threat protection.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-blue-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Google Cloud Platform</h3>
              <p className="text-gray-300 text-sm">GCP Security Command Center and Chronicle SIEM integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Cloud Infrastructure</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Protect your cloud assets with enterprise-grade security controls and compliance.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-blue-500/50">
          Get Cloud Security Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
