'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function IncidentResponseForensics() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-shkrabaanthony-5475752.jpg" 
            alt="Incident Response Forensics Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Incident Response & Forensics" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Incident Response & <span className="text-yellow-400">Forensics</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Rapid breach investigation and containment with expert digital forensics to minimize the impact of security incidents.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-y border-yellow-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                When a security incident occurs, a rapid and effective response is critical. Our Incident Response & Forensics services provide the expertise and tools to quickly contain threats, investigate the root cause, and restore normal operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of certified incident responders and forensic investigators is available 24/7 to help you navigate the complexities of a security breach, from initial detection to post-incident recovery.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">24/7 emergency incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Rapid threat containment and eradication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Digital forensics and evidence preservation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Minimized business disruption and financial loss</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Incident Response Retainer</h3>
            <p className="text-gray-300 text-sm">Guaranteed response times and access to our expert team when you need it most.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Digital Forensics</h3>
            <p className="text-gray-300 text-sm">In-depth investigation of compromised systems to determine the attack vector and scope.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Malware Analysis</h3>
            <p className="text-gray-300 text-sm">Reverse engineering of malware to understand its capabilities and impact.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Threat Containment</h3>
            <p className="text-gray-300 text-sm">Rapid isolation of affected systems to prevent further spread of the attack.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Recovery & Remediation</h3>
            <p className="text-gray-300 text-sm">Guidance on restoring systems and implementing security improvements.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Post-Incident Reporting</h3>
            <p className="text-gray-300 text-sm">Detailed report of the incident, findings, and recommendations for future prevention.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-tima-miroshnichenko-5380838.jpg" 
            alt="Digital Forensics Investigation"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Digital Forensics Laboratory</h3>
            <p className="text-gray-200">Advanced forensics capabilities for thorough incident investigation</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-y border-yellow-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Forensic Tools We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['EnCase', 'FTK', 'Volatility', 'Wireshark', 'Sleuth Kit', 'Autopsy', 'Redline', 'Cellebrite'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-yellow-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Facing a Security Incident?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact our 24/7 incident response team for immediate assistance.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-yellow-500/50">
          Get Emergency Help Now
        </a>
      </section>

      <Footer />
    </div>
  );
}
