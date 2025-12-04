'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function ThreatIntelligenceHunting() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-mikhail-nilov-7534101.jpg" 
            alt="Threat Intelligence Hunting Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Threat Intelligence & Hunting" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Threat Intelligence & <span className="text-purple-400">Hunting</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Proactive detection using global threat feeds and behavioral analytics to hunt for hidden threats.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Don't wait for attacks to happen. Our Threat Intelligence & Hunting services provide a proactive approach to cybersecurity, actively searching for threats within your environment before they can cause damage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We leverage global threat intelligence feeds, behavioral analytics, and expert human analysis to identify indicators of compromise (IOCs) and tactics, techniques, and procedures (TTPs) used by attackers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Proactive threat detection and hunting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Access to global threat intelligence feeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Identification of advanced persistent threats (APTs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Reduced dwell time of attackers</span>
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
            <h3 className="text-xl font-bold mb-3 text-purple-400">Threat Intelligence Feeds</h3>
            <p className="text-gray-300 text-sm">Integration of commercial and open-source threat intelligence feeds into your security tools.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Proactive Threat Hunting</h3>
            <p className="text-gray-300 text-sm">Hypothesis-driven hunting for threats based on attacker TTPs and behavioral analytics.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Dark Web Monitoring</h3>
            <p className="text-gray-300 text-sm">Monitoring of dark web forums and marketplaces for mentions of your organization.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">IOC & TTP Analysis</h3>
            <p className="text-gray-300 text-sm">Analysis of indicators of compromise and attacker techniques to improve defenses.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Threat Actor Profiling</h3>
            <p className="text-gray-300 text-sm">Profiling of threat actors targeting your industry and organization.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Security Playbooks</h3>
            <p className="text-gray-300 text-sm">Development of custom threat hunting playbooks for your environment.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-jorge-jesus-137537-614117.jpg" 
            alt="Threat Intelligence Analysis"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Advanced Threat Intelligence Center</h3>
            <p className="text-gray-200">Proactive hunting and analysis of emerging cyber threats</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Threat Intelligence Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Recorded Future', 'Mandiant', 'CrowdStrike Falcon', 'Anomali', 'ThreatQuotient', 'MISP', 'VirusTotal', 'Shodan'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-purple-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Hunt for Threats Proactively</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Stay ahead of attackers with our proactive threat intelligence and hunting services.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-purple-500/50">
          Start Threat Hunting
        </a>
      </section>

      <Footer />
    </div>
  );
}
