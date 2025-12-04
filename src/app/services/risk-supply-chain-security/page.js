'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function RiskSupplyChainSecurity() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-abdullah-bin-mubarak-2067629-3693732.jpg" 
            alt="Risk Supply Chain Security Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Risk & Supply-Chain Security" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Risk & <span className="text-red-400">Supply-Chain Security</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Third-party risk assessment and vendor security management to protect your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your organization's security is only as strong as its weakest link. Our Risk & Supply-Chain Security services help you manage the risks associated with third-party vendors, partners, and suppliers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We provide comprehensive third-party risk assessments, continuous monitoring, and vendor security management to ensure your entire supply chain is secure and compliant.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Comprehensive third-party risk management (TPRM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Continuous monitoring of vendor security posture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Automated vendor risk assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Reduced risk of supply chain attacks</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Vendor Risk Assessment</h3>
            <p className="text-gray-300 text-sm">In-depth security assessments of your third-party vendors and suppliers.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Continuous Monitoring</h3>
            <p className="text-gray-300 text-sm">Real-time monitoring of vendor security ratings and threat intelligence.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Contract & SLA Review</h3>
            <p className="text-gray-300 text-sm">Review of vendor contracts and SLAs to ensure security requirements are met.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Software Bill of Materials</h3>
            <p className="text-gray-300 text-sm">SBOM analysis to identify vulnerabilities in third-party software components.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Incident Response Planning</h3>
            <p className="text-gray-300 text-sm">Collaborative incident response planning with critical vendors.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-red-400">Compliance Reporting</h3>
            <p className="text-gray-300 text-sm">Reporting on vendor compliance with industry regulations and standards.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-brett-sayles-2881229.jpg" 
            alt="Supply Chain Security Management"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Third-Party Risk Management</h3>
            <p className="text-gray-200">Comprehensive vendor security assessment and monitoring platform</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">TPRM Platforms We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SecurityScorecard', 'BitSight', 'UpGuard', 'Prevalent', 'OneTrust', 'RiskRecon', 'CyberGRX', 'ProcessUnity'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-red-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Supply Chain</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Manage third-party risk and protect your organization from supply chain attacks.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-red-500/50">
          Get Vendor Risk Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
