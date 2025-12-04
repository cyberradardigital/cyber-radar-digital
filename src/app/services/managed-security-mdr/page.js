'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function ManagedSecurityMDR() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-tima-miroshnichenko-5380589.jpg" 
            alt="Managed Security Services Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Managed Security & MDR" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Managed Security & <span className="text-purple-400">MDR</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              24×7 threat detection, incident response, and managed defense services to protect your organization from evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our Managed Detection and Response (MDR) service provides comprehensive, round-the-clock security monitoring and threat response. We combine advanced technology with expert human analysis to detect, investigate, and respond to threats before they impact your business.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a dedicated team of security analysts and state-of-the-art SIEM platforms, we ensure your infrastructure remains protected against sophisticated attacks, ransomware, and data breaches.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">24/7/365 security operations center (SOC) monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Rapid threat detection and incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Expert security analysts on demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Reduced security infrastructure costs</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Threat Detection</h3>
            <p className="text-gray-300 text-sm">Advanced analytics and AI-powered tools to identify threats across your network, endpoints, and cloud infrastructure.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Incident Response</h3>
            <p className="text-gray-300 text-sm">Rapid containment and remediation of security incidents with documented playbooks and procedures.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Threat Hunting</h3>
            <p className="text-gray-300 text-sm">Proactive searching for hidden threats that may have evaded traditional security controls.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Vulnerability Management</h3>
            <p className="text-gray-300 text-sm">Continuous scanning and prioritization of vulnerabilities with remediation guidance.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Security Analytics</h3>
            <p className="text-gray-300 text-sm">Comprehensive reporting and dashboards providing visibility into your security posture.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Compliance Support</h3>
            <p className="text-gray-300 text-sm">Documentation and reporting to support regulatory compliance requirements.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-markusspiske-2061168.jpg" 
            alt="Security Operations Center"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">24/7 Security Operations Center</h3>
            <p className="text-gray-200">Our expert security team monitors your infrastructure around the clock</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Splunk', 'CrowdStrike', 'Microsoft Sentinel', 'Palo Alto Networks', 'Elastic SIEM', 'IBM QRadar', 'SentinelOne', 'Carbon Black'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-purple-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started with our Managed Security & MDR service and protect your business 24/7.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-purple-500/50">
          Request a Consultation
        </a>
      </section>

      <Footer />
    </div>
  );
}
